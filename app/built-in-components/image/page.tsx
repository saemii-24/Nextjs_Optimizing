import Image from 'next/image';
import Jjanggu from '../../../public/jjanggu.jpg';
import Optional from './_components/Optional';

export default function ImagePage() {
	return (
		<div>
			<div className='mx-auto max-w-6xl p-8'>
				<h1 className='mb-8 text-4xl font-bold'>이미지 최적화</h1>

				<section className='space-y-12'>
					{/* Local 이미지 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>
							Local 이미지 불러오기
						</h2>
						<p className='mb-4 text-gray-600'>
							Next.js의 Image 컴포넌트를 사용하여 로컬 이미지를 최적화하여
							표시할 수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<Image src={Jjanggu} alt='짱구 이미지' />
						</div>
					</div>

					{/* Remote 이미지 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>
							Remote 이미지 불러오기
						</h2>
						<p className='mb-4 text-gray-600'>
							외부 URL의 이미지를 불러올 때는 width와 height를 지정하고,
							next.config.js에 remotePatterns를 설정해야 한다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<Image
								src={
									'https://cdn.jaturi.kr/news/photo/202312/20546_30694_4036.jpg'
								}
								alt='짱구 이미지'
								width={300}
								height={430}
							/>
						</div>
					</div>

					{/* Priority 설정 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>Priority 설정하기</h2>
						<p className='mb-4 text-gray-600'>
							LCP(Largest Contentful Paint) 최적화를 위해 priority 속성을 설정할
							수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<Image src={Jjanggu} alt='짱구 이미지' priority />
						</div>
					</div>

					{/* Responsive 설정 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>Responsive 설정하기</h2>
						<p className='mb-4 text-gray-600'>
							반응형 이미지를 구현하기 위해 sizes와 style 속성을 활용할 수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<div className='flex gap-4'>
								<div className='w-[200px]'>
									<Image
										src={Jjanggu}
										alt='짱구 이미지'
										priority
										sizes='100vw'
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
								<div className='w-[100px]'>
									<Image
										src={Jjanggu}
										alt='짱구 이미지'
										priority
										sizes='100vw'
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Container 채우기 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>Container 채우기</h2>
						<p className='mb-4 text-gray-600'>
							fill 속성을 사용하여 이미지를 컨테이너에 맞게 채울 수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<div
								style={{
									display: 'grid',
									gridGap: '8px',
									gridTemplateColumns: 'repeat(2, 1fr)',
								}}>
								{new Array(6).fill(0).map((_, index) => (
									<div
										key={index}
										style={{
											position: 'relative',
											width: '100px',
											height: '100px',
										}}>
										<Image
											src={Jjanggu}
											alt='짱구 이미지'
											fill
											sizes='(min-width: 808px) 50vw, 100vw'
											style={{
												objectFit: 'cover',
											}}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
			<Optional />
		</div>
	);
}
