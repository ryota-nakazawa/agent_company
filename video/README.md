# video

`agent_company` のデモ動画を作るための Remotion プロジェクトです。

## 役割

- `demo-recorder` が使う動画生成基盤
- アプリ紹介動画、成果共有動画、短いデモ動画のテンプレート置き場

## 前提

- Node.js 22 以上
- `npm install` 済み

この Mac では必要に応じて次を使ってください。

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
```

## コマンド

```bash
cd /Users/ryota/Desktop/エージェント作成/agent_team/video
npm install
npm run studio
```

レンダリング:

```bash
npm run render:agent-company
npm run render:skill-sprint-coach
```

静止画プレビュー:

```bash
npm run still:agent-company
npm run still:skill-sprint-coach
```

## 出力先

- `renders/agent-company-showcase.mp4`
- `renders/agent-company-poster.png`
- `renders/skill-sprint-coach.mp4`
- `renders/skill-sprint-coach-poster.png`

## 現在の composition

- `AgentCompanyShowcase`
  - `agent_company` 全体の紹介動画
- `SkillSprintCoachShowcase`
  - 生成AI時代のスキルアップをテーマにしたアプリ紹介動画

`renders/` は生成物なので Git 管理外です。
