import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, GitCompare, Zap, Timer } from "lucide-react";

export const VirtualDomComponent: React.FC = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Item 1", color: "blue" },
        { id: 2, text: "Item 2", color: "green" },
        { id: 3, text: "Item 3", color: "red" },
    ]);
    const [updateCount, setUpdateCount] = useState(0);

    const updateItem = (id: number) => {
        setItems(items.map(item => 
            item.id === id 
                ? { ...item, text: `Updated ${item.text}` }
                : item
        ));
        setUpdateCount(prev => prev + 1);
    };

    const addItem = () => {
        const newId = Math.max(...items.map(i => i.id)) + 1;
        const colors = ["blue", "green", "red", "purple", "orange"];
        setItems([...items, {
            id: newId,
            text: `Item ${newId}`,
            color: colors[newId % colors.length]
        }]);
    };

    const shuffleItems = () => {
        setItems([...items].sort(() => Math.random() - 0.5));
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">Virtual DOMの仕組み</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                            Virtual DOMとは？
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
                            <li>実際のDOMの軽量なJavaScriptオブジェクト表現</li>
                            <li>メモリ上で高速に操作・比較が可能</li>
                            <li>変更箇所のみを実際のDOMに反映（差分更新）</li>
                            <li>ブラウザの再描画を最小限に抑える</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <Layers className="w-6 h-6 mr-2" />
                        Virtual DOMの動作プロセス
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                                    1
                                </div>
                                <h4 className="font-semibold mb-2">JSX → Virtual DOM</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    JSXがJavaScriptオブジェクトのツリー構造に変換される
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                                    2
                                </div>
                                <h4 className="font-semibold mb-2">差分検出（Diffing）</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    新旧のVirtual DOMツリーを比較して変更点を特定
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                                    3
                                </div>
                                <h4 className="font-semibold mb-2">調整（Reconciliation）</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    変更が必要な部分のみ実際のDOMを更新
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-semibold mb-3">コード例</h4>
                            <pre className="text-sm overflow-x-auto">
                                <code>{`// JSX
<div className="card">
  <h1>Title</h1>
  <p>Content</p>
</div>

// Virtual DOM オブジェクト
{
  type: 'div',
  props: { className: 'card' },
  children: [
    { type: 'h1', props: {}, children: ['Title'] },
    { type: 'p', props: {}, children: ['Content'] }
  ]
}`}</code>
                            </pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <GitCompare className="w-6 h-6 mr-2" />
                        差分検出アルゴリズム
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold mb-2">Reactの最適化戦略</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>
                                <strong>同じレベルでの比較</strong>: 
                                ツリーの同じ階層のノードのみを比較
                            </li>
                            <li>
                                <strong>要素タイプの確認</strong>: 
                                タイプが異なれば、サブツリー全体を再構築
                            </li>
                            <li>
                                <strong>Key属性の活用</strong>: 
                                リスト内の要素を効率的に追跡
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">インタラクティブなデモ</h4>
                        <div className="flex space-x-2 mb-4">
                            <Button onClick={addItem}>アイテム追加</Button>
                            <Button onClick={shuffleItems} variant="outline">シャッフル</Button>
                            <span className="text-sm text-gray-600 dark:text-gray-400 self-center">
                                更新回数: {updateCount}
                            </span>
                        </div>

                        <div className="grid gap-2">
                            {items.map((item) => (
                                <div 
                                    key={item.id}
                                    className={`p-3 rounded-lg flex justify-between items-center transition-all duration-300`}
                                    style={{ backgroundColor: `var(--${item.color}-100)` }}
                                >
                                    <span className="font-medium">{item.text}</span>
                                    <Button 
                                        size="sm" 
                                        onClick={() => updateItem(item.id)}
                                    >
                                        更新
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            各アイテムには固定のIDがあるため、シャッフルしても効率的に追跡されます。
                            更新ボタンを押すと、そのアイテムのみが再レンダリングされます。
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <Zap className="w-6 h-6 mr-2" />
                        パフォーマンスの利点
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                                    従来のDOM操作
                                </h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>DOM操作は重い処理</li>
                                    <li>リフローとリペイントが頻発</li>
                                    <li>パフォーマンスが低下</li>
                                    <li>ユーザー体験が悪化</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                                    Virtual DOMアプローチ
                                </h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>JavaScriptオブジェクトの操作は高速</li>
                                    <li>バッチ処理で効率化</li>
                                    <li>最小限のDOM更新</li>
                                    <li>スムーズなユーザー体験</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center">
                                <Timer className="w-5 h-5 mr-2" />
                                バッチ更新
                            </h4>
                            <p className="text-sm">
                                Reactは複数の状態更新を自動的にバッチ処理し、
                                1回のレンダリングサイクルにまとめます。
                                これにより、不要な再レンダリングを防ぎ、パフォーマンスを向上させます。
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Virtual DOMの誤解</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">Virtual DOM = 高速？</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Virtual DOM自体が高速なのではなく、
                                    差分検出による最適化が高速化の要因です。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">常に最速？</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    単純な更新では、直接DOM操作の方が速い場合もあります。
                                    複雑なUIの更新で真価を発揮します。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">React固有の技術？</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Virtual DOMの概念は他のフレームワークでも採用されています。
                                    実装方法は異なりますが、基本的な考え方は同じです。
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};