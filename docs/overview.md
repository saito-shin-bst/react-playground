# OmoiCode: Code Quest - 想いを紡ぐコードの探求

## 1. サービス概要
「OmoiCode: Code Quest」は、エンジニアの効率的な知識習得と実践的なスキル向上を支援するアプリケーションです。
「今日、15分でちょっと何か学びたいな」という気持ちに応える、気軽に始められる学習体験を提供します。
現在はReactを中心に展開していますが、将来的には様々な技術スタックやエンジニアリング分野に対応予定です。
体系的な「レッスン」で基礎を学び、実践的な「クエスト」で技術を磨くことができます。

### 1.1 名前の由来
このアプリケーション名は、日本の神様「オモイカネ」（思考・知恵の神様）からインスピレーションを得ています。
「想い」（プログラミングへの情熱）、「思い」（思考・アイデア）、「Code」（プログラミング）という多層的な意味を込めることで、
技術的な学びと共に、プログラミングへの想いも大切にしていきたいという願いが込められています。

### 1.2 プロジェクトの背景とターゲット
このプロジェクトは、「エンジニアとしての知識学習をより効率的にしたい」という開発者自身の思いから始まりました。
技術の進化は日々加速しており、エンジニアは常に新しい知識とスキルを習得し続ける必要があります。
しかし、多くの学習コンテンツは長時間の集中を必要とし、忙しい日々の中で継続的に取り組むことが難しいものです。
「空き時間を見つけて15分でも30分でも、今の気分に合わせて学べる」という環境が必要だと感じたことが開発のきっかけです。

#### ターゲットペルソナ
- 日々の隙間時間を有効活用して学習したいエンジニア
- 「今日は何を学ぼう」とその日の気分や時間に合わせて取り組みたい人
- 短時間でも着実に知識を積み重ねていきたい人
- 忙しい中でも継続的に学習を進めていきたい人
- 新しい技術分野に気軽にチャレンジしていきたい人

### 1.3 利用シーン例
- 通勤電車での15分、メンタルリフレッシュを兼ねた簡単なクエスト
- 昼休憩の30分、興味のある技術の基礎レッスン
- 仕事終わりの空き時間、その日学んだ技術の実践クエスト
- 週末の集中時間、じっくり取り組むチャレンジクエスト

## 2. 主要機能

### 2.1 レッスン機能
- React基礎からの体系的な学習コンテンツ
- インタラクティブな学習教材
- 理解度確認クイズ
- 進捗管理

### 2.2 クエスト提案機能
- 利用可能時間に基づくクエスト提案
- 難易度選択（簡単、普通、チャレンジ）
- 技術カテゴリーの選択
- クエストの詳細説明

### 2.3 クエスト管理
- クエストの受注と完了報告
- 進行中クエストの表示
- クエスト履歴の管理
- 達成度の可視化

### 2.4 報酬システム
- クエスト達成によるポイント獲得
- 継続達成ボーナス
- 称号システム
- 実績バッジ

## 3. データ構造

### 3.1 レッスンデータ
```typescript
/** 技術スタックを定義する型 */
type TechStack = 'react' // 将来的に他の技術も追加予定

/** レッスンの難易度を定義する型 */
type LessonDifficulty = 'beginner' | 'intermediate' | 'advanced'

/** Reactレッスンカテゴリを定義する型 */
type ReactLessonCategory = 
  | 'jsx-basics'           // JSXの基礎
  | 'component-basics'     // コンポーネントの基礎
  | 'hooks-basic'          // 基本的なHooks
  | 'hooks-advanced'       // 発展的なHooks
  | 'state-management'     // 状態管理
  | 'performance'          // パフォーマンス最適化
  | 'testing'              // テスト
  | 'patterns'             // デザインパターン

/** レッスンコンテンツの種類を定義する型 */
type ContentType = 
  | 'text'          // テキスト
  | 'video'         // 動画
  | 'interactive'   // インタラクティブ
  | 'quiz'          // クイズ

/** レッスン情報を管理する型 */
type Lesson = {
  /** レッスンの一意識別子 */
  id: string
  /** 対象技術スタック */
  techStack: TechStack
  /** レッスンのタイトル */
  title: string
  /** レッスンの説明 */
  description: string
  /** カテゴリ */
  category: ReactLessonCategory
  /** 難易度 */
  difficulty: LessonDifficulty
  /** 想定学習時間（分） */
  duration: number
  /** 前提知識のレッスンID */
  prerequisites: string[]
  /** コンテンツ */
  contents: {
    /** コンテンツの種類 */
    type: ContentType
    /** タイトル */
    title: string
    /** 内容 */
    content: string
    /** 補足情報 */
    metadata?: Record<string, unknown>
  }[]
  /** 確認クイズ */
  quizzes: {
    /** 問題 */
    question: string
    /** 選択肢 */
    choices: string[]
    /** 正解のインデックス */
    correctIndex: number
    /** 解説 */
    explanation: string
  }[]
  /** 関連クエストID */
  relatedQuestIds: string[]
}

/** ユーザーの学習進捗を管理する型 */
type LearningProgress = {
  /** ユーザーの一意識別子 */
  userId: string
  /** レッスンの進捗状況 */
  lessonProgress: {
    /** レッスンID */
    lessonId: string
    /** 進捗状況（%） */
    progressPercentage: number
    /** クイズのスコア */
    quizScores: number[]
    /** 開始日時 */
    startedAt: Date
    /** 完了日時 */
    completedAt?: Date
  }[]
}
```

### 3.2 クエストデータ
```typescript
/** Reactクエストカテゴリを定義する型 */
type ReactQuestCategory = 
  | 'component-creation'    // コンポーネント作成
  | 'hooks-implementation'  // Hooks実装
  | 'performance-tuning'    // パフォーマンスチューニング
  | 'testing-practice'      // テスト実装
  | 'refactoring'          // リファクタリング
  | 'debugging'            // デバッグ

/** クエストの難易度を定義する型 */
type QuestDifficulty = 'easy' | 'normal' | 'challenge'

/** クエストの所要時間を定義する型（分） */
type QuestDuration = 15 | 30 | 60 | 120

/** クエスト情報を管理する型 */
type Quest = {
  /** クエストの一意識別子 */
  id: string
  /** 対象技術スタック */
  techStack: TechStack
  /** クエストのタイトル */
  title: string
  /** クエストの説明 */
  description: string
  /** カテゴリ */
  category: ReactQuestCategory
  /** 難易度 */
  difficulty: QuestDifficulty
  /** 所要時間（分） */
  duration: QuestDuration
  /** 獲得ポイント */
  points: number
  /** クリア条件 */
  clearConditions: string[]
  /** ヒント */
  hints: string[]
  /** 前提レッスンID */
  requiredLessonIds: string[]
}
```

## 4. 技術スタック
- フロントエンド: React + TypeScript
- UIフレームワーク: shadcn/ui + Tailwind CSS
- 状態管理: jotai
- アニメーション: Framer Motion

## 5. 今後の展開
- レッスンコンテンツの充実化
- インタラクティブな学習教材の開発
- AIを活用した学習パスの最適化
- クエストの自動生成機能
- 他の技術スタックへの対応（Vue, Svelte など）
- ソーシャル機能（フレンド間での進捗共有）
- カスタムクエストの作成機能
- 詳細な学習分析レポート
