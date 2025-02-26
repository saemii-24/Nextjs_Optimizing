/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/(root)/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				noto: ['var(--font-noto)'],
				roboto: ['var(--font-roboto)'],
				sourceCodePro: ['var(--font-source-400)'],
				sourceCodeProBold: ['var(--font-source-700)'],
				pretendard: ['var(--font-pretendard)'],
				pretendardVariable: ['var(--font-pretendard--variable)'],
			},
		},
	},
	plugins: [],
};
