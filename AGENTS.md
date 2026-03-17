## Skills
### Available skills
- secretary-router: 広い依頼を具体的なタスクに分解し、担当と実行順を決める受付スキル。ユーザーの依頼が曖昧、複数工程、または調査・企画・実装・レビューの連携を含むときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/secretary-router/SKILL.md)
- trend-research: 最新の外部情報から需要、競合、市場変化、有望なアプリ機会を調べる調査スキル。何を作るべきか決めるとき、案を最近のシグナルで検証したいときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/trend-research/SKILL.md)
- product-planning: 調査結果や事業アイデアを、対象ユーザー、差別化、MVP、優先順位が明確なプロダクト案に変える企画スキル。何を作るかを決めたいときや実装前にスコープを絞りたいときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/product-planning/SKILL.md)
- builder: 調査結果や実装計画を実際のコード変更に変える実装担当スキル。機能追加、バグ修正、MVP 作成、既存コードの拡張を進めるときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/builder/SKILL.md)
- ui-polish: 作成済みアプリの見た目、情報階層、操作導線、モバイル対応を整える UI 改善スキル。デモ前や実装後にUIを整えたいときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/ui-polish/SKILL.md)
- gstack-review: 不具合、回帰、契約不整合、テスト不足を優先して見るコードレビュー用スキル。レビュー、PR確認、マージ前チェックを依頼されたときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/gstack-review/SKILL.md)
- gstack-plan-eng-review: 実装前に設計、順序、境界、テスト戦略を圧縮する技術レビュー用スキル。実装方針を固めたいときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/gstack-plan-eng-review/SKILL.md)
- gstack-ship: 実装、検証、最終確認、引き渡しまで進める出荷準備スキル。変更を最後まで持っていきたいときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/gstack-ship/SKILL.md)
- project-log: 調査、企画、実装、検証の判断と結果を Markdown ログに残す記録スキル。作業の経緯を後で追えるように保存したいときに使う。 (file: /Users/ryota/Desktop/エージェント作成/agent_team/.agents/skills/project-log/SKILL.md)

### How to use skills
- Trigger rules: ユーザーが skill 名を明示したとき、または依頼内容が上の説明に明確に一致するときは、その `SKILL.md` を開いて従う。
- Company model: 役割分担の基準は [README.md](/Users/ryota/Desktop/エージェント作成/agent_team/README.md) の「組織モデル」を使う。
- Sequencing: 広い依頼は `secretary-router` を先に使い、最新性が重要なら `trend-research` を企画前に使い、何を作るかを固めるときは `product-planning`、実装前は `gstack-plan-eng-review`、実装は `builder`、必要なら `ui-polish` で仕上げ、マージ前は `gstack-review`、最後の実行と引き渡しは `gstack-ship`、節目の記録は `project-log` を使う。
- Context hygiene: 最初に関係する `SKILL.md` だけを読み、必要になったときだけ他のローカルファイルを読む。
