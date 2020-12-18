import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const production = !process.env.ROLLUP_WATCH

export default {
    input: 'src/main.ts',
    output: {
        dir: './dist',
        entryFileNames: 'bundle.js',
        format: 'iife',
        name: '$app',
        sourcemap: true,
    },
    plugins: [
        replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        resolve({ dedupe: ['react', 'react-dom'] }),
        commonjs({ include: /node_modules/ }),
        typescript({ sourceMap: true }),
        babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
        postcss({
            config: { path: './postcss.config.js' },
            extensions: ['.css', '.pcss'],
            extract: true,
            minimize: true,
            modules: false,
            sourceMap: false,
        }),
        production && terser(),
        production && del({ targets: ['dist/*'] }),
    ],
}
