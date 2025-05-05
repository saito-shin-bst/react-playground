# Node.jsの公式イメージを使用
FROM node:20-slim

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install
RUN npm rebuild

# ソースコードをコピー
COPY . .

# 開発サーバーのポートを開放
EXPOSE 5173

# 開発サーバーを起動
CMD ["npm", "run", "dev", "--", "--host"] 