import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  AgentCompanyShowcaseProps,
  agentCompanyShowcaseDefaultProps,
} from "./data/agentCompanyShowcase";

const panelStyle: React.CSSProperties = {
  borderRadius: 28,
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 30px 90px rgba(15, 23, 42, 0.28)",
  backdropFilter: "blur(24px)",
};

const sectionPadding = {
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
    transform: `translateY(${interpolate(entrance, [0, 1], [34, 0])}px)`,
  };
};

const IntroScene: React.FC<{
  theme: AgentCompanyShowcaseProps["theme"];
  title: string;
  subtitle: string;
}> = ({theme, title, subtitle}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "space-between",
        paddingTop: 72,
        paddingBottom: 72,
        ...sectionPadding,
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          padding: "12px 18px",
          borderRadius: 999,
          backgroundColor: theme.accentSoft,
          color: theme.accent,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 0.5,
          ...fadeUp(frame, fps, 0),
        }}
      >
        agent_company / Demo Recorder
      </div>
      <div style={{maxWidth: 980}}>
        <div
          style={{
            fontSize: 116,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 0.93,
            color: theme.text,
            ...fadeUp(frame, fps, 8),
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 38,
            lineHeight: 1.5,
            color: theme.muted,
            ...fadeUp(frame, fps, 18),
          }}
        >
          {subtitle}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 28,
          ...fadeUp(frame, fps, 26),
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
          <div style={{fontSize: 24, color: theme.muted}}>狙い</div>
          <div
            style={{
              marginTop: 14,
              fontSize: 48,
              lineHeight: 1.3,
              fontWeight: 700,
              color: theme.text,
            }}
          >
            調査、実装、レビューの結果を
            <br />
            そのまま見せられる成果物に変える
          </div>
        </div>
        <div
          style={{
            ...panelStyle,
            padding: 32,
            background: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div style={{fontSize: 22, color: theme.muted}}>今回のテーマ</div>
          <div
            style={{
              marginTop: 16,
              fontSize: 34,
              fontWeight: 700,
              lineHeight: 1.45,
              color: theme.text,
            }}
          >
            タスク管理アプリ
            <br />
            「Task Action Bridge」
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const WorkflowScene: React.FC<{
  theme: AgentCompanyShowcaseProps["theme"];
  workflow: string[];
}> = ({theme, workflow}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        gap: 28,
        ...sectionPadding,
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: theme.accent,
          fontWeight: 700,
          ...fadeUp(frame, fps, 0),
        }}
      >
        Workflow
      </div>
      <div
        style={{
          fontSize: 74,
          fontWeight: 800,
          color: theme.text,
          lineHeight: 1.1,
          ...fadeUp(frame, fps, 6),
        }}
      >
        agent_company が仕事を
        <br />
        どうつなぐか
      </div>
      <div
        style={{
          display: "grid",
          gap: 20,
          marginTop: 16,
        }}
      >
        {workflow.map((step, index) => {
          const localDelay = 14 + index * 5;
          return (
            <div
              key={step}
              style={{
                ...panelStyle,
                display: "grid",
                gridTemplateColumns: "92px 1fr",
                alignItems: "center",
                padding: "22px 28px",
                background: "rgba(255, 255, 255, 0.05)",
                ...fadeUp(frame, fps, localDelay),
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.accentSoft,
                  color: theme.accent,
                  fontWeight: 800,
                  fontSize: 28,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 600,
                  color: theme.text,
                }}
              >
                {step}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const CapabilityScene: React.FC<{
  theme: AgentCompanyShowcaseProps["theme"];
  capabilities: AgentCompanyShowcaseProps["capabilities"];
}> = ({theme, capabilities}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        ...sectionPadding,
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: theme.accent,
          fontWeight: 700,
          ...fadeUp(frame, fps, 0),
        }}
      >
        Capabilities
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 74,
          fontWeight: 800,
          lineHeight: 1.1,
          color: theme.text,
          ...fadeUp(frame, fps, 8),
        }}
      >
        動画機能は単独ではなく
        <br />
        会社全体の最後の成果物
      </div>
      <div
        style={{
          marginTop: 42,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 22,
        }}
      >
        {capabilities.map((item, index) => (
          <div
            key={item.title}
            style={{
              ...panelStyle,
              minHeight: 330,
              padding: 30,
              background:
                index === 1
                  ? "linear-gradient(180deg, rgba(125, 211, 252, 0.18), rgba(255, 255, 255, 0.05))"
                  : "rgba(255, 255, 255, 0.05)",
              ...fadeUp(frame, fps, 18 + index * 6),
            }}
          >
            <div style={{fontSize: 34, fontWeight: 700, color: theme.text}}>
              {item.title}
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 28,
                lineHeight: 1.6,
                color: theme.muted,
              }}
            >
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const AppScene: React.FC<{
  theme: AgentCompanyShowcaseProps["theme"];
  app: AgentCompanyShowcaseProps["app"];
}> = ({theme, app}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        ...sectionPadding,
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: theme.accent,
          fontWeight: 700,
          ...fadeUp(frame, fps, 0),
        }}
      >
        Built App
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.86fr 1.14fr",
          gap: 28,
          marginTop: 24,
        }}
      >
        <div
          style={{
            ...panelStyle,
            padding: 34,
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(17, 28, 54, 0.88))",
            ...fadeUp(frame, fps, 8),
          }}
        >
          <div style={{fontSize: 62, fontWeight: 800, color: theme.text}}>
            {app.name}
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 32,
              lineHeight: 1.55,
              color: theme.muted,
            }}
          >
            {app.hook}
          </div>
          <div
            style={{
              marginTop: 30,
              padding: "18px 20px",
              borderRadius: 22,
              backgroundColor: theme.accentSoft,
              color: theme.text,
              fontSize: 28,
              lineHeight: 1.5,
            }}
          >
            UI Polish で導線を整理し、
            <br />
            Review と Ship で起動不良まで確認済み
          </div>
        </div>
        <div
          style={{
            ...panelStyle,
            padding: 24,
            background: "rgba(255, 255, 255, 0.05)",
            ...fadeUp(frame, fps, 16),
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              height: "100%",
            }}
          >
            {app.lanes.map((lane, laneIndex) => (
              <div
                key={lane.name}
                style={{
                  borderRadius: 24,
                  padding: 18,
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  alignContent: "start",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    height: 8,
                    borderRadius: 999,
                    background:
                      laneIndex === 0
                        ? "#8b5cf6"
                        : laneIndex === 1
                          ? "#38bdf8"
                          : laneIndex === 2
                            ? "#34d399"
                            : "#94a3b8",
                  }}
                />
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: theme.text,
                  }}
                >
                  {lane.name}
                </div>
                {lane.cards.map((card, cardIndex) => (
                  <div
                    key={card}
                    style={{
                      ...panelStyle,
                      padding: 16,
                      backgroundColor: "rgba(255, 255, 255, 0.96)",
                      color: "#10203f",
                      fontSize: 18,
                      lineHeight: 1.45,
                      transform: `translateY(${interpolate(
                        frame,
                        [20 + laneIndex * 3 + cardIndex * 3, 42 + laneIndex * 3 + cardIndex * 3],
                        [20, 0],
                        {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        },
                      )}px)`,
                      opacity: interpolate(
                        frame,
                        [20 + laneIndex * 3 + cardIndex * 3, 42 + laneIndex * 3 + cardIndex * 3],
                        [0, 1],
                        {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        },
                      ),
                    }}
                  >
                    {card}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const OutroScene: React.FC<{
  theme: AgentCompanyShowcaseProps["theme"];
  cta: string;
}> = ({theme, cta}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 90,
      }}
    >
      <div
        style={{
          ...panelStyle,
          width: "100%",
          padding: 46,
          background:
            "radial-gradient(circle at top, rgba(125, 211, 252, 0.14), rgba(15, 23, 42, 0.92))",
          textAlign: "center",
          ...fadeUp(frame, fps, 0),
        }}
      >
        <div style={{fontSize: 28, color: theme.accent, fontWeight: 700}}>
          Next Step
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 74,
            lineHeight: 1.2,
            fontWeight: 800,
            color: theme.text,
          }}
        >
          {cta}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.6,
            color: theme.muted,
          }}
        >
          agent_company の成果物を、実装ログからそのまま動画へ接続する。
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const AgentCompanyShowcase: React.FC<
  Partial<AgentCompanyShowcaseProps>
> = (incomingProps) => {
  const props = {...agentCompanyShowcaseDefaultProps, ...incomingProps};

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at top right, rgba(125, 211, 252, 0.16), transparent 30%)," +
          "radial-gradient(circle at bottom left, rgba(99, 102, 241, 0.16), transparent 28%)," +
          props.theme.background,
        fontFamily: '"Hiragino Sans", "Yu Gothic", sans-serif',
      }}
    >
      <Sequence from={0} durationInFrames={180}>
        <IntroScene
          theme={props.theme}
          title={props.title}
          subtitle={props.subtitle}
        />
      </Sequence>
      <Sequence from={180} durationInFrames={180}>
        <WorkflowScene theme={props.theme} workflow={props.workflow} />
      </Sequence>
      <Sequence from={360} durationInFrames={180}>
        <CapabilityScene
          theme={props.theme}
          capabilities={props.capabilities}
        />
      </Sequence>
      <Sequence from={540} durationInFrames={210}>
        <AppScene theme={props.theme} app={props.app} />
      </Sequence>
      <Sequence from={750} durationInFrames={150}>
        <OutroScene theme={props.theme} cta={props.cta} />
      </Sequence>
    </AbsoluteFill>
  );
};
