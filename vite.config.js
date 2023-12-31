import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// .env ファイルの読み込み
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line no-undef
  base: process.env.GITHUB_PAGES
    // eslint-disable-next-line no-undef
    ? `/${process.env.REPOSITORY_NAME}` // レポジトリ名を設定
    : './',
  build: {
    outDir: 'dist', // ここにビルド後のファイルが出力されます
  },
})
