import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GitBranch, History, TrendingUp } from "lucide-react";
import type React from "react";
import { Component, useState } from "react";

// クラスコンポーネントの例
interface ClassCounterState {
	count: number;
	lastUpdate: string;
}

class ClassCounter extends Component<Record<string, never>, ClassCounterState> {
	constructor(props: Record<string, never>) {
		super(props);
		this.state = {
			count: 0,
			lastUpdate: "未更新",
		};
	}

	componentDidMount() {
		console.log("ClassCounter: マウントされました");
	}

	componentDidUpdate() {
		console.log("ClassCounter: 更新されました");
	}

	componentWillUnmount() {
		console.log("ClassCounter: アンマウントされます");
	}

	handleIncrement = () => {
		this.setState({
			count: this.state.count + 1,
			lastUpdate: new Date().toLocaleTimeString(),
		});
	};

	render() {
		return (
			<div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
				<h4 className="font-semibold mb-2">クラスコンポーネント</h4>
				<p className="text-2xl font-bold mb-2">カウント: {this.state.count}</p>
				<p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
					最終更新: {this.state.lastUpdate}
				</p>
				<Button onClick={this.handleIncrement}>増加</Button>
			</div>
		);
	}
}

// 関数コンポーネントの例
const FunctionCounter: React.FC = () => {
	const [count, setCount] = useState(0);
	const [lastUpdate, setLastUpdate] = useState("未更新");

	const handleIncrement = () => {
		setCount(count + 1);
		setLastUpdate(new Date().toLocaleTimeString());
	};

	return (
		<div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
			<h4 className="font-semibold mb-2">関数コンポーネント</h4>
			<p className="text-2xl font-bold mb-2">カウント: {count}</p>
			<p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
				最終更新: {lastUpdate}
			</p>
			<Button onClick={handleIncrement}>増加</Button>
		</div>
	);
};

export const ComponentTypes: React.FC = () => {
	const [showComparison, setShowComparison] = useState(false);

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-3xl">
						関数コンポーネント vs クラスコンポーネント
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
						<p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
							Reactコンポーネントの2つのスタイル
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
							<li>クラスコンポーネント: ES6クラスを使用した従来の書き方</li>
							<li>関数コンポーネント: より簡潔でモダンな書き方（推奨）</li>
							<li>React 16.8以降、Hooksにより関数コンポーネントが主流に</li>
						</ul>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<History className="w-6 h-6 mr-2" />
						歴史的背景
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div className="relative">
							<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

							<div className="space-y-6">
								<div className="flex items-start">
									<div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 z-10">
										1
									</div>
									<div className="flex-1">
										<h4 className="font-semibold">
											2013-2016: クラスコンポーネント時代
										</h4>
										<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
											Reactの初期はクラスコンポーネントのみ。
											stateやライフサイクルメソッドを使うにはクラスが必須でした。
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 z-10">
										2
									</div>
									<div className="flex-1">
										<h4 className="font-semibold">
											2016-2019: 関数コンポーネントの登場
										</h4>
										<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
											ステートレスな表示専用コンポーネントとして関数コンポーネントが使われ始めました。
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 z-10">
										3
									</div>
									<div className="flex-1">
										<h4 className="font-semibold">2019-現在: Hooks革命</h4>
										<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
											React
											16.8でHooksが導入され、関数コンポーネントでもstateやライフサイクルが扱えるように。
											現在は関数コンポーネントが推奨されています。
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Code className="w-6 h-6 mr-2" />
						実装の比較
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex justify-center mb-4">
						<Button
							onClick={() => setShowComparison(!showComparison)}
							variant="outline"
						>
							{showComparison ? "デモを隠す" : "デモを表示"}
						</Button>
					</div>

					{showComparison && (
						<div className="grid md:grid-cols-2 gap-4 mb-6">
							<ClassCounter />
							<FunctionCounter />
						</div>
					)}

					<div className="space-y-4">
						<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<h4 className="font-semibold mb-3">構文の違い</h4>
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<p className="text-sm font-medium mb-2">
										クラスコンポーネント
									</p>
									<pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
										<code>{`class MyComponent extends Component {
  state = { count: 0 };
  
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return <div>{this.state.count}</div>;
  }
}`}</code>
									</pre>
								</div>
								<div>
									<p className="text-sm font-medium mb-2">関数コンポーネント</p>
									<pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
										<code>{`function MyComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  };
  
  return <div>{count}</div>;
}`}</code>
									</pre>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<GitBranch className="w-6 h-6 mr-2" />
						主な違いと特徴
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr className="border-b dark:border-gray-700">
									<th className="text-left p-3">特徴</th>
									<th className="text-left p-3">クラスコンポーネント</th>
									<th className="text-left p-3">関数コンポーネント</th>
								</tr>
							</thead>
							<tbody className="text-sm">
								<tr className="border-b dark:border-gray-700">
									<td className="p-3 font-medium">構文</td>
									<td className="p-3">ES6クラス構文</td>
									<td className="p-3">通常の関数</td>
								</tr>
								<tr className="border-b dark:border-gray-700">
									<td className="p-3 font-medium">State管理</td>
									<td className="p-3">this.state / this.setState</td>
									<td className="p-3">useState Hook</td>
								</tr>
								<tr className="border-b dark:border-gray-700">
									<td className="p-3 font-medium">ライフサイクル</td>
									<td className="p-3">専用メソッド（componentDidMount等）</td>
									<td className="p-3">useEffect Hook</td>
								</tr>
								<tr className="border-b dark:border-gray-700">
									<td className="p-3 font-medium">thisバインディング</td>
									<td className="p-3">必要（注意が必要）</td>
									<td className="p-3">不要</td>
								</tr>
								<tr className="border-b dark:border-gray-700">
									<td className="p-3 font-medium">コード量</td>
									<td className="p-3">多い</td>
									<td className="p-3">少ない</td>
								</tr>
								<tr className="border-b dark:border-gray-700">
									<td className="p-3 font-medium">パフォーマンス</td>
									<td className="p-3">わずかに遅い</td>
									<td className="p-3">わずかに速い</td>
								</tr>
								<tr className="border-b dark:border-gray-700">
									<td className="p-3 font-medium">テスト</td>
									<td className="p-3">やや複雑</td>
									<td className="p-3">シンプル</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<TrendingUp className="w-6 h-6 mr-2" />
						現在の推奨事項
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
							<h4 className="font-semibold mb-2">公式の推奨</h4>
							<p className="text-sm">
								React公式ドキュメントでは、新しいコンポーネントは
								<strong className="text-green-700 dark:text-green-300">
									関数コンポーネント + Hooks
								</strong>
								で書くことを推奨しています。
							</p>
						</div>

						<div className="space-y-3">
							<h4 className="font-semibold">
								関数コンポーネントを使うべき理由
							</h4>
							<div className="space-y-2">
								<div className="flex items-start">
									<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
									<div>
										<p className="font-medium">簡潔性</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											より少ないコードで同じ機能を実現できる
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
									<div>
										<p className="font-medium">Hooksの柔軟性</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											ロジックの再利用とコンポジションが容易
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
									<div>
										<p className="font-medium">将来性</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											Reactの新機能は関数コンポーネントを前提に開発される
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
									<div>
										<p className="font-medium">開発体験</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											TypeScriptとの相性が良く、型推論が効きやすい
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
							<h4 className="font-semibold mb-2">クラスコンポーネントの現状</h4>
							<p className="text-sm">
								既存のクラスコンポーネントは引き続き動作し、サポートされます。
								無理に書き換える必要はありませんが、新規開発では関数コンポーネントを使いましょう。
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
