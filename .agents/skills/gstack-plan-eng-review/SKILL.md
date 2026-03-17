---
name: gstack-plan-eng-review
description: 実装前にアーキテクチャ、順序、境界、失敗モード、テスト戦略を圧縮する技術レビュー用スキル。実装方針を提案されたとき、機能の作り方を詰めたいとき、編集前に設計リスクを明確にしたいときに使う。
---

# Gstack Plan Eng Review

## Overview

コードを書く前に実装計画を圧迫検証する。悪い実行経路、不要な複雑さ、見えにくい統合リスクを防ぐことを優先する。

## Workflow

1. Clarify the objective and constraints.
   - ユーザー向けの成果、必須要件、期限、互換性制約、非目標を明確にする。
2. Inspect the real code paths.
   - 判断前に関係する entry point、interface、data model、tests を読む。
   - 抽象論ではなく、現在のコードベースを前提に評価する。
3. Pressure-test the approach.
   - 状態と副作用の責務を確認する。
   - module、service、API 間の境界を確認する。
   - migration、rollout 安全性、observability、security、concurrency、performance への影響を確認する。
   - 提案スコープが必要以上に大きくないかを見る。
4. Rewrite the plan into an executable version.
   - 目標を満たす最小変更を優先する。
   - 実装と検証を段階的に進められる順序に分解する。
   - 変更を証明するためのテストと検証手順を明示する。
5. Surface blockers cleanly.
   - 回答が方針を大きく変えるときだけ質問する。
   - それ以外は妥当な仮定を置いて明示する。

## Output

- 最初に現行案の主要リスクや欠陥を書く。
- 次に実行可能な改訂プランを出す。
- 集中したテスト戦略を含める。
- open question は短くし、blocker か重大な不明点だけに絞る。

## Guardrails

- 同じ依頼内で明示されない限り、勝手に編集を始めない。
- 過剰設計を勧めず、単純で戻しやすい変更を優先する。
- 既存コードの具体的問題を解かない抽象化を発明しない。
