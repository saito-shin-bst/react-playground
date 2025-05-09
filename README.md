# shinshi-vite-playground

React + TypeScript + Vite

## 🎯 このプロジェクトでできること

- React + TypeScriptの基本的な開発
- Viteによる高速な開発体験
  - 爆速な開発サーバーの起動
  - HMR（Hot Module Replacement）による即時プレビュー
- Biomeを使ったLint/Format
- vitestによるテスト
- Dockerを使った開発環境の構築

## 🔧 プロジェクト環境

このプロジェクトは以下の環境で構築されています：

- Node.js: 23.x
- パッケージマネージャー: pnpm
- 依存関係: package.jsonを確認してください

## 🎬 オンボーディング

### 1. Node.jsのインストール
- [Node.js公式サイト](https://nodejs.org/)から最新版をインストールしてください
- バージョン管理ツール（asdf/nodenv/nvm）をお使いの場合は、そちらでインストールすることをお勧めします

### 2. パッケージマネージャーの選択
このプロジェクトは、お好みのパッケージマネージャー（npm/yarn/pnpm）で開発できます。
ロックファイル（package-lock.json/yarn.lock/pnpm-lock.yaml）はGitで管理されていないため、
普段お使いのパッケージマネージャーをそのままご利用ください。

以下は各パッケージマネージャーでの開発手順です：

#### npmを使う場合（Node.js標準）
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# Lintやテストの実行
npm run check      # Biome Lint/Formatterチェック
npm run test       # vitest テスト実行
```

#### pnpmを使う場合
```bash
# pnpmのインストール
npm install -g pnpm  # グローバルインストール

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm run dev

# Lintやテストの実行
pnpm run check      # Biome Lint/Formatterチェック
pnpm run test       # vitest テスト実行
```

#### asdfでpnpmを使う場合
```bash
# pnpmプラグインの追加（初回のみ）
asdf plugin add pnpm

# pnpmのインストールとバージョン設定
asdf install pnpm latest
asdf local pnpm 9.15.9

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm run dev
```

開発サーバーを起動後、ブラウザで http://localhost:5173/ にアクセスするとアプリが表示されます。

## 📝 開発の進め方

### 1. コードの変更
- `src/`ディレクトリ以下のファイルを編集してください
- ファイルを保存すると自動的にブラウザに反映されます（HMR: Hot Module Replacement）
  - Viteの強力な機能で、アプリを再起動することなく、変更した部分だけがリアルタイムで更新されます
  - 開発中の状態（フォームの入力内容など）も保持されます
  - 従来のバンドラーと比べて非常に高速に動作します

### 2. コードの品質管理
```bash
# Lintとフォーマットのチェック
npm run check  # または pnpm run check

# 自動修正を適用
npm run check:fix  # または pnpm run check:fix

# テストの実行
npm run test  # または pnpm run test
```

## 🐳 Dockerを使った開発環境構築

### 1. Docker Desktopのインストール
- [Docker公式サイト](https://www.docker.com/products/docker-desktop/) からインストール

### 2. Dockerイメージのビルド
```bash
npm run docker:build  # または pnpm run docker:build
```

### 3. Dockerコンテナの起動
```bash
npm run docker:up  # または pnpm run docker:up
```
- ブラウザで http://localhost:5173/ にアクセス

### 4. その他便利コマンド
```bash
npm run docker:stop   # コンテナの停止
npm run docker:start  # 停止したコンテナの再起動
npm run docker:rm     # コンテナの削除
```

## 📚 参考リンク

- [Vite公式ドキュメント](https://vitejs.dev/)
- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式](https://www.typescriptlang.org/)
- [Biome公式](https://biomejs.dev/)
- [vitest公式](https://vitest.dev/)
