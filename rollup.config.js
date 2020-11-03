import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import {terser} from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/main.ts',
	output: {
		file: 'public/bundle.js',
		format: 'cjs',
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs(),
		postcss({
			config: {path: './postcss.config.js'},
			extensions: ['.pcss'],
			extract: true,
			minimize: production,
		}),
		typescript(),
		production && terser(),
	]
}
