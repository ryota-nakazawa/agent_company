# agent_company

Codex の agent skills を使って、「最新情報を調査し、需要のあるアプリを企画・実装・レビューする会社」を再現するためのリポジトリです。

## 現在の構成

- `ORG_CHART.md`
  - エージェント会社の組織図と標準フロー
- `AGENTS.md`
  - この workspace で使う skill 一覧と使い分け
- `.agents/skills/`
  - 各 role の `SKILL.md`
  - `secretary-router`
  - `trend-research`
  - `product-planning`
  - `builder`
  - `ui-polish`
  - `project-log`
  - `gstack-plan-eng-review`
  - `gstack-review`
  - `gstack-ship`
- `demo/kosodate-compass/`
  - 子育て支援をテーマにした MVP デモアプリ
- `logs/`
  - 作業ログと判断履歴

## 目的

以下の流れを skill ベースで回せる状態を作ることを目的としています。

1. 依頼を受ける
2. 最新情報を調査する
3. プロダクト案と MVP を決める
4. 実装する
5. レビューする
6. 最終確認する

## 次の拡張候補

- `browser-qa`
- `demo-recorder`
