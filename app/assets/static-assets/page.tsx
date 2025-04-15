'use client';

function LongJjanggu() {
	return (
		<img
			src={`/long/jjanggu_static_asset.jpg`}
			alt={'long-cache'}
			width='1280'
			height='720'
		/>
	);
}
function ShortJjanggu() {
	return (
		<img
			src={`/short/jjanggu_static_asset.jpg`}
			alt={'long-cache'}
			width='1280'
			height='720'
		/>
	);
}

export default function StaticPage() {
	return (
		<div className='mx-auto max-w-6xl p-8'>
			<h1 className='mb-8 text-4xl font-bold'>Static Assets in `public`</h1>

			<section className='space-y-12'>
				{/* Static file 사용해보기 */}
				<div className='rounded-lg bg-white p-6'>
					<h2 className='mb-6 text-2xl font-semibold'>
						public 폴더 안의 Static 파일 접근하기
					</h2>
					<p className='mb-4 text-gray-600'>
						Next.js는 이미지와 같은 Static File을 root dir의 public폴더 아래에
						제공할 수 있으며, / 에서 시작하는 경로를 통해 접근할 수 있다.
					</p>
					<div className='rounded-lg bg-gray-50 p-4'>
						<LongJjanggu />
					</div>
				</div>

				{/* Iframe 비디오 예제 */}
				<div className='rounded-lg bg-white p-6'>
					<h2 className='mb-6 text-2xl font-semibold'>Caching</h2>
					<p className='mb-4 text-gray-600'>
						Next.js는 변경될 수 있어 Public 폴더의 assets를 안전하게 캐시할 수
						없다.
					</p>
					<h3 className='mb-4 mt-6 text-xl font-semibold'>Caching Long Time</h3>
					<p className='mb-4 text-gray-600'>cache 시간을 늘린 경우</p>
					<div className='rounded-lg bg-gray-50 p-4'>
						<LongJjanggu />
					</div>
					<h3 className='mb-4 mt-6 text-xl font-semibold'>
						Caching Default Time
					</h3>
					<p className='mb-4 text-gray-600'>
						(default) 항상 새로운 내용을 요청하는 경우
					</p>
					<div className='rounded-lg bg-gray-50 p-4'>
						<ShortJjanggu />
					</div>
				</div>
			</section>
		</div>
	);
}
