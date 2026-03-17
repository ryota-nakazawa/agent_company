---
name: gstack-ship
description: 実装、検証、差分確認、出荷可否の整理まで持っていくエンドツーエンドの delivery スキル。タスクを最後まで進めたいとき、レビュー用に整えたいとき、実装後に最終確認したいときに使う。
---

# Gstack Ship

## Overview

最後の一歩まで仕事を進める。変更を仕上げ、検証し、最終差分を確認し、根拠付きで出荷可否を報告する。

## Workflow

1. Confirm the finish line.
   - ユーザー成果、受け入れ条件、branch や release の制約を言い換える。
   - 実装のみなのか、レビュー準備なのか、リリース確認なのかを明確にする。
2. Complete the change.
   - 足りない実装を行うか、既存変更を締める。
   - 編集は依頼範囲に閉じ、無関係な掃除を避ける。
3. Verify locally.
   - まず最小限で有効な tests、lint、build を実行する。
   - 影響範囲が広い場合や最初の検証が弱い場合は広げる。
4. Inspect the final diff.
   - 意図しない変更、debug の残り、契約 drift、テスト不足、rollback の危険を見る。
   - dirty worktree では無関係なユーザー変更を尊重する。
5. Prepare handoff.
   - 変更内容を要約する。
   - 実際に何を検証したかを列挙する。
   - 残リスク、後続作業、必要なら release note を書く。

## Output

- 最初に結果を出す。`shipped`、`ready for review`、`blocked` のどれかを明確にする。
- 実際に実行した検証コマンドまたは確認項目を含める。
- 残リスクと、まだユーザー対応が必要な項目を含める。

## Guardrails

- 失敗した check を隠さない。直すか blocker として報告する。
- 明示依頼なしに破壊的な git コマンドを使わない。
- 根拠を示さずに merge-ready や release-ready と断言しない。
