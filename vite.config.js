import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        fs: {
            // This allows Vite to access files in your project root 
            // and the static folder correctly.
            allow: ['.']
        }
    }
});