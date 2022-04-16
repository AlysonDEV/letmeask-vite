# letmeask-vite
Projeto NLW Together Rocketseat realizado em ViteJS

## Comandos adcionados no projeto (mapa mental)

- Adicionar o firebase no projeto: `yarn add firebase`
- Adcionar o plugin vite-plugin-ambiente: `yarn add -D vite-plugin-environment` (para ler informações do .env.local)
```ts
// Configuração do arquivo vite.config.js
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin('all', { prefix: 'VITE_'}) //definindo o prefixo
  ]
})
```