# 2026-03-17 こそだてコンパス

## 概要

子育て支援をテーマに、最新の制度変更を踏まえた小さい MVP アプリを試作した。
対象は主に妊娠中から小学校3年生までの家庭で、制度情報が複数の公的窓口に分散している課題を前提にした。

## 判断

- 最新制度の変化が集中しているため、最初の MVP は「制度比較」より「自分に関係ある支援の絞り込み」に寄せた。
- 2025年4月開始の育児関連給付と休暇制度、2026年度全国実施のこども誰でも通園制度を軸にした。
- 自治体ごとの差分までは追わず、全国共通制度の整理にスコープを限定した。

## 実施内容

- `secretary-router` 相当で依頼を分解した。
- `trend-research` 相当で最新の制度変更を調査した。
- `product-planning` 相当で「親向け制度ナビ型 MVP」に絞り込んだ。
- `builder` 相当で `demo/kosodate-compass/index.html` を作成した。
- フェーズ、働き方、困りごとに応じて制度カードを出し分ける UI を実装した。
- ローカル保存メモと、参照ソース一覧を追加した。

## 検証

- `node --check /tmp/kosodate-compass-check.js` で埋め込み JavaScript の構文を確認した。
- HTML5 全体のブラウザ表示確認は未実施。

## 参照ソース

- [こども家庭庁: 共働き・共育てを応援](https://www.cfa.go.jp/resources/strategy/tomoni-oen)
- [こども家庭庁: こども誰でも通園制度](https://www.cfa.go.jp/policies/hoiku/daredemo-tsuen)
- [兵庫労働局: 育児・介護休業法改正ポイント](https://jsite.mhlw.go.jp/hyogo-roudoukyoku/hourei_seido_tetsuzuki/hourei_youshikishu/youshikishu/ikuji_kaigokyugyou.html)
- [東京ハローワーク渋谷: 出生後休業支援給付金・育児時短就業給付金](https://jsite.mhlw.go.jp/tokyo-hellowork/list/shibuya/important_topics/070116_00001.html)

## 次アクション

- `ui-polish` でデモ画面の導線と視認性をもう一段整える。
- `browser-qa` を追加したら実ブラウザ確認を入れる。
- 将来的には自治体別検索と窓口導線を拡張する。
