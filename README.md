# react-gridify-links

## Description
- YouTubeのぷらぐらさんチャンネルで神サイトを紹介してたので、リンク一覧を作りたい
  * refer Youtube01 ：[【無料】『本当に役に立つ』"Webサイト"19選を発表していいかい？](https://www.youtube.com/watch?v=nFHPwsIuwW0)
  * refer Youtube02 ：[『本当に有能な』"Webサイト"20選を紹介するぜ！【ガチ厳選】](https://www.youtube.com/watch?v=AqOhbuEyBpA)

### Setup GitHub Action
- Viteの[Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html#github-pages)に沿ってGitHub Pagesにデプロイする
  * [workflows/main.yaml](.github/workflows/main.yml)

#### 一度、`npm run build`を試す
- テンプレートの`main.yaml`の場合、`package-lock.json`を参照するので、一度、`npm run build`まで実施する
```sh
npm i
npm run build
```

## Vite + React
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## LICENSE
- MIT License.
