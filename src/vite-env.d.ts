/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SENTRY_DSN: string
  // add more env variables types here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
