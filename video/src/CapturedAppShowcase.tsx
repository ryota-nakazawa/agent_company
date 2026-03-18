import React, {useEffect, useState} from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  continueRender,
  delayRender,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  CapturedAppManifest,
  CapturedAppManifestSchema,
  CapturedAppShowcaseCompositionProps,
} from "./data/capturedAppShowcase";

const panelStyle: React.CSSProperties = {
  borderRadius: 28,
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 30px 90px rgba(15, 23, 42, 0.28)",
  backdropFilter: "blur(24px)",
};

const pagePadding = {
  paddingLeft: 84,
  paddingRight: 84,
};

const fadeUp = (frame: number, fps: number, delay: number) => {
  const entrance = spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 18,
      stiffness: 130,
      mass: 0.8,
    },
  });

  return {
    opacity: interpolate(frame, [delay, delay + fps * 0.8], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
  };
};

const BrowserShot: React.FC<{
  shot: CapturedAppManifest["screenshots"][number];
  theme: CapturedAppManifest["theme"];
}> = ({shot, theme}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        gap: 28,
        ...pagePadding,
      }}
    >
      <div
        style={{
          fontSize: 26,
          color: theme.accent,
          fontWeight: 700,
          ...fadeUp(frame, fps, 0),
        }}
      >
        App Capture
      </div>
      <div
        style={{
          fontSize: 68,
          fontWeight: 800,
          color: theme.text,
          lineHeight: 1.05,
          ...fadeUp(frame, fps, 8),
        }}
      >
        {shot.title}
      </div>
      <div
        style={{
          maxWidth: 860,
          fontSize: 30,
          lineHeight: 1.45,
          color: theme.muted,
          ...fadeUp(frame, fps, 16),
        }}
      >
        {shot.caption}
      </div>
      <div
        style={{
          ...panelStyle,
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.05)",
          padding: 18,
          ...fadeUp(frame, fps, 24),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            paddingBottom: 14,
          }}
        >
          <div style={{width: 12, height: 12, borderRadius: 999, background: "#f87171"}} />
          <div style={{width: 12, height: 12, borderRadius: 999, background: "#fbbf24"}} />
          <div style={{width: 12, height: 12, borderRadius: 999, background: "#34d399"}} />
          <div
            style={{
              marginLeft: 12,
              fontSize: 22,
              color: theme.muted,
            }}
          >
            {shot.src}
          </div>
        </div>
        <Img
          src={staticFile(shot.src)}
          style={{
            width: "100%",
            height: 470,
            objectFit: "cover",
            borderRadius: 18,
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

const IntroScene: React.FC<{manifest: CapturedAppManifest}> = ({manifest}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "space-between",
        paddingTop: 72,
        paddingBottom: 72,
        ...pagePadding,
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          padding: "12px 18px",
          borderRadius: 999,
          backgroundColor: manifest.theme.accentSoft,
          color: manifest.theme.accent,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 0.5,
          ...fadeUp(frame, fps, 0),
        }}
      >
        {manifest.badge}
      </div>
      <div style={{maxWidth: 980}}>
        <div
          style={{
            fontSize: 108,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 0.93,
            color: manifest.theme.text,
            ...fadeUp(frame, fps, 8),
          }}
        >
          {manifest.title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 38,
            lineHeight: 1.45,
            color: manifest.theme.muted,
            ...fadeUp(frame, fps, 18),
          }}
        >
          {manifest.subtitle}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 28,
          ...fadeUp(frame, fps, 28),
        }}
      >
        <div
          style={{
            ...panelStyle,
            padding: 32,
            background:
              "linear-gradient(135deg, rgba(125, 211, 252, 0.14), rgba(59, 130, 246, 0.08))",
          }}
        >
          <div style={{fontSize: 24, color: manifest.theme.muted}}>アプリ概要</div>
          <div
            style={{
              marginTop: 12,
              fontSize: 46,
              lineHeight: 1.3,
              fontWeight: 700,
              color: manifest.theme.text,
            }}
          >
            {manifest.appName}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 28,
              lineHeight: 1.45,
              color: manifest.theme.muted,
            }}
          >
            {manifest.hook}
          </div>
        </div>
        <div
          style={{
            ...panelStyle,
            padding: 32,
            background: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div style={{fontSize: 22, color: manifest.theme.muted}}>見せるポイント</div>
          <div style={{display: "grid", gap: 12, marginTop: 18}}>
            {manifest.highlights.slice(0, 3).map((item) => (
              <div
                key={item}
                style={{
                  fontSize: 26,
                  lineHeight: 1.4,
                  color: manifest.theme.text,
                }}
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const OutroScene: React.FC<{manifest: CapturedAppManifest}> = ({manifest}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        gap: 26,
        ...pagePadding,
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: manifest.theme.accent,
          fontWeight: 700,
          ...fadeUp(frame, fps, 0),
        }}
      >
        Demo Recorder
      </div>
      <div
        style={{
          fontSize: 82,
          fontWeight: 800,
          color: manifest.theme.text,
          lineHeight: 1.02,
          maxWidth: 980,
          ...fadeUp(frame, fps, 8),
        }}
      >
        スクリーンショットから
        <br />
        そのまま紹介動画へ
      </div>
      <div
        style={{
          ...panelStyle,
          background: "rgba(255, 255, 255, 0.05)",
          padding: 34,
          maxWidth: 960,
          ...fadeUp(frame, fps, 18),
        }}
      >
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.45,
            color: manifest.theme.text,
          }}
        >
          {manifest.cta}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const CapturedAppShowcase: React.FC<
  CapturedAppShowcaseCompositionProps
> = ({manifestPath}) => {
  const [handle] = useState(() => delayRender("Loading captured app manifest"));
  const [manifest, setManifest] = useState<CapturedAppManifest | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const response = await fetch(staticFile(manifestPath));
      const json = await response.json();
      const parsed = CapturedAppManifestSchema.parse(json);
      if (cancelled) {
        return;
      }
      setManifest(parsed);
      continueRender(handle);
    };

    load().catch((error) => {
      throw error;
    });

    return () => {
      cancelled = true;
    };
  }, [handle, manifestPath]);

  if (!manifest) {
    return null;
  }

  const screenshotFrames = 150;
  const screenshotStart = 210;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at top left, ${manifest.theme.surface} 0%, ${manifest.theme.background} 62%)`,
        fontFamily:
          "'SF Pro Display', 'Helvetica Neue', 'Hiragino Sans', sans-serif",
      }}
    >
      <Sequence from={0} durationInFrames={210}>
        <IntroScene manifest={manifest} />
      </Sequence>
      {manifest.screenshots.slice(0, 3).map((shot, index) => (
        <Sequence
          key={`${shot.src}-${index}`}
          from={screenshotStart + index * screenshotFrames}
          durationInFrames={screenshotFrames}
        >
          <BrowserShot shot={shot} theme={manifest.theme} />
        </Sequence>
      ))}
      <Sequence from={screenshotStart + manifest.screenshots.slice(0, 3).length * screenshotFrames} durationInFrames={120}>
        <OutroScene manifest={manifest} />
      </Sequence>
    </AbsoluteFill>
  );
};
