# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🖥️ ローカル環境セットアップ方法（日本語まとめ）

### 1. Node.jsとnpmのインストール
- [Node.js公式サイト](https://nodejs.org/)から最新版をインストールしてください

### 2. 依存関係のインストール
```bash
npm install
```

### 3. 開発サーバーの起動
```bash
npm run dev
```
- ブラウザで http://localhost:5173/ にアクセスするとアプリが表示されます

### 4. Lintやテストの実行
```bash
npm run check      # Biome Lint/Formatterチェック
npm run test       # vitest テスト実行
```

## 🐳 Dockerを使った開発環境構築

### 1. Docker Desktopのインストール
- [Docker公式サイト](https://www.docker.com/products/docker-desktop/) からインストール

### 2. Dockerイメージのビルド
```bash
npm run docker:build
```

### 3. Dockerコンテナの起動
```bash
npm run docker:up
```
- ブラウザで http://localhost:5173/ にアクセス

### 4. その他便利コマンド
```bash
npm run docker:stop   # コンテナの停止
npm run docker:start  # 停止したコンテナの再起動
npm run docker:rm     # コンテナの削除
```

## 📝 Node.jsバージョン指定のメモ

- `package.json` の `"engines": { "node": "23.x" }` は「Node.js 23系（例: 23.0.0, 23.11.0 など）ならOK」という意味です。
- GitHub Actions では `node-version-file: package.json` を使っているため、CIでも自動的に23系の最新安定版がインストールされます。
- ローカル開発では、23系以外のNode.jsを使っていると警告が出ます（強制エラーにはなりません）。
- VoltaやHeroku、Netlifyなど一部のサービスはこの指定を自動で参照してNode.jsのバージョンを決定します。
- バージョンアップ時は `package.json` のこの値を変更するだけで、ローカルもCIも一括でバージョンを揃えられます。
