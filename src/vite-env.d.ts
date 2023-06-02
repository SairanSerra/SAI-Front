/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    VITE_PUBLIC_API_SAI: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
