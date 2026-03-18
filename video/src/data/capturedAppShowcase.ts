import {z} from "zod";

export const CapturedScreenshotSchema = z.object({
  src: z.string(),
  title: z.string(),
  caption: z.string(),
});

export const CapturedAppManifestSchema = z.object({
  appName: z.string(),
  title: z.string(),
  subtitle: z.string(),
  hook: z.string(),
  badge: z.string().default("Playwright Capture"),
  cta: z.string(),
  highlights: z.array(z.string()).min(2),
  screenshots: z.array(CapturedScreenshotSchema).min(1),
  theme: z
    .object({
      background: z.string(),
      surface: z.string(),
      accent: z.string(),
      accentSoft: z.string(),
      text: z.string(),
      muted: z.string(),
    })
    .default({
      background: "#0f172a",
      surface: "#111c36",
      accent: "#7dd3fc",
      accentSoft: "rgba(125, 211, 252, 0.18)",
      text: "#ecf4ff",
      muted: "#9fb3d8",
    }),
});

export const CapturedAppShowcaseCompositionSchema = z.object({
  manifestPath: z.string(),
});

export type CapturedAppManifest = z.infer<typeof CapturedAppManifestSchema>;
export type CapturedAppShowcaseCompositionProps = z.infer<
  typeof CapturedAppShowcaseCompositionSchema
>;

export const capturedAppShowcaseCompositionDefaultProps: CapturedAppShowcaseCompositionProps =
  {
    manifestPath: "captures/sample/manifest.json",
  };
