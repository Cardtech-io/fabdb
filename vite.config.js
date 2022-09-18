import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        basicSsl(),
        laravel([
            'resources/js/app.js',
        ]),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources'),
        },
    },
    server: {
        https: true,
        host: 'localhost',
    },
});
