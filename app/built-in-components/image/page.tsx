import Image from 'next/image';
import Jjanggu from '../../../public/jjanggu.jpg'

import Optional from './_components/Optional';
export default function ImagePage() {
	const liclass = 'w-full px-20 pt-12 pb-16 bg-gray-100 rounded-3xl';
	const h1 = 'text-3xl font-bold mb-6';
	const div = 'flex gap-20 items-center';
	const textul = '*:text-xl *:font-medium flex flex-col gap-1';
	return (
		<>
			<div className='container  mx-auto'>
				<ul className='space-y-20 '>
					<li className={liclass}>
						<h1 className={h1}>🖼️ Local 이미지 불러오기</h1>
						<div className={div}>
							<Image src={Jjanggu} alt='짱구 이미지' />
							<ul className={textul}>
								<li>🔹 이미지의 src와 alt만 지정해주면 된다.</li>
							</ul>
						</div>
					</li>
					<li className={liclass}>
						<h1 className={h1}>🖼️ Remote 이미지 불러오기</h1>
						<div className={div}>
							<Image
								src={
									'https://cdn.jaturi.kr/news/photo/202312/20546_30694_4036.jpg'
								}
								alt='짱구 이미지'
								width={300}
								height={430}
							/>
							<ul className={textul}>
								<li>🔹 width와 height를 지정해준다.</li>
								<li>🔹 next.config.js에 remotePatterns를 작성한다.</li>
							</ul>
						</div>
					</li>
					<li className={liclass}>
						<h1 className={h1}>🖼️ Priority 설정하기</h1>
						<div className={div}>
							<Image src={Jjanggu} alt='짱구 이미지' priority />
							<ul className={textul}>
								<li>🔹 LCP 우선순위를 설정해준다. (이미지 미리 로드)</li>
							</ul>
						</div>
					</li>
					<li className={liclass}>
						<h1 className={h1}>🖼️ responsive 설정하기</h1>
						<div className={div}>
							<div className='flex gap-4'>
								<div className=' w-[200px]'>
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

							<ul className={textul}>
								<li>
									🔹 sizes를 설정하고 style에 직접 width와 height를 준다. auto를
									사용해서 한 쪽에 맞추는 것도 가능
								</li>
							</ul>
						</div>
					</li>
					<li className={liclass}>
						<h1 className={h1}>🖼️ container 채우기</h1>
						<div className={div}>
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
										{/* 높이를 조정 */}
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
							<ul className={textul}>
								<li>🔹 fill을 이용해 주어진 grid 칸에 딱 맞게 설정해주었다.</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<Optional />
		</>
	);
}
