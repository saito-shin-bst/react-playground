import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, GitCommit, Layers, RefreshCw } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const RenderCycleComponent: React.FC = () => {
	const [count, setCount] = useState(0);
	const [renderPhase, setRenderPhase] = useState<"idle" | "render" | "commit">(
		"idle",
	);

	const handleClick = () => {
		setRenderPhase("render");
		setTimeout(() => {
			setRenderPhase("commit");
			setTimeout(() => {
				setCount(count + 1);
				setRenderPhase("idle");
			}, 500);
		}, 500);
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-3xl">Reactの描画サイクル</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
						<p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
							Reactが画面を更新する際の3つのフェーズ
						</p>
						<ol className="list-decimal list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
							<li>トリガー: stateの更新やpropsの変更が発生</li>
							<li>レンダー: コンポーネント関数を実行して新しいUIを計算</li>
							<li>コミット: 実際のDOMに変更を反映</li>
						</ol>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl">インタラクティブなデモ</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex items-center space-x-4">
						<Button
							onClick={handleClick}
							disabled={renderPhase !== "idle"}
							className="w-40"
						>
							カウントを増やす
						</Button>
						<div className="text-2xl font-bold">カウント: {count}</div>
					</div>

					<div className="grid grid-cols-3 gap-4">
						<div
							className={`p-4 rounded-lg border-2 transition-all ${
								renderPhase === "idle"
									? "border-green-500 bg-green-50 dark:bg-green-950"
									: "border-gray-300 dark:border-gray-700"
							}`}
						>
							<RefreshCw
								className={`w-6 h-6 mb-2 ${
									renderPhase === "idle" ? "text-green-600" : "text-gray-400"
								}`}
							/>
							<h3 className="font-semibold">待機中</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								イベントを待っています
							</p>
						</div>

						<div
							className={`p-4 rounded-lg border-2 transition-all ${
								renderPhase === "render"
									? "border-blue-500 bg-blue-50 dark:bg-blue-950"
									: "border-gray-300 dark:border-gray-700"
							}`}
						>
							<Layers
								className={`w-6 h-6 mb-2 ${
									renderPhase === "render" ? "text-blue-600" : "text-gray-400"
								}`}
							/>
							<h3 className="font-semibold">レンダー</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								新しいUIを計算中
							</p>
						</div>

						<div
							className={`p-4 rounded-lg border-2 transition-all ${
								renderPhase === "commit"
									? "border-purple-500 bg-purple-50 dark:bg-purple-950"
									: "border-gray-300 dark:border-gray-700"
							}`}
						>
							<GitCommit
								className={`w-6 h-6 mb-2 ${
									renderPhase === "commit" ? "text-purple-600" : "text-gray-400"
								}`}
							/>
							<h3 className="font-semibold">コミット</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								DOMを更新中
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl">レンダリングの詳細</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-4">
						<div>
							<h3 className="font-semibold mb-2 flex items-center">
								<RefreshCw className="w-5 h-5 mr-2" />
								1. トリガーフェーズ
							</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-2">
								レンダリングのきっかけとなるイベント：
							</p>
							<ul className="list-disc list-inside space-y-1 text-sm ml-4">
								<li>初回レンダリング（コンポーネントのマウント）</li>
								<li>コンポーネントのstateが更新された時</li>
								<li>親コンポーネントが再レンダリングされた時</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold mb-2 flex items-center">
								<Layers className="w-5 h-5 mr-2" />
								2. レンダーフェーズ
							</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-2">
								Reactがコンポーネントを呼び出して、新しいJSXを生成します。
							</p>
							<div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
								<p className="text-sm flex items-start">
									<AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-600" />
									<span>
										このフェーズは純粋でなければなりません。
										副作用（DOM操作、API呼び出しなど）は避けるべきとされています。
									</span>
								</p>
							</div>
						</div>

						<div>
							<h3 className="font-semibold mb-2 flex items-center">
								<GitCommit className="w-5 h-5 mr-2" />
								3. コミットフェーズ
							</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-2">
								Reactが実際のDOMに変更を適用します。
							</p>
							<ul className="list-disc list-inside space-y-1 text-sm ml-4">
								<li>初回レンダリング: appendChild()でDOM要素を追加</li>
								<li>再レンダリング: 必要最小限のDOM更新のみ実行</li>
								<li>アンマウント: removeChild()でDOM要素を削除</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl">重要なポイント</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-3">
						<div className="flex items-start">
							<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
							<div>
								<p className="font-medium">レンダリング ≠ DOM更新</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									コンポーネントがレンダリングされても、DOMが更新されるとは限りません。
									Reactは差分を検出して、変更が必要な部分のみを更新します。
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
							<div>
								<p className="font-medium">バッチング</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									React 18以降、複数のstate更新は自動的にバッチ処理され、
									1回のレンダリングにまとめられます。
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
							<div>
								<p className="font-medium">Concurrent Features</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									React 18では、レンダリングを中断・再開できるようになり、
									より滑らかなユーザー体験を提供できます。
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl">
						「純粋でなければならない」ってどういうこと？
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4 bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
						<p className="text-sm">
							「純粋でなければならない」とは、副作用を避けるという意味です。
						</p>
						<div className="text-sm mt-2">
							<p>副作用と言われるものの例：</p>
							<ul className="list-disc list-inside space-y-1 text-sm ml-4">
								<li>API呼び出し</li>
								<li>タイマー設定</li>
								<li>DOM操作</li>
								<li>console.log</li>
								<li>グローバル変数の変更</li>
								<li>ローカルストレージへのアクセス</li>
								<li>ランダムな値の生成</li>
								<li>現在時刻の取得</li>
							</ul>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<h3 className="font-semibold text-green-700 dark:text-green-300">
								✅ レンダー中にやっていいこと（純粋な計算）
							</h3>
							<div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg space-y-3">
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# 数値の計算
									</p>
									<code className="text-green-700 dark:text-green-300">
										const total = price * quantity * (1 + taxRate);
									</code>
								</div>
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# 文字列の整形
									</p>
									<code className="text-green-700 dark:text-green-300">
										const fullName = `${"{"}firstName{"}"} ${"{"}lastName{"}"}`;
									</code>
								</div>
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# 配列の操作（新しい配列）
									</p>
									<code className="text-green-700 dark:text-green-300">
										const sorted = items.slice().sort();
									</code>
								</div>
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# 条件分岐
									</p>
									<code className="text-green-700 dark:text-green-300">
										const status = count {">"} 10 ? "多い" : "少ない";
									</code>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="font-semibold text-red-700 dark:text-red-300">
								❌ レンダー中にやってはいけないこと（副作用）
							</h3>
							<div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg space-y-3">
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# API呼び出し
									</p>
									<code className="text-red-700 dark:text-red-300">
										{"fetch('/api/data'); // ダメ！"}
									</code>
								</div>
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# DOM操作
									</p>
									<code className="text-red-700 dark:text-red-300">
										{"document.title = '新タイトル'; // ダメ！"}
									</code>
								</div>
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# タイマー設定
									</p>
									<code className="text-red-700 dark:text-red-300">
										{`setTimeout(() => {
											// ダメ！
										}, 1000);`}
									</code>
								</div>
								<div className="font-mono text-sm">
									<p className="text-gray-600 dark:text-gray-400 mb-1">
										# 外部変数の変更
									</p>
									<code className="text-red-700 dark:text-red-300">
										{"window.globalCount++; // ダメ！"}
									</code>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-purple-50 dark:bg-gray-900 p-4 rounded-lg">
						<h4 className="font-semibold mb-3">実践的な例</h4>
						<pre className="text-sm bg-white dark:bg-gray-900 p-4 rounded overflow-x-auto">
							<code>
								{`function PriceDisplay({ price, quantity, taxRate }) {
                                // ✅ 計算はレンダー中に直接行う
                                const subtotal = price * quantity;
                                const tax = subtotal * taxRate;
                                const total = subtotal + tax;
                                
                                // ✅ 重い計算は useMemo で最適化
                                const discount = useMemo(() => {
                                    return calculateComplexDiscount(total, quantity);
                                }, [total, quantity]);
                                
                                // ❌ これはダメ！副作用はuseEffectかイベントハンドラーで
                                // fetch('/api/log-price-view', { total });
                                
                                return (
                                    <div>
                                    <p>小計: ¥{subtotal}</p>
                                    <p>税額: ¥{tax}</p>
                                    <p>合計: ¥{total}</p>
                                    </div>
                                );
                                }`}
							</code>
						</pre>
					</div>

					<div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
						<p className="font-medium mb-2 flex items-center">
							<AlertCircle className="w-5 h-5 mr-2" />
							よくある誤解
						</p>
						<p className="text-sm">
							「純粋でなければならない」は「計算してはいけない」という意味ではありません。
							propsやstateから新しい値を計算することは、まさにレンダーフェーズでやるべきことです。
							避けるべきは、外部の世界に影響を与える「副作用」だけです。
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
