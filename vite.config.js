import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync, createReadStream, existsSync, statSync } from 'node:fs';
import { resolve, normalize } from 'node:path';
const mediaFolders = ['Video', 'Images'];
const root = process.cwd();
function localMedia() {
    return {
        name: 'local-media-folders',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const url = decodeURIComponent(req.url?.split('?')[0] ?? '');
                const folder = mediaFolders.find((name) => url.startsWith(`/${name}/`));
                if (!folder)
                    return next();
                const file = normalize(resolve(root, `.${url}`));
                if (!file.startsWith(resolve(root, folder)) || !existsSync(file) || !statSync(file).isFile())
                    return next();
                createReadStream(file).pipe(res);
            });
        },
        closeBundle() {
            for (const folder of mediaFolders) {
                const source = resolve(root, folder);
                if (existsSync(source))
                    cpSync(source, resolve(root, 'dist', folder), { recursive: true });
            }
        },
    };
}
export default defineConfig({
    plugins: [react(), localMedia()],
    server: { open: true },
});
