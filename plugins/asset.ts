// 讓 public/ 底下的檔案在子路徑部署（例如 GitHub Pages 的 /repo-name/）也找得到
export default defineNuxtPlugin(() => {
  const base = useRuntimeConfig().app.baseURL || '/'
  return { provide: { asset: (p: string) => base.replace(/\/$/, '') + '/' + p.replace(/^\//, '') } }
})
