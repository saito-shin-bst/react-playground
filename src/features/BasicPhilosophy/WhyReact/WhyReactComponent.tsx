import { CodeBlock } from "@/components/common/CodeBlock";
import { Card } from "@/components/ui/card";

export function WhyReactComponent() {
	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold mb-4">
					0-1: なぜReactが生まれたのか
				</h1>
				<p className="text-lg text-muted-foreground">
					従来のDOM操作の問題とReactが提供する解決策を理解しましょう
				</p>
			</div>

			<Card className="p-6">
				<h2 className="text-2xl font-semibold mb-4">
					困りごと: 従来のDOM操作の問題
				</h2>
				<div className="space-y-4">
					<p>
						jQueryなど従来の方法では、複雑なアプリケーションの状態管理が困難でした。
						DOM要素を直接操作することで、以下のような問題が発生していました：
					</p>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>状態とUIの同期が困難</li>
						<li>イベントハンドラーの管理が複雑化</li>
						<li>コードの再利用性が低い</li>
						<li>大規模アプリケーションでの保守性の問題</li>
					</ul>
				</div>
			</Card>

			<Card className="p-6">
				<h2 className="text-2xl font-semibold mb-4">
					jQuery時代の問題: 複雑な状態管理
				</h2>
				<div className="space-y-4">
					<p>以下は、jQueryで書かれたTODOリストの例です：</p>
					<CodeBlock
						language="javascript"
						code={`// jQuery時代のコード例
$(document).ready(function() {
    let todos = [];
    
    $('#add-todo').click(function() {
        const text = $('#todo-input').val();
        if (text) {
            todos.push({ id: Date.now(), text, completed: false });
            renderTodos();
            $('#todo-input').val('');
        }
    });
    
    function renderTodos() {
        const $list = $('#todo-list');
        $list.empty();
        
        todos.forEach(todo => {
            const $item = $('<li>')
                .addClass(todo.completed ? 'completed' : '')
                .html(\`
                    <span>\${todo.text}</span>
                    <button class="toggle" data-id="\${todo.id}">完了</button>
                    <button class="delete" data-id="\${todo.id}">削除</button>
                \`);
            $list.append($item);
        });
        
        // イベントハンドラーを再設定
        $('.toggle').click(function() {
            const id = $(this).data('id');
            todos = todos.map(t => 
                t.id === id ? { ...t, completed: !t.completed } : t
            );
            renderTodos();
        });
        
        $('.delete').click(function() {
            const id = $(this).data('id');
            todos = todos.filter(t => t.id !== id);
            renderTodos();
        });
    }
});`}
					/>
					<p className="text-sm text-muted-foreground">
						問題点: 状態（todos配列）とDOM操作が密結合し、
						イベントハンドラーの再設定など管理が複雑
					</p>
				</div>
			</Card>

			<Card className="p-6">
				<h2 className="text-2xl font-semibold mb-4">
					解決策: 宣言的UI、状態に基づく自動描画
				</h2>
				<div className="space-y-4">
					<p>Reactは以下の革新的なアプローチで問題を解決しました：</p>

					<div className="grid md:grid-cols-2 gap-4">
						<Card className="p-4">
							<h3 className="font-semibold mb-2">宣言的UI</h3>
							<p className="text-sm">
								「UIがどうあるべきか」を記述するだけで、
								Reactが実際のDOM操作を行います
							</p>
						</Card>
						<Card className="p-4">
							<h3 className="font-semibold mb-2">状態ベースの描画</h3>
							<p className="text-sm">
								状態が変わると自動的にUIが更新され、
								手動でDOMを操作する必要がありません
							</p>
						</Card>
					</div>

					<div className="mt-6">
						<p className="mb-2">同じTODOリストをReactで実装した例：</p>
						<CodeBlock
							language="tsx"
							code={`import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        if (input) {
            setTodos([...todos, {
                id: Date.now(),
                text: input,
                completed: false
            }]);
            setInput('');
        }
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="TODOを入力"
            />
            <button onClick={addTodo}>追加</button>
            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <span>{todo.text}</span>
                        <button onClick={() => toggleTodo(todo.id)}>完了</button>
                        <button onClick={() => deleteTodo(todo.id)}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}`}
						/>
						<p className="text-sm text-muted-foreground mt-2">
							Reactでは状態（todos）を更新するだけで、UIが自動的に更新されます
						</p>
					</div>
				</div>
			</Card>

			<Card className="p-6">
				<h2 className="text-2xl font-semibold mb-4">まとめ</h2>
				<div className="space-y-4">
					<p>
						Reactは「UIは状態の関数である」という考え方を導入しました。
						これにより、開発者は「今の状態でUIがどう見えるべきか」を
						宣言的に記述するだけで、複雑なDOM操作から解放されました。
					</p>
					<div className="bg-muted p-4 rounded-lg">
						<p className="font-mono text-center">UI = f(state)</p>
					</div>
				</div>
			</Card>
		</div>
	);
}
