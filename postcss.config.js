/**
 * PostCSSの設定ファイル
 *
 * 現状は空の設定（{}）だけど、Viteがデフォルトの設定で処理してくれている。
 * このファイルは将来的な設定変更のための「受け皿」として存在している。
 *
 * 設定例：
 * tailwindcss: {
 *   theme: {
 *     extend: {
 *       colors: {
 *         'custom-blue': '#1234ff'
 *       }
 *     }
 *   }
 * }
 *
 * autoprefixer: {
 *   browsers: ['last 2 versions', '> 1%']
 * }
 */

export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};
