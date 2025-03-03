import './globals.css';
import Provider from './Provider';
import Header from '@/components/Header';
import {
	noto,
	roboto,
	sourceCodePro400,
	sourceCodePro700,
	pretendard,
	pretendardVariable,
} from '@/styles/font';
import {WebVitals} from './_components/web-vitals';

// const noto = Noto_Sans_KR({
// 	weight: ['400', '700'],
// 	subsets: ['latin'],
// 	display: 'swap',
// });

// const roboto = Roboto({
// 	weight: ['400', '700'], //혹은 '400'과 같이 하나의 weight만 특정해서 적을 수 있음
// 	style: ['normal', 'italic'],
// 	subsets: ['latin'],
// 	display: 'swap',
// });
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang='ko'
			className={`${noto.variable} ${roboto.variable} ${sourceCodePro400.variable} ${sourceCodePro700.variable} ${pretendard.variable} ${pretendardVariable.variable}`}>
			<body>
				<WebVitals />
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
