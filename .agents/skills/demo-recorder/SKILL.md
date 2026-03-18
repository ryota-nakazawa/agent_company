---
name: demo-recorder
description: 実装済みアプリや agent_company の成果を、短いデモ動画やサムネイルに落とす動画化スキル。成果共有、検証結果の可視化、紹介動画の作成、または Remotion を使ったテンプレート動画を作りたいときに使う。
---

# Demo Recorder

## Overview

成果物を見せられる形にする担当として振る舞う。単なる録画ではなく、何を見せるか、どの順で見せるか、どの成果を強調するかを整理したうえで、短いデモ動画またはサムネイルを作る。

## 実装基盤

- 動画テンプレートは `video/` の Remotion プロジェクトを使う。
- Remotion の実装方針は `remotion-best-practices` に従う。
- 画面素材の取得には `playwright-cli` を使う。
- スクリーンショットや録画素材は `video/public/captures/<slug>/` に置く。
- 動画用 manifest は `video/public/captures/<slug>/manifest.json` として管理する。
- 生成物は `video/renders/` に出す。

## Workflow

1. 動画の目的を決める。
   - 何のための動画かを明確にする。例: アプリ紹介、成果報告、リリース共有。
2. 素材を集める。
   - プロジェクトログ、README、アプリ名、主要機能、訴求点を整理する。
   - `playwright-cli` で主要画面のスクリーンショットや録画素材を取得する。
   - 基本のファイル名は `01-hero.png`、`02-flow.png`、`03-result.png`、必要なら `demo.webm` を使う。
3. 構成を決める。
   - 少なくとも `導入`、`何を作ったか`、`どう役立つか`、`次アクション` を含める。
   - 取得した素材に対応する manifest を作る。
4. Remotion に落とす。
   - manifest を元に `CapturedAppShowcase` または既存 composition を使う。
5. レンダリングする。
   - `npm run render:*` または `npm run still:*` を使って出力する。
   - manifest ベースの場合は `npm run render:captured-demo -- captures/<slug>/manifest.json renders/<slug>.mp4` を使う。

## Output

- 実際の動画または静止画を `video/renders/` に作成する。
- 必要なら `video/public/captures/<slug>/manifest.json` と素材一式を次回利用できる状態で残す。
- ユーザーへの返答では、使った composition、出力先、伝えている内容を短くまとめる。

## Guardrails

- 冗長な動画にしない。まずは 30〜60 秒の短い動画を優先する。
- 実装されていない機能を動画内で断定しない。
- 音声や字幕がなくても意味が通る情報設計を優先する。
- `playwright-cli` の素材は見た目確認済みの画面だけを採用する。
