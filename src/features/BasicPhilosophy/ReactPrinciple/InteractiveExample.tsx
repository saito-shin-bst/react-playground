import { CodeBlock } from "@/components/common/CodeBlock";
import { Card } from "@/components/ui/card";

export function InteractiveExample() {
	const exampleCode = `// 名前を変えてみてください！
const name = "太郎";
const age = 25;

// コンポーネントの例
function Greeting() {
    return \`こんにちは、\${name}さん！ あなたは\${age}歳ですね。\`;
}

// 実行結果を表示
console.log(Greeting());
console.log("名前の長さ:", name.length);
console.log("5年後の年齢:", age + 5);`;

	return (
		<Card className="p-6">
			<h2 className="text-2xl font-semibold mb-4">
				インタラクティブな例: 試してみよう！
			</h2>
			<div className="space-y-4">
				<p>
					以下のコードを編集して、実行結果を確認してみましょう。
					名前や年齢を変えて、どのように出力が変わるか試してください。
				</p>
				<CodeBlock code={exampleCode} language="javascript" />
				<div className="text-sm text-muted-foreground">
					ヒント:
					コードを編集してから、実行ボタン（▶）をクリックして結果を確認しましょう。
				</div>
			</div>
		</Card>
	);
}
