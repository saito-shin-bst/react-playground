import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Lightbulb, Rocket, Target } from "lucide-react";
import type React from "react";
import { useNavigate } from "react-router-dom";

export const NextStepsComponent: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-3xl">次のステップへ</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
						<h3 className="text-xl font-semibold mb-3">
							🎉 おめでとうございます！
						</h3>
						<p className="text-lg mb-3">Reactの基本思想を理解できました。</p>
						<p className="text-gray-700 dark:text-gray-300">
							ここまでで、Reactがなぜ生まれ、どのような原則で動作し、
							どのような制約があるのかを学びました。
							次は、これらの知識を活かして実際にアプリケーションを作るための
							強力なツール「Hooks」について学びましょう。
						</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Lightbulb className="w-6 h-6 mr-2" />
						なぜHooksが必要なのか？
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						<div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
							<h4 className="font-semibold mb-2">従来の課題</h4>
							<ul className="list-disc list-inside space-y-2 text-sm">
								<li>ロジックの再利用が困難（HOCやrender propsは複雑）</li>
								<li>巨大なコンポーネントになりがち</li>
								<li>クラスコンポーネントのthisが分かりにくい</li>
								<li>関連するロジックが分散してしまう</li>
							</ul>
						</div>

						<div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
							<h4 className="font-semibold mb-2">Hooksによる解決</h4>
							<ul className="list-disc list-inside space-y-2 text-sm">
								<li>カスタムHooksでロジックを簡単に共有</li>
								<li>関心事ごとにロジックを分離</li>
								<li>関数コンポーネントでstateやライフサイクルを扱える</li>
								<li>よりシンプルで理解しやすいコード</li>
							</ul>
						</div>
					</div>

					<div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
						<p className="font-medium mb-2">Hooksの本質</p>
						<p className="text-sm">
							Hooksは「関数コンポーネントにReactの機能をフックする（引っ掛ける）」仕組みです。
							状態管理、副作用、コンテキスト、メモ化など、Reactの様々な機能を
							関数コンポーネントから利用できるようにします。
						</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<BookOpen className="w-6 h-6 mr-2" />
						これから学ぶHooks
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<h4 className="font-semibold mb-3">基本のHooks</h4>
							<ul className="space-y-2 text-sm">
								<li className="flex items-start">
									<span className="font-mono mr-2">useState</span>
									<span className="text-gray-600 dark:text-gray-400">
										状態管理
									</span>
								</li>
								<li className="flex items-start">
									<span className="font-mono mr-2">useEffect</span>
									<span className="text-gray-600 dark:text-gray-400">
										副作用の処理
									</span>
								</li>
								<li className="flex items-start">
									<span className="font-mono mr-2">useContext</span>
									<span className="text-gray-600 dark:text-gray-400">
										コンテキストの利用
									</span>
								</li>
							</ul>
						</div>

						<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<h4 className="font-semibold mb-3">追加のHooks</h4>
							<ul className="space-y-2 text-sm">
								<li className="flex items-start">
									<span className="font-mono mr-2">useReducer</span>
									<span className="text-gray-600 dark:text-gray-400">
										複雑な状態管理
									</span>
								</li>
								<li className="flex items-start">
									<span className="font-mono mr-2">useMemo</span>
									<span className="text-gray-600 dark:text-gray-400">
										計算結果のメモ化
									</span>
								</li>
								<li className="flex items-start">
									<span className="font-mono mr-2">useCallback</span>
									<span className="text-gray-600 dark:text-gray-400">
										関数のメモ化
									</span>
								</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Target className="w-6 h-6 mr-2" />
						学習の進め方
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex items-start">
							<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
								1
							</div>
							<div>
								<p className="font-medium">基本のHooksをマスター</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									まずはuseStateとuseEffectを完璧に理解しましょう。
									これだけで多くのアプリケーションが作れます。
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
								2
							</div>
							<div>
								<p className="font-medium">実際に手を動かす</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									各Hooksの説明には実際に動くデモがあります。
									コードを見て、動作を確認し、自分でも試してみましょう。
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
								3
							</div>
							<div>
								<p className="font-medium">組み合わせて使う</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Hooksは組み合わせて使うことで真価を発揮します。
									カスタムHooksを作ることで、再利用可能なロジックを構築できます。
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
								4
							</div>
							<div>
								<p className="font-medium">パフォーマンスを意識</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									最適化のHooks（useMemo、useCallback）は、
									パフォーマンスが問題になってから使いましょう。
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="border-2 border-purple-500 dark:border-purple-400">
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Rocket className="w-6 h-6 mr-2" />
						準備はできましたか？
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<p className="text-lg">
						Reactの基本思想を理解した今、いよいよ実践的な開発に必要な
						Hooksの世界へ飛び込みましょう！
					</p>

					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							onClick={() => navigate("/state-management")}
							size="lg"
							className="flex-1"
						>
							状態管理のHooksへ進む
							<ArrowRight className="w-5 h-5 ml-2" />
						</Button>

						<Button
							onClick={() => navigate("/")}
							variant="outline"
							size="lg"
							className="flex-1"
						>
							ホームに戻る
						</Button>
					</div>

					<div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
						<p className="text-sm text-center">
							💡 ヒント:
							左側のサイドバーから、興味のあるHooksを選んで学習することもできます
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
