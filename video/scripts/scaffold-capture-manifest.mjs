import fs from "node:fs";
import path from "node:path";

const [slug, appName, hook] = process.argv.slice(2);

if (!slug || !appName || !hook) {
  console.error(
    "Usage: node scripts/scaffold-capture-manifest.mjs <slug> <appName> <hook>",
  );
  process.exit(1);
}

const projectRoot = process.cwd();
const captureDir = path.join(projectRoot, "public", "captures", slug);
const manifestPath = path.join(captureDir, "manifest.json");

fs.mkdirSync(captureDir, {recursive: true});

const manifest = {
  appName,
  title: `${appName} Demo`,
  subtitle: "Playwright で取得した画面素材を使った紹介動画",
  hook,
  badge: "Playwright Capture",
  cta: "次はこの素材を増やして、主要導線の変化を継続的に動画化する。",
  highlights: [
    "最初に見せたい画面を3枚に絞る",
    "Playwright で同じ導線を再現できる形にする",
    "Remotion で短い紹介動画にまとめる",
  ],
  screenshots: [
    {
      src: `captures/${slug}/01-hero.png`,
      title: "導入画面",
      caption: "最初に見せたい価値提案と主要 CTA を入れる。",
    },
    {
      src: `captures/${slug}/02-flow.png`,
      title: "主要導線",
      caption: "入力や操作の流れが分かる状態をキャプチャする。",
    },
    {
      src: `captures/${slug}/03-result.png`,
      title: "結果画面",
      caption: "最終的にユーザーが得る結果を見せる。",
    },
  ],
  theme: {
    background: "#0f172a",
    surface: "#111c36",
    accent: "#7dd3fc",
    accentSoft: "rgba(125, 211, 252, 0.18)",
    text: "#ecf4ff",
    muted: "#9fb3d8",
  },
};

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Created manifest: ${manifestPath}`);
