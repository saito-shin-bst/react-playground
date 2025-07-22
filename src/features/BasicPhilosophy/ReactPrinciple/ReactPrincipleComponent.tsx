import { CodeBlock } from "@/components/common/CodeBlock";
import { SectionCard } from "@/components/common/SectionCard";

export function ReactPrincipleComponent() {
	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold mb-4">0-2: Reactの主義</h1>
				<p className="text-lg text-muted-foreground">
					コンポーネント、JSX、Propsの基本概念を理解しましょう
				</p>
			</div>

			<SectionCard title="困りごと: 画面の複雑性をどう管理するか">
				<p>
					大規模なアプリケーションでは、UIの複雑性が急速に増大します。
					Reactは以下の主要な概念でこの問題に対処します
				</p>
			</SectionCard>

			<SectionCard title="コンポーネント">
				<p>
					コンポーネントは、UIを部品化する考え方で、独立した再利用可能なUIの部品です。
					各コンポーネントは独自の見た目と振る舞いを持ちます。
				</p>
				<CodeBlock
					language="tsx"
					code={`// シンプルなコンポーネントの例
function Greeting() {
    return <h1>こんにちは！</h1>;
}

// パラメータを受け取るコンポーネント
function Welcome(props) {
    return <h1>こんにちは、{props.name}さん！</h1>;
}

// 複数のコンポーネントを組み合わせる
function App() {
    return (
        <div>
            <Greeting />
            <Welcome name="太郎" />
            <Welcome name="花子" />
        </div>
    );
}`}
				/>
			</SectionCard>

			<SectionCard title="JSX">
				<p>
					JSXは、JavaScriptの中にHTMLのような記法を書ける拡張構文です。
					実際にはJavaScriptに変換されます。
				</p>
				<div className="grid md:grid-cols-2 gap-4">
					<div>
						<h3 className="font-semibold mb-2">JSXで書くと：</h3>
						<CodeBlock
							language="jsx"
							code={`const element = (
    <div className="greeting">
        <h1>Hello, World!</h1>
        <p>Welcome to React</p>
    </div>
);`}
						/>
					</div>
					<div>
						<h3 className="font-semibold mb-2">実際のJavaScript：</h3>
						<CodeBlock
							language="javascript"
							code={`const element = React.createElement(
    'div',
    { className: 'greeting' },
    React.createElement('h1', null, 'Hello, World!'),
    React.createElement('p', null, 'Welcome to React')
);`}
						/>
					</div>
				</div>
				<p className="text-sm text-muted-foreground mt-4">
					JSXはコンパイル時に純粋なJavaScriptに変換されます
				</p>
			</SectionCard>

			<SectionCard title="Props">
				<p>
					Propsは、親コンポーネントから子コンポーネントへデータを渡す仕組みです。
					単方向のデータフローを実現します。
				</p>
				<CodeBlock
					language="tsx"
					code={`// Propsの型定義（TypeScript）
interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}

// Propsを受け取るコンポーネント
function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
    return (
        <button
            className={\`btn btn-\${variant}\`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

// 親コンポーネントからPropsを渡す
function App() {
    const handleClick = () => {
        alert('ボタンがクリックされました！');
    };
    
    return (
        <div>
            <Button text="クリックしてください" onClick={handleClick} />
            <Button 
                text="キャンセル" 
                onClick={() => console.log('キャンセル')} 
                variant="secondary"
            />
        </div>
    );
}`}
				/>
			</SectionCard>

			<SectionCard title="実践例">
				<p>
					これまでの概念を組み合わせて、実用的な名刺コンポーネントを作成してみましょう。
				</p>
				<CodeBlock
					language="tsx"
					code={`interface BusinessCardProps {
    name: string;
    title: string;
    company: string;
    email: string;
    phone?: string;
    imageUrl?: string;
}

function BusinessCard({ name, title, company, email, phone, imageUrl }: BusinessCardProps) {
    return (
        <div className="business-card">
            <div className="card-header">
                {imageUrl && (
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="profile-image"
                    />
                )}
                <div className="header-text">
                    <h2>{name}</h2>
                    <p className="title">{title}</p>
                    <p className="company">{company}</p>
                </div>
            </div>
            <div className="card-contact">
                <p>📧 {email}</p>
                {phone && <p>📱 {phone}</p>}
            </div>
        </div>
    );
}

// 使用例
function App() {
    const employees = [
        {
            name: "山田太郎",
            title: "ソフトウェアエンジニア",
            company: "React株式会社",
            email: "yamada@example.com",
            phone: "090-1234-5678"
        },
        {
            name: "鈴木花子",
            title: "プロダクトマネージャー",
            company: "React株式会社",
            email: "suzuki@example.com"
        }
    ];
    
    return (
        <div className="employee-list">
            {employees.map((employee, index) => (
                <BusinessCard key={index} {...employee} />
            ))}
        </div>
    );
}`}
				/>
				<div className="mt-4 p-4 bg-muted rounded-lg">
					<p className="text-sm">このように、コンポーネント化することで：</p>
					<ul className="list-disc list-inside mt-2 text-sm space-y-1">
						<li>再利用可能な部品を作成</li>
						<li>データと見た目を分離</li>
						<li>保守性の高いコードを実現</li>
					</ul>
				</div>
			</SectionCard>

			<SectionCard title="まとめ">
				<p>Reactの主要な概念：</p>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>
						<strong>コンポーネント</strong>: UIを独立した部品に分割
					</li>
					<li>
						<strong>JSX</strong>: JavaScriptの中でHTMLライクな記法を使用
					</li>
					<li>
						<strong>Props</strong>: コンポーネント間でデータを受け渡す仕組み
					</li>
				</ul>
				<p className="mt-4">
					これらの概念により、大規模で複雑なUIも管理しやすくなります。
				</p>
			</SectionCard>
		</div>
	);
}
