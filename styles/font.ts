import {Noto_Sans_KR, Roboto, Source_Sans_3} from 'next/font/google';
import localFont from 'next/font/local';

// 변수 폰트 정의
const noto = Noto_Sans_KR({
	variable: '--font-noto',
	subsets: ['latin'],
});
const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-roboto',
});
// 특정 weight을 가진 폰트 정의
const sourceCodePro400 = Source_Sans_3({
	weight: '400',
	variable: '--font-source-400',
	subsets: ['latin'],
});
const sourceCodePro700 = Source_Sans_3({
	weight: '700',
	variable: '--font-source-700',
	subsets: ['latin'],
});
// 로컬 폰트 정의
const pretendard = localFont({
	src: '../app/font/Pretendard-Regular.otf',
	weight: '400',
	variable: '--font-pretendard',
});
// 로컬 폰트 정의
const pretendardVariable = localFont({
	src: '../app/font/PretendardVariable.ttf',
	variable: '--font-pretendard--variable',
});

export {
	noto,
	roboto,
	sourceCodePro400,
	sourceCodePro700,
	pretendard,
	pretendardVariable,
};
