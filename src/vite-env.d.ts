export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/sendflow-pro/" : "/",
  // 나머지 동일
  /// <reference types="vite/client" />
}));
