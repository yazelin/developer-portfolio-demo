# 林亞澤的作品集（developer-portfolio-demo）

本站改自 Álex Rueda（[@alexdeploy](https://github.com/alexdeploy)）的開源作品 [developer-portfolio-v2](https://github.com/alexdeploy/developer-portfolio-v2)，原始設計是 [@darelova](https://www.behance.net/darelova) 的 Portfolio for Developers Concept V.2。原作採 MIT 授權，授權檔 [LICENSE](./LICENSE) 原樣保留。

網址（部署後）：https://yazelin.github.io/developer-portfolio-demo/

## 改了什麼

- 內容換成林亞澤的資料：自我介紹、經歷、9 個作品、13 個小工具、4 個角色、週三直播場次、社群連結，全部改成正體中文。
- 原作者的名字、社群連結、示範作品圖、分享圖、PWA 圖示、GitHub gist 展示都拿掉了。
- 聯絡頁原本是一個不會送出的表單，改成直接列連結。
- 可以部署到 GitHub Pages 子路徑（`public/` 的圖都經過 `plugins/asset.ts` 加上 base 路徑）。

## 內容寫在哪

幾乎所有文字都在 [`developer.json`](./developer.json)：名字、職稱、關於我的各段落、連結、作品、小工具、直播場次。網站標題與分享資訊在 [`nuxt.config.ts`](./nuxt.config.ts)，作品縮圖在 `public/images/projects/`，分享圖是 `public/og.jpg`。

## 本機開發

需要 Node.js 18 以上與 yarn（`corepack enable` 就有）。

```sh
yarn install
yarn dev            # 開發模式，http://localhost:3000/
yarn generate       # 產生靜態檔到 .output/public/
npx serve .output/public   # 預覽建好的靜態站
```

## 部署到 GitHub Pages

`.github/workflows/pages.yml` 會在推上 `main` 時自動建置並部署。第一次要到 repo 的 Settings → Pages，把 Source 設成「GitHub Actions」。

子路徑由 workflow 裡的 `NUXT_APP_BASE_URL` 決定，預設用 repo 名稱（`/developer-portfolio-demo/`）。如果 repo 改名，不用改設定。

## 授權

MIT，見 [LICENSE](./LICENSE)。原作版權屬 Álex Rueda；本站內容（文字、作品圖）屬林亞澤。
