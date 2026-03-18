import {AgentCompanyShowcaseProps} from "./agentCompanyShowcase";

export const skillSprintCoachShowcaseDefaultProps: AgentCompanyShowcaseProps = {
  title: "AI Skill Sprint Coach",
  subtitle:
    "生成AI時代のスキルアップを、14日スプリントと成果物ベースで回すための紹介動画",
  theme: {
    background: "#1f160f",
    surface: "#2d2118",
    accent: "#ffb46a",
    accentSoft: "rgba(255, 180, 106, 0.18)",
    text: "#fff7ef",
    muted: "#d9c7b6",
  },
  workflow: [
    "最新シグナルから upskilling 需要を確認",
    "Product Planning で 2週間スプリント型 MVP に圧縮",
    "Builder が React と Express でプラン生成 UI を実装",
    "Review と Ship で起動、API、UI を検証",
    "Demo Recorder が成果を動画として出力",
  ],
  capabilities: [
    {
      title: "学習より成果物",
      detail: "何を学ぶかではなく、次の 14 日で何を作って証明するかに寄せる。",
    },
    {
      title: "公式シグナル準拠",
      detail: "WEF、LinkedIn、Microsoft の最新データを需要根拠として扱う。",
    },
    {
      title: "2週間で回る設計",
      detail: "毎日の行動、成果物、振り返り軸まで 1 本のスプリントに落とし込む。",
    },
  ],
  app: {
    name: "AI Skill Sprint Coach",
    hook: "目標ロールと投入時間を入れると、14日分のスキルスプリントと成果物計画を返す",
    lanes: [
      {
        name: "Signals",
        cards: ["77% が upskilling を重視", "2030 年までにスキル 70% 変化"],
      },
      {
        name: "Inputs",
        cards: ["目標ロール", "現在レベル", "2週間後のゴール"],
      },
      {
        name: "Sprint",
        cards: ["14日プラン", "成果物 3 点", "振り返り軸"],
      },
      {
        name: "Proof",
        cards: ["PRD", "評価シート", "説明資料"],
      },
    ],
  },
  cta: "次は project-log と連動して、学習スプリントの履歴を自動で動画にまとめる。",
};
