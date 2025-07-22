import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Activity, AlertCircle, Keyboard, MousePointer } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const EventsComponent: React.FC = () => {
	const [clickCount, setClickCount] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [inputValue, setInputValue] = useState("");
	const [keyPressed, setKeyPressed] = useState("");
	const [focusStatus, setFocusStatus] = useState("");
	const [eventLog, setEventLog] = useState<string[]>([]);

	const addLog = (message: string) => {
		setEventLog((prev) => [...prev.slice(-4), message]);
	};

	const handleClick = (e: React.MouseEvent) => {
		setClickCount((prev) => prev + 1);
		addLog(`クリック: ボタン${e.button}, 座標(${e.clientX}, ${e.clientY})`);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		setKeyPressed(e.key);
		addLog(`キー押下: ${e.key} (コード: ${e.code})`);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		addLog(`入力変更: "${e.target.value}"`);
	};

	const handleFocus = () => {
		setFocusStatus("フォーカス中");
		addLog("フォーカスイベント発生");
	};

	const handleBlur = () => {
		setFocusStatus("フォーカスなし");
		addLog("ブラーイベント発生");
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addLog(`フォーム送信: "${inputValue}"`);
		alert(`送信内容: ${inputValue}`);
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-3xl">イベント処理とReact</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
						<p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
							Reactのイベント処理の特徴
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
							<li>
								合成イベント（SyntheticEvent）によるブラウザ間の差異を吸収
							</li>
							<li>camelCaseでイベント名を記述（onClick, onChange など）</li>
							<li>イベントハンドラーには関数を渡す（文字列ではない）</li>
							<li>イベントの伝播はReactが最適化して管理</li>
						</ul>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<MousePointer className="w-6 h-6 mr-2" />
						マウスイベント
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<h3 className="font-semibold">クリックイベント</h3>
							<Button onClick={handleClick} size="lg" className="w-full">
								クリックしてください（{clickCount}回）
							</Button>
							<div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
								<code className="text-sm">
									{"<Button onClick={handleClick}>"}
								</code>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="font-semibold">マウス移動イベント</h3>
							<div
								className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center cursor-crosshair"
								onMouseMove={handleMouseMove}
								onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
							>
								<p className="text-sm font-medium">
									座標: ({mousePosition.x}, {mousePosition.y})
								</p>
							</div>
							<div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
								<code className="text-sm">
									{"onMouseMove={handleMouseMove}"}
								</code>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl flex items-center">
						<Keyboard className="w-6 h-6 mr-2" />
						キーボード・フォームイベント
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						<h3 className="font-semibold">キーボードイベント</h3>
						<Input
							placeholder="ここで何かキーを押してください..."
							onKeyDown={handleKeyDown}
							onKeyUp={() => setKeyPressed("")}
						/>
						<p className="text-sm">
							押されたキー:{" "}
							<span className="font-bold text-lg">{keyPressed || "なし"}</span>
						</p>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">フォーカスイベント</h3>
						<Input
							placeholder="クリックしてフォーカス..."
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
						<p className="text-sm">
							状態:{" "}
							<span className="font-bold">{focusStatus || "未フォーカス"}</span>
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						<h3 className="font-semibold">フォーム送信イベント</h3>
						<div className="flex space-x-2">
							<Input
								value={inputValue}
								onChange={handleChange}
								placeholder="テキストを入力..."
							/>
							<Button type="submit">送信</Button>
						</div>
					</form>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="flex justify-between items-center">
					<CardTitle className="text-xl flex items-center">
						<Activity className="w-6 h-6 mr-2" />
						イベントログ
					</CardTitle>
					<div className="flex justify-end">
						<Button onClick={() => setEventLog([])}>クリア</Button>
					</div>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-2">
						{eventLog.length === 0 ? (
							<p className="text-gray-500 italic">
								イベントが記録されていません
							</p>
						) : (
							eventLog.map((log) => (
								<div key={log} className="text-sm font-mono">
									{log}
								</div>
							))
						)}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl">
						イベント処理の重要なポイント
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
						<h4 className="font-semibold mb-2 flex items-center">
							<AlertCircle className="w-5 h-5 mr-2" />
							よくある注意点
						</h4>
						<div className="space-y-3 text-sm">
							<div>
								<p className="font-medium">1. イベントハンドラーの渡し方</p>
								<div className="grid md:grid-cols-2 gap-2 mt-2">
									<div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
										❌ <code>{"onClick={handleClick()}"}</code>
									</div>
									<div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
										✅ <code>{"onClick={handleClick}"}</code>
									</div>
								</div>
							</div>

							<div>
								<p className="font-medium">2. イベントオブジェクトの型</p>
								<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">
									<code>
										{
											"const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... }"
										}
									</code>
								</div>
							</div>

							<div>
								<p className="font-medium">3. preventDefault()の使用</p>
								<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">
									<code>
										{
											"e.preventDefault(); // フォーム送信やリンクのデフォルト動作を防ぐ"
										}
									</code>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex items-start">
							<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
							<div>
								<p className="font-medium">イベントの委譲</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Reactは内部的にイベント委譲を使用し、ルート要素で全てのイベントを管理
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
							<div>
								<p className="font-medium">合成イベント</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									ブラウザ固有のイベントをラップし、クロスブラウザ対応を実現
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
							<div>
								<p className="font-medium">
									イベントプーリング（React 17以降は廃止）
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									最新のReactではイベントオブジェクトの再利用は行われない
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
