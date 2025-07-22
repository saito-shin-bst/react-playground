import { ArrowRight, Code2, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

export function HomePage() {
	return (
		<div className="container mx-auto py-12 px-4">
			<div className="max-w-4xl mx-auto space-y-12">
				{/* Hero Section */}
				<div className="text-center space-y-6">
					<div className="py-4">
						<h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
							React Playground
						</h1>
					</div>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						あなたのReact開発をもっと楽しく、もっと創造的に！
					</p>
				</div>

				{/* Feature Cards */}
				<div className="grid md:grid-cols-3 gap-6 mb-12">
					<Card className="group hover:shadow-lg transition-all duration-300 border-muted/50 hover:border-primary/50">
						<CardHeader>
							<div className="mb-4">
								<Code2 className="w-10 h-10 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
							</div>
							<CardTitle>React基礎理念編</CardTitle>
							<CardDescription>Reactの基礎理念を理解しよう！</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								<ul>
									<li>基本概念・思想</li>
									<li>JSX詳細</li>
									<li>Props・State・イベント</li>
									<li>描画サイクル・Virtual DOM</li>
									<li>開発環境・デバッグツール</li>
								</ul>
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-lg transition-all duration-300 border-muted/50 hover:border-primary/50">
						<CardHeader>
							<div className="mb-4">
								<Rocket className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
							</div>
							<CardTitle>Reactの機能編</CardTitle>
							<CardDescription>Reactの機能を理解しよう！</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								<ul>
									<li>Hooks</li>
									<li>カスタムHooks</li>
									<li>エラーハンドリング・ポータル等</li>
								</ul>
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-lg transition-all duration-300 border-muted/50 hover:border-primary/50">
						<CardHeader>
							<div className="mb-4">
								<Sparkles className="w-10 h-10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
							</div>
							<CardTitle>応用編</CardTitle>
							<CardDescription>
								実際に実務で遭遇する課題を解決するための知識を身につけよう！
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								<ul>
									<li>状態管理ライブラリ</li>
									<li>ルーティング</li>
									<li>フォーム・バリデーション</li>
									<li>TypeScript</li>
									<li>テスト</li>
									<li>パフォーマンス最適化</li>
									<li>SSR/SSG</li>
									<li>実践的な設計パターン</li>
								</ul>
							</p>
						</CardContent>
					</Card>
				</div>

				{/* CTA Section */}
				<div className="text-center space-y-6">
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8">
						<h2 className="text-2xl font-semibold mb-4">
							CRMアプリを作ってみよう！
						</h2>
						<p className="text-muted-foreground mb-6">
							学びを活かして、実際にCRMアプリを作ってみましょう！
						</p>
						<div className="flex gap-4 justify-center">
							<Button asChild size="lg" className="group">
								<Link to="/dashboard">
									ダッシュボードへ
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link to="/about">詳しく見る</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
