import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCw, XCircle, Activity } from "lucide-react";

export const LifecycleComponent: React.FC = () => {
    const [showTimer, setShowTimer] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
        const timestamp = new Date().toLocaleTimeString();
        setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    };

    const clearLogs = () => {
        setLogs([]);
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">コンポーネントの生存期間</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                            コンポーネントのライフサイクルとは？
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
                            <li>マウント: コンポーネントが初めて画面に表示される</li>
                            <li>更新: propsやstateの変更によって再レンダリングされる</li>
                            <li>アンマウント: コンポーネントが画面から削除される</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        <Activity className="w-6 h-6 mr-2" />
                        ライフサイクルの可視化
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-300 dark:border-green-700">
                            <Play className="w-8 h-8 mx-auto mb-2 text-green-600" />
                            <h3 className="font-semibold mb-2">マウント</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                コンポーネントが生まれる
                            </p>
                            <ul className="text-xs mt-2 space-y-1">
                                <li>初期状態の設定</li>
                                <li>APIからデータ取得</li>
                                <li>イベントリスナー登録</li>
                            </ul>
                        </div>

                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                            <RotateCw className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                            <h3 className="font-semibold mb-2">更新</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                propsやstateが変化
                            </p>
                            <ul className="text-xs mt-2 space-y-1">
                                <li>新しいpropsの受信</li>
                                <li>state更新による再描画</li>
                                <li>副作用の再実行</li>
                            </ul>
                        </div>

                        <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg border-2 border-red-300 dark:border-red-700">
                            <XCircle className="w-8 h-8 mx-auto mb-2 text-red-600" />
                            <h3 className="font-semibold mb-2">アンマウント</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                コンポーネントが削除
                            </p>
                            <ul className="text-xs mt-2 space-y-1">
                                <li>リソースの解放</li>
                                <li>タイマーのクリア</li>
                                <li>リスナーの解除</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Button
                                onClick={() => {
                                    setShowTimer(!showTimer);
                                    addLog(showTimer ? "タイマーコンポーネントを削除" : "タイマーコンポーネントを作成");
                                }}
                                variant={showTimer ? "destructive" : "default"}
                            >
                                {showTimer ? "タイマーを削除" : "タイマーを表示"}
                            </Button>
                            <Button onClick={clearLogs} variant="outline">
                                ログをクリア
                            </Button>
                        </div>

                        {showTimer && <TimerComponent onLog={addLog} />}

                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">ライフサイクルログ</h4>
                            <div className="space-y-1 max-h-48 overflow-y-auto font-mono text-sm">
                                {logs.length === 0 ? (
                                    <p className="text-gray-500 italic">ログはまだありません</p>
                                ) : (
                                    logs.map((log, index) => (
                                        <div key={index} className="text-gray-700 dark:text-gray-300">
                                            {log}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">useEffectとライフサイクル</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold mb-2">関数コンポーネントでのライフサイクル管理</h4>
                        <p className="text-sm mb-3">
                            useEffectフックを使用して、ライフサイクルの各段階で処理を実行できます。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h4 className="font-semibold mb-2">マウント時の処理</h4>
                            <pre className="text-sm overflow-x-auto">
                                <code>{`useEffect(() => {
  // マウント時に実行される
  console.log("コンポーネントがマウントされました");
  
  // データの取得
  fetchData();
  
  // イベントリスナーの登録
  window.addEventListener('resize', handleResize);
}, []); // 空の依存配列 = マウント時のみ実行`}</code>
                            </pre>
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h4 className="font-semibold mb-2">更新時の処理</h4>
                            <pre className="text-sm overflow-x-auto">
                                <code>{`useEffect(() => {
  // propsやstateが変更されるたびに実行
  console.log("値が更新されました:", value);
  
  // 値に応じた処理
  updateUI(value);
}, [value]); // valueが変更されたときのみ実行`}</code>
                            </pre>
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h4 className="font-semibold mb-2">アンマウント時の処理（クリーンアップ）</h4>
                            <pre className="text-sm overflow-x-auto">
                                <code>{`useEffect(() => {
  const timer = setInterval(() => {
    console.log("タイマー実行");
  }, 1000);
  
  // クリーンアップ関数
  return () => {
    // アンマウント時に実行される
    clearInterval(timer);
    console.log("タイマーをクリアしました");
  };
}, []);`}</code>
                            </pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">ライフサイクルのベストプラクティス</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">適切なクリーンアップ</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    タイマー、イベントリスナー、購読などは必ずクリーンアップして、
                                    メモリリークを防ぐ
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">依存配列の正確な指定</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    useEffectの依存配列には、エフェクト内で使用する全ての値を含める
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">条件付きエフェクトの回避</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    useEffectは常にトップレベルで呼び出し、
                                    条件分岐はエフェクト内部で行う
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">副作用の最小化</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    可能な限り副作用を減らし、純粋な計算はレンダリング中に行う
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

// タイマーコンポーネント（ライフサイクルのデモ用）
const TimerComponent: React.FC<{ onLog: (message: string) => void }> = ({ onLog }) => {
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        onLog("TimerComponent: マウントされました");

        return () => {
            onLog("TimerComponent: アンマウントされました");
        };
    }, [onLog]);

    useEffect(() => {
        if (!isPaused) {
            onLog(`TimerComponent: タイマー${isPaused ? "停止" : "開始"}`);
            const interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);

            return () => {
                clearInterval(interval);
                onLog("TimerComponent: タイマーをクリアしました");
            };
        }
    }, [isPaused, onLog]);

    useEffect(() => {
        if (seconds > 0) {
            onLog(`TimerComponent: 時間更新 - ${seconds}秒`);
        }
    }, [seconds, onLog]);

    return (
        <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{seconds}秒</div>
                <div className="space-x-2">
                    <Button
                        size="sm"
                        onClick={() => setIsPaused(!isPaused)}
                        variant={isPaused ? "default" : "secondary"}
                    >
                        {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                        {isPaused ? "再開" : "一時停止"}
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => setSeconds(0)}
                        variant="outline"
                    >
                        リセット
                    </Button>
                </div>
            </div>
        </div>
    );
};