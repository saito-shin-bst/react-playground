Phase 0: React基礎理念編
0-1: なぜReactが生まれたのか
困りごと: 従来のDOM操作の問題

jQueryでの複雑な状態管理の限界
解決策: 宣言的UI、状態に基づく自動描画

0-2: Reactの主義
困りごと: 画面の複雑性をどう管理するか

コンポーネント: UIを部品化する考え方
JSX: HTMLライクな記法の裏側
Props: 親から子へのデータの流れ
実践例: 名刺コンポーネントの作成

0-3: Reactの描画サイクル
困りごと: 画面はいつ、どのように更新されるのか

レンダリング: コンポーネント関数の実行
コミット: 実際のDOM更新
再レンダリング: いつ発生するのか
実践例: console.logで描画タイミングを確認

0-4: 状態（State）とは何か
困りごと: 動的な画面を作りたい

状態: 時間と共に変わるデータ
イミュータブル: なぜ直接変更してはいけないのか
データフロー: 単方向データフロー
実践例: クラスコンポーネントでの状態管理例

0-5: イベント処理とReact
困りごと: ユーザーの操作に反応したい

SyntheticEvent: Reactのイベントシステム
イベントハンドラー: 関数の渡し方
実践例: ボタンクリックでの状態更新

0-6: Reactの制約と理由
困りごと: なぜこんなルールがあるのか

Pure Function: コンポーネントは純粋関数であるべき
副作用の分離: なぜレンダリング中に副作用はダメなのか
Key属性: リスト描画での重要性
実践例: ダメな例と良い例の比較

0-7: Virtual DOMの仕組み
困りごと: どうやって高速に画面更新しているのか

Virtual DOM: JavaScriptオブジェクトとしてのDOM表現
差分検出（Diffing）: 効率的な更新方法
調和（Reconciliation）: Virtual DOMから実DOMへの反映
実践例: React Developer Toolsでの確認

0-8: コンポーネントの生存期間
困りごと: コンポーネントはいつ生まれ、いつ消えるのか

マウント: 初回描画
更新: 再レンダリング
アンマウント: 削除
実践例: 条件分岐での表示/非表示

0-9: 関数コンポーネント vs クラスコンポーネント
困りごと: どちらを使えばいいのか

歴史的背景: クラスから関数への移行
Hooksの登場: 関数コンポーネントでの状態管理
現在の推奨: なぜ関数コンポーネントなのか

0-10: 次のステップへ
困りごと: 状態をもっと柔軟に管理したい

Hooksの必要性: なぜHooksが生まれたのか
学習の準備: これから学ぶHooksの全体像
実践例: 簡単なuseStateの予告編