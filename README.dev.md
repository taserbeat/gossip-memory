# 開発について

React + TypeScript で作ったフロントアプリを GitHub Pages でホスティングする。  
GitHub Actions を利用して CI/CD も取り入れる。

## 開発環境

- TypeScript 4.2.3
- React 17.0.2

## 開発ツール

- [Visual Studio Code](https://code.visualstudio.com/)
- [Github Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages)
- [Figma](https://www.figma.com/)

## ブランチの運用について

リモートブランチの切り方は次の通りとする。

| ブランチ名 | 派生元 | マージ先 | 役割                                                                                              |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
| master     | -      | -        | アプリケーションの最新バージョンを管理するブランチ                                                |
| feature/\* | master | master   | 新機能の開発用ブランチ                                                                            |
| fix/\*     | master | master   | 軽微なバグ修正やドキュメントの整理などを行うブランチ                                              |
| gh-pages   | -      | -        | [GitHub Pages](https://taserbeat.github.io/gossip-memory)で公開中の静的アセットを管理するブランチ |

## ブランチの運用について

リモートブランチの切り方は次の通りとする。

| ブランチ名 | 派生元 | マージ先 | 役割                                                                                              |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
| master     | -      | -        | アプリケーションの最新バージョンを管理するブランチ                                                |
| feature/\* | master | master   | 新機能の開発用ブランチ                                                                            |
| fix/\*     | master | master   | 軽微なバグ修正やドキュメントの整理などを行うブランチ                                              |
| gh-pages   | -      | -        | [GitHub Pages](https://taserbeat.github.io/gossip-memory)で公開中の静的アセットを管理するブランチ |

## CI/CD の運用について

次のイベント内容をトリガーに CI/CD を行う。

| イベント内容                                      | 実行内容                                | 対象のワークフロー定義ファイル       |
| ------------------------------------------------- | --------------------------------------- | ------------------------------------ |
| master ブランチへのプルリクエストを作成           | アプリケーションのテストが走る          | [ci.yml](./.github/workflows/ci.yml) |
| master ブランチへのプルリクエストにコミットを追加 | アプリケーションのテストが走る          | [ci.yml](./.github/workflows/ci.yml) |
| master ブランチへのマージを実施                   | GitHub Pages への自動デプロイが行われる | [cd.yml](./.github/workflows/cd.yml) |

また、プルリクエスト作成時などに走る**テストが成功するまで master ブランチへのマージを原則禁止とする。**
