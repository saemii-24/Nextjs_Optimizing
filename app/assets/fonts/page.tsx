'use client';

import {
	noto,
	pretendard,
	pretendardVariable,
	roboto,
	sourceCodePro400,
	sourceCodePro700,
} from '@/styles/font';

export default function FontsExample() {
	return (
		<div className='mx-auto max-w-6xl p-8'>
			<h1 className={`mb-8 text-4xl font-bold ${pretendardVariable.className}`}>
				Next.js에서의 폰트 최적화
			</h1>

			<section className='space-y-12'>
				{/* 폰트 예시 */}
				<div className=' rounded-lg bg-white'>
					<h2 className='mb-6 text-2xl font-semibold text-gray-800'>
						다양한 폰트 적용 예시
					</h2>
					<div className='grid gap-6'>
						<div className='space-y-2'>
							<h3 className='text-sm font-medium text-gray-500'>
								Pretendard Variable
							</h3>
							<p className={`text-xl ${pretendardVariable.className}`}>
								안녕하세요! 프리텐다드 베리어블 폰트입니다.
								<br />
								Hello! This is Pretendard Variable font.
							</p>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-medium text-gray-500'>
								Pretendard Regular
							</h3>
							<p className={`text-xl ${pretendard.className}`}>
								안녕하세요! 프리텐다드 레귤러 폰트입니다.
								<br />
								Hello! This is Pretendard Regular font.
							</p>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-medium text-gray-500'>
								Noto Sans Korean
							</h3>
							<p className={`text-xl ${noto.className}`}>
								안녕하세요! 노토 산스 한글 폰트입니다.
								<br />
								Hello! This is Noto Sans Korean font.
							</p>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-medium text-gray-500'>Roboto</h3>
							<p className={`text-xl ${roboto.className}`}>
								안녕하세요! 로보토 폰트입니다.
								<br />
								Hello! This is Roboto font.
							</p>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-medium text-gray-500'>
								Source Code Pro (400)
							</h3>
							<p className={`text-xl ${sourceCodePro400.className}`}>
								안녕하세요! 소스 코드 프로 레귤러 폰트입니다.
								<br />
								Hello! This is Source Code Pro 400 font.
							</p>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-medium text-gray-500'>
								Source Code Pro (700)
							</h3>
							<p className={`text-xl ${sourceCodePro700.className}`}>
								안녕하세요! 소스 코드 프로 볼드 폰트입니다.
								<br />
								Hello! This is Source Code Pro 700 font.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
