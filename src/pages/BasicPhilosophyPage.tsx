import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BasicPhilosophyPage() {
	const sections = [
		{
			id: "0-1",
			title: "なぜReactが生まれたのか",
			description: "従来のDOM操作の問題とReactが提供する解決策",
			path: "/basic-philosophy/why-react",
		},
		{
			id: "0-2",
			title: "Reactの主義",
			description: "コンポーネント、JSX、Propsの基本概念",
			path: "/basic-philosophy/react-principle",
		},
		{
			id: "0-3",
			title: "Reactの描画サイクル",
			description: "レンダリング、コミット、再レンダリングの仕組み",
			path: "/basic-philosophy/render-cycle",
		},
		{
			id: "0-4",
			title: "状態（State）とは何か",
			description: "動的な画面を作るための状態管理",
			path: "/basic-philosophy/state",
		},
		{
			id: "0-5",
			title: "イベント処理とReact",
			description: "ユーザーの操作に反応する仕組み",
			path: "/basic-philosophy/events",
		},
		{
			id: "0-6",
			title: "Reactの制約と理由",
			description: "Pure Function、副作用の分離、Key属性",
			path: "/basic-philosophy/constraints",
		},
		{
			id: "0-7",
			title: "Virtual DOMの仕組み",
			description: "高速な画面更新を実現する技術",
			path: "/basic-philosophy/virtual-dom",
		},
		{
			id: "0-8",
			title: "コンポーネントの生存期間",
			description: "マウント、更新、アンマウントのライフサイクル",
			path: "/basic-philosophy/lifecycle",
		},
		{
			id: "0-9",
			title: "関数コンポーネント vs クラスコンポーネント",
			description: "歴史的背景と現在の推奨",
			path: "/basic-philosophy/component-types",
		},
		{
			id: "0-10",
			title: "次のステップへ",
			description: "Hooksの必要性と学習の準備",
			path: "/basic-philosophy/next-steps",
		},
	];

	return (
		<div className="container mx-auto py-8 px-4 max-w-6xl">
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-4">React基礎理念編</h1>
				<p className="text-xl text-muted-foreground">
					Reactの基本的な考え方と仕組みを理解し、なぜReactが生まれたのか、
					どのような問題を解決するのかを学びましょう。
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-2">
				{sections.map((section) => (
					<Link key={section.id} to={section.path}>
						<Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
							<div className="flex justify-between items-start">
								<div className="flex-1">
									<div className="text-sm text-muted-foreground mb-1">
										{section.id}
									</div>
									<h3 className="text-xl font-semibold mb-2">
										{section.title}
									</h3>
									<p className="text-muted-foreground">{section.description}</p>
								</div>
								<ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
							</div>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
