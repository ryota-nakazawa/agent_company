import {z} from "zod";

export const AgentCompanyShowcaseSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  theme: z.object({
    background: z.string(),
    surface: z.string(),
    accent: z.string(),
    accentSoft: z.string(),
    text: z.string(),
    muted: z.string(),
  }),
  workflow: z.array(z.string()).min(3),
  capabilities: z
    .array(
      z.object({
        title: z.string(),
        detail: z.string(),
      }),
    )
    .min(3),
  app: z.object({
    name: z.string(),
    hook: z.string(),
    lanes: z.array(
      z.object({
        name: z.string(),
        cards: z.array(z.string()),
      }),
    ),
  }),
  cta: z.string(),
});

export type AgentCompanyShowcaseProps = z.infer<
  typeof AgentCompanyShowcaseSchema
>;

export const agentCompanyShowcaseDefaultProps: AgentCompanyShowcaseProps = {
  title: "agent_company Demo Recorder",
  subtitle:
    "調査から実装、レビュー、動画化までを 1 つの agent company としてつなぐ紹介動画",
  theme: {
    background: "#0f172a",
    surface: "#111c36",
    accent: "#7dd3fc",
    accentSoft: "rgba(125, 211, 252, 0.18)",
    text: "#ecf4ff",
    muted: "#9fb3d8",
  },
  workflow: [
    "Secretary Router で依頼を分解",
    "Trend Research と Product Planning で方向を決定",
    "Builder と UI Polish で MVP を実装",
    "Review と Ship で品質を確認",
    "Demo Recorder が成果を動画化",
  ],
  capabilities: [
    {
      title: "最新情報ドリブン",
      detail: "外部シグナルを拾って、今作る価値のあるテーマに絞る。",
    },
    {
      title: "役割分担で進める",
      detail: "1 人の AI に全部頼まず、役割ごとに責務と成果物を分ける。",
    },
    {
      title: "動くものまで持っていく",
      detail: "Builder、Review、Ship までつないで、MVP を最後まで仕上げる。",
    },
  ],
  app: {
    name: "Task Action Bridge",
    hook: "会議メモや思いつきを Inbox -> Today -> Next に橋渡しする task 管理アプリ",
    lanes: [
      {
        name: "Inbox",
        cards: ["顧客ヒアリング要点を整理", "採用候補者へ連絡文を作る"],
      },
      {
        name: "Today",
        cards: ["API 仕様の確認を完了", "請求画面の不具合を再現"],
      },
      {
        name: "Next",
        cards: ["週次レビューで next を見直す"],
      },
      {
        name: "Done",
        cards: ["議事録の TODO を inbox に取り込む"],
      },
    ],
  },
  cta: "次は browser-qa と Remotion 連携で、作ったアプリを自動でデモ化する。",
};
