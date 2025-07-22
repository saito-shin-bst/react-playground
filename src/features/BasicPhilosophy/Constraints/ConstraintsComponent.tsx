import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Key, Shield, Zap } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const ConstraintsComponent: React.FC = () => {
	const [items, setItems] = useState([
		{ id: 1, name: "アイテム1" },
		{ id: 2, name: "アイテム2" },
		{ id: 3, name: "アイテム3" },
	]);
	const [shuffleCount, setShuffleCount] = useState(0);

	const shuffleItems = () => {
		const shuffled = [...items].sort(() => Math.random() - 0.5);
		setItems(shuffled);
		setShuffleCount((prev) => prev + 1);
	};

	const addItem = () => {
		const newItem = {
			id: Math.max(...items.map((item) => item.id)) + 1,
			name: `アイテム${items.length + 1}`,
		};
		setItems([...items, newItem]);
	};

	const [sideEffectExample, setSideEffectExample] = useState(0);
	const [pureExample, setPureExample] = useState(0);

	// 純粋でない関数の例（実際には使わない）
	let globalCounter = 0;
	const impureIncrement = () => {
		globalCounter++;
		return globalCounter;
	};

	// 純粋な関数の例
	const pureIncrement = (value: number) => {
		return value + 1;
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-3xl">Reactの制約と理由</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
						<p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
							なぜReactに制約があるのか？
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
							<li>予測可能で保守しやすいコードを書くため</li>
							<li>パフォーマンスの最適化を可能にするため</li>
							<li>バグを防ぎ、デバッグを容易にするため</li>
							<li>時間旅行デバッグやHot Reloadingを実現するため</li>
						</ul>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Shield className="w-6 h-6 mr-2" />
						1. Pure Function（純粋関数）の原則
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
						<h4 className="font-semibold mb-2">
							コンポーネントは純粋関数であるべき
						</h4>
						<p className="text-sm mb-3">
							同じ入力（props）に対して、常に同じ出力（JSX）を返す必要があります。
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm">
							<li>外部の状態を変更しない</li>
							<li>ランダムな値や現在時刻に依存しない</li>
							<li>レンダリング中にStateを更新しない</li>
						</ul>
					</div>

					<div className="grid md:grid-cols-2 gap-4">
						<div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
							<h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
								❌ 悪い例
							</h4>
							<pre className="text-sm bg-white dark:bg-gray-900 p-3 rounded overflow-x-auto">
								<code>{`// レンダリング中に外部を変更
let count = 0;
function BadComponent() {
  count++; // 副作用！
  return <div>{count}</div>;
}

// ランダムな値に依存
function RandomComponent() {
  return <div>{Math.random()}</div>;
}`}</code>
							</pre>
						</div>

						<div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
							<h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
								✅ 良い例
							</h4>
							<pre className="text-sm bg-white dark:bg-gray-900 p-3 rounded overflow-x-auto">
								<code>{`// propsとstateのみに依存
function GoodComponent({ count }) {
  return <div>{count}</div>;
}

// ランダムな値はStateで管理
function ControlledRandom() {
  const [value] = useState(Math.random());
  return <div>{value}</div>;
}`}</code>
							</pre>
						</div>
					</div>

					<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
						<h4 className="font-semibold mb-3">インタラクティブな例</h4>
						<div className="flex space-x-4">
							<Button
								onClick={() => setPureExample(pureIncrement(pureExample))}
								variant="outline"
							>
								純粋な更新: {pureExample}
							</Button>
							<Button
								onClick={() => setSideEffectExample(impureIncrement())}
								variant="outline"
								className="border-red-300"
							>
								副作用のある更新: {sideEffectExample}
							</Button>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
							純粋な関数は予測可能で、テストも容易です。
						</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<AlertTriangle className="w-6 h-6 mr-2" />
						2. 副作用の分離
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
						<h4 className="font-semibold mb-2">副作用とは？</h4>
						<p className="text-sm mb-2">
							コンポーネントの外部に影響を与える処理：
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm">
							<li>API呼び出し</li>
							<li>タイマーの設定</li>
							<li>DOM操作</li>
							<li>console.logなどのログ出力</li>
							<li>ローカルストレージへのアクセス</li>
						</ul>
					</div>

					<div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
						<h4 className="font-semibold mb-2">副作用の正しい扱い方</h4>
						<pre className="text-sm bg-white dark:bg-gray-900 p-3 rounded overflow-x-auto">
							<code>{`// useEffectで副作用を管理
useEffect(() => {
  // 副作用のコード
  const timer = setTimeout(() => {
    console.log("タイマー実行");
  }, 1000);

  // クリーンアップ
  return () => clearTimeout(timer);
}, [dependency]);

// イベントハンドラーで副作用を実行
const handleClick = () => {
  // APIを呼び出す
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));
};`}</code>
						</pre>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Key className="w-6 h-6 mr-2" />
						3. Key属性の重要性
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
						<h4 className="font-semibold mb-2">なぜKeyが必要なのか？</h4>
						<p className="text-sm">
							Reactがリスト内の要素を正しく追跡し、効率的に更新するために必要です。
							Keyによって、要素の追加・削除・並び替えを正確に検出できます。
						</p>
					</div>

					<div className="space-y-4">
						<div className="flex items-center space-x-4">
							<Button onClick={shuffleItems}>シャッフル</Button>
							<Button onClick={addItem} variant="outline">
								アイテム追加
							</Button>
							<span className="text-sm text-gray-600">
								シャッフル回数: {shuffleCount}
							</span>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<h4 className="font-semibold mb-2">✅ 正しいKey（ID使用）</h4>
								<div className="space-y-2">
									{items.map((item) => (
										<div
											key={item.id}
											className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center"
										>
											<span>{item.name}</span>
											<input
												type="text"
												placeholder="メモ"
												className="px-2 py-1 text-sm border rounded"
											/>
										</div>
									))}
								</div>
							</div>

							<div>
								<h4 className="font-semibold mb-2">
									❌ 間違ったKey（インデックス使用）
								</h4>
								<div className="space-y-2">
									{items.map((item) => (
										<div
											key={item.id}
											className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center"
										>
											<span>{item.name}</span>
											<input
												type="text"
												placeholder="メモ（失われます）"
												className="px-2 py-1 text-sm border rounded"
											/>
										</div>
									))}
								</div>
							</div>
						</div>

						<p className="text-sm text-gray-600 dark:text-gray-400">
							シャッフルボタンを押して、入力欄に文字を入力してから再度シャッフルしてみてください。
							正しいKeyを使用した場合は入力内容が保持されますが、インデックスをKeyにした場合は失われます。
						</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Zap className="w-6 h-6 mr-2" />
						その他の重要な制約
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<h4 className="font-semibold mb-2">1. Hooksのルール</h4>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>
									トップレベルでのみ呼び出す（条件文やループ内では使わない）
								</li>
								<li>React関数コンポーネント内でのみ使用する</li>
								<li>カスタムフック内でも使用可能</li>
							</ul>
						</div>

						<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<h4 className="font-semibold mb-2">2. 不変性（Immutability）</h4>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>Stateは直接変更せず、新しいオブジェクトを作成する</li>
								<li>配列やオブジェクトは展開演算子（...）を使ってコピー</li>
								<li>これにより、Reactが変更を検出できる</li>
							</ul>
						</div>

						<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<h4 className="font-semibold mb-2">3. 単方向データフロー</h4>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>データは親から子へpropsを通じて流れる</li>
								<li>子から親へはコールバック関数で通信</li>
								<li>兄弟コンポーネント間は親を経由して通信</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
