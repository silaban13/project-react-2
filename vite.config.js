import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// export default defineConfig({
//   // ... konfigurasi lainnya ...
//   server: {
//     host: '0.0.0.0', // mengaktifkan akses dari ponsel
//   },
// });
//