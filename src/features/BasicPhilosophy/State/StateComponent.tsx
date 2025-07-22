import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity, Database, RefreshCw, Zap } from "lucide-react";

export const StateComponent: React.FC = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">状態（State）とは何か</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                            Stateは、時間とともに変化するコンポーネントの「記憶」
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
                            <li>ユーザーの操作に応じて画面を更新するための仕組み</li>
                            <li>コンポーネントごとに独立して管理される</li>
                            <li>Stateが変更されると、Reactが自動的に再レンダリング</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <Activity className="w-6 h-6 mr-2" />
                        基本的なStateの例
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold">カウンター（数値のState）</h3>
                            <div className="flex items-center space-x-4">
                                <Button onClick={() => setCount(count - 1)}>-</Button>
                                <div className="text-2xl font-bold w-16 text-center">{count}</div>
                                <Button onClick={() => setCount(count + 1)}>+</Button>
                                <Button 
                                    variant="outline" 
                                    onClick={() => setCount(0)}
                                >
                                    リセット
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                                <code className="text-sm">
                                    const [count, setCount] = useState(0);
                                </code>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">テキスト入力（文字列のState）</h3>
                            <Input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="テキストを入力..."
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                入力内容: {text || "（未入力）"}
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                                <code className="text-sm">
                                    const [text, setText] = useState("");
                                </code>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <Database className="w-6 h-6 mr-2" />
                        複雑なStateの管理
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="font-semibold">表示/非表示の切り替え（真偽値のState）</h3>
                        <div className="space-y-4">
                            <Button
                                onClick={() => setIsVisible(!isVisible)}
                                variant={isVisible ? "default" : "outline"}
                            >
                                {isVisible ? "非表示にする" : "表示する"}
                            </Button>
                            {isVisible && (
                                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                                    <p className="text-green-800 dark:text-green-200">
                                        このメッセージは表示/非表示を切り替えられます！
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">リスト管理（配列のState）</h3>
                        <div className="flex space-x-2">
                            <Input
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                                placeholder="項目を追加..."
                                onKeyPress={(e) => e.key === "Enter" && addItem()}
                            />
                            <Button onClick={addItem}>追加</Button>
                        </div>
                        <div className="space-y-2">
                            {items.length === 0 ? (
                                <p className="text-gray-500 italic">リストは空です</p>
                            ) : (
                                items.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                                        <span>{item}</span>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => removeItem(index)}
                                        >
                                            削除
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <RefreshCw className="w-6 h-6 mr-2" />
                        Stateの更新とレンダリング
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <h4 className="font-semibold mb-2">重要な原則</h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>
                                    <strong>不変性（Immutability）</strong>: 
                                    Stateは直接変更せず、新しい値で置き換える
                                </li>
                                <li>
                                    <strong>非同期更新</strong>: 
                                    State更新は即座に反映されない（バッチ処理される）
                                </li>
                                <li>
                                    <strong>関数型更新</strong>: 
                                    前の値に基づく更新は、関数を使う
                                </li>
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                                    ❌ 間違った例
                                </h4>
                                <pre className="text-sm bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                                    <code>{`// 直接変更してはいけない
count++;
items.push(newItem);
user.name = "新しい名前";`}</code>
                                </pre>
                            </div>

                            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                                    ✅ 正しい例
                                </h4>
                                <pre className="text-sm bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                                    <code>{`// 新しい値で更新
setCount(count + 1);
setItems([...items, newItem]);
setUser({...user, name: "新しい名前"});`}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <Zap className="w-6 h-6 mr-2" />
                        Stateの設計原則
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">最小限のStateを保持</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    計算で求められる値はStateにせず、必要最小限の情報のみをStateとして管理
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">単一責任の原則</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    1つのStateは1つの目的のためだけに使用し、複雑な状態は分割して管理
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">リフトアップ</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    複数のコンポーネントで共有する状態は、共通の親コンポーネントで管理
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};