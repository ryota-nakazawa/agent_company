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
npm run render:captured-demo -- captures/sample/manifest.json renders/sample-captured-demo.mp4
```

静止画プレビュー:

```bash
npm run still:agent-company
npm run still:skill-sprint-coach
npm run still:captured-demo -- captures/sample/manifest.json renders/sample-captured-demo.png
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
- `CapturedAppShowcase`
  - Playwright で取得したスクリーンショットを差し込む汎用アプリ紹介動画

## Playwright 連携フロー

1. キャプチャ用ディレクトリを作る

```bash
cd /Users/ryota/Desktop/エージェント作成/agent_team/video
npm run capture:manifest -- ai-skill-sprint-coach "AI Skill Sprint Coach" "14日分の学習スプリントを返すアプリ"
```

2. `playwright-cli` でアプリを開いて素材を取る

```bash
playwright-cli -s=skill-sprint open http://localhost:4331
playwright-cli -s=skill-sprint resize 1440 980
playwright-cli -s=skill-sprint screenshot --filename=/Users/ryota/Desktop/エージェント作成/agent_team/video/public/captures/ai-skill-sprint-coach/01-hero.png
playwright-cli -s=skill-sprint snapshot
```

必要なら `02-flow.png`、`03-result.png`、`demo.webm` を同じディレクトリに追加します。

3. `video/public/captures/<slug>/manifest.json` を編集してタイトルや説明を整える

4. manifest を元に動画をレンダリングする

```bash
cd /Users/ryota/Desktop/エージェント作成/agent_team/video
npm run render:captured-demo -- captures/ai-skill-sprint-coach/manifest.json renders/ai-skill-sprint-coach-demo.mp4
```

`renders/` は生成物なので Git 管理外です。
