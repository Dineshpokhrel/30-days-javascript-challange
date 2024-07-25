import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './main.js',
    output: {
        filename: 'bundledScript.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};
