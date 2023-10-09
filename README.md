# react-gridify-links

## Description
- YouTubeのぷらぐらさんチャンネルで神サイトを紹介してたので、リンク一覧を作りたい
  * refer Youtube01 ：[【無料】『本当に役に立つ』"Webサイト"19選を発表していいかい？](https://www.youtube.com/watch?v=nFHPwsIuwW0)
  * refer Youtube02 ：[『本当に有能な』"Webサイト"20選を紹介するぜ！【ガチ厳選】](https://www.youtube.com/watch?v=AqOhbuEyBpA)

### Setup GitHub Action
- Viteの[Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html#github-pages)に沿ってGitHub Pagesにデプロイする
- 参考）Zenn記事『[React(+Vite)をGithub PageへDeploy](https://zenn.dev/shivase/articles/009-react-vite-githubpages)』を参考にworkflowファイルと`vite.config.js`を設定する

#### Workflowファイルを追加
* [workflows/main.yaml](.github/workflows/main.yml)
  * 一部、`env`設定を追加
```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages
...
jobs:
  # Single deploy job since we're just deploying
  deploy:
    steps:
      - name: Build
        run: npm run build
+         # GIthubページは https://USERNAME.github.io/REPOSITORY_NAME/
+         # となるので、envを追加してviteのベースパスを変えるように設定します。
+         env:
+           GITHUB_PAGES: true
      - name: Setup Pages
```

#### [vite.config.js](./vite.config.js)の変更点
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
+ import dotenv from 'dotenv';
+ 
+ // .env ファイルの読み込み
+ dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
+   base: process.env.GITHUB_PAGES
+     ? `/${process.env.REPOSITORY_NAME}` // レポジトリ名を設定
+     : './'
})
```

#### 一度、npmコマンドを試す
- テンプレートの`main.yaml`の場合、`package-lock.json`を参照するので、一度、`npm run build`まで実施する
```sh
npm i
npm run build
npm run preview
```

## Vite + React
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## LICENSE
- MIT License.
