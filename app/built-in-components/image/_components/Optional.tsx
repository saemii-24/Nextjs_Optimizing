'use client';
import Image from 'next/image';
import {useState} from 'react';
import Jjanggu from '../../../../public/jjanggu.jpg';

const Optional = () => {
	const [isLoad, setIsLoad] = useState<string>('이미지 로드 중');
	const [isError, setIsError] = useState<string>('이미지 로드 중');

	return (
		<div className='mx-auto max-w-6xl'>
			<div className='w-full bg-white py-8'>
				<div className='mx-auto max-w-6xl px-8'>
					<h2 className='text-4xl font-bold'>Image Optional Props</h2>
				</div>
			</div>

			<div className='p-8'>
				<section className='space-y-12'>
					{/* Loader 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>Loader 설정하기</h2>
						<p className='mb-4 text-gray-600'>
							이미지 로더를 커스터마이징하여 이미지 로딩 방식을 제어할 수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<Image
								loader={({src, width, quality}) => {
									return `http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjjanggu.7be54a9f.jpg&w=640&q=10`;
								}}
								src={Jjanggu}
								alt='짱구 이미지'
							/>
						</div>
					</div>

					{/* Sizes 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>Sizes 설정하기</h2>
						<p className='mb-4 text-gray-600'>
							미디어 쿼리처럼 뷰포트 사이즈에 따라 이미지 크기를 동적으로 조절할
							수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<div className='relative h-[200px] w-[300px]'>
								<Image
									fill
									sizes='(max-width: 300px) 300px, (max-width: 768px) 50vw, 33vw'
									src={Jjanggu}
									alt='짱구 이미지'
									style={{objectFit: 'cover'}}
								/>
							</div>
						</div>
					</div>

					{/* Quality 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>Quality 설정하기</h2>
						<p className='mb-4 text-gray-600'>
							이미지의 품질을 1부터 100까지 조절하여 최적의 성능과 품질을 선택할
							수 있다.
						</p>
						<div className='space-y-4 rounded-lg bg-gray-50 p-4'>
							<div>
								<figure className='text-center'>
									<Image src={Jjanggu} alt='짱구 이미지' quality={100} />
									<figcaption className='mt-2 text-gray-600'>
										quality: 100
									</figcaption>
								</figure>
							</div>
							<div>
								<figure className='text-center'>
									<Image src={Jjanggu} alt='짱구 이미지' quality={1} />
									<figcaption className='mt-2 text-gray-600'>
										quality: 1
									</figcaption>
								</figure>
							</div>
						</div>
					</div>

					{/* Placeholder 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>
							Placeholder 설정하기
						</h2>
						<p className='mb-4 text-gray-600'>
							이미지 로딩 중에 표시될 플레이스홀더를 설정하여 사용자 경험을
							개선할 수 있다.
						</p>
						<div className='flex gap-4 rounded-lg bg-gray-50 p-4'>
							<div>
								<Image
									src={Jjanggu}
									alt='짱구 이미지'
									placeholder='empty'
									width={300}
									height={300}
								/>
								<p className='mt-2 text-center text-gray-600'>
									placeholder: empty
								</p>
							</div>
							<div>
								<Image
									src={Jjanggu}
									alt='짱구 이미지'
									placeholder='blur'
									width={300}
									height={300}
								/>
								<p className='mt-2 text-center text-gray-600'>
									placeholder: blur
								</p>
							</div>
						</div>
					</div>

					{/* onLoad 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>onLoad 이벤트 처리</h2>
						<p className='mb-4 text-gray-600'>
							이미지 로딩이 완료된 후 실행될 동작을 정의할 수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<figure className='text-center'>
								<Image
									width={300}
									height={430}
									src={
										'https://cdn.jaturi.kr/news/photo/202312/20546_30694_4036.jpg'
									}
									alt='짱구 이미지'
									onLoad={() => setIsLoad('로드 완료')}
								/>
								<figcaption className='mt-2 text-gray-600'>{isLoad}</figcaption>
							</figure>
						</div>
					</div>

					{/* onError 예제 */}
					<div className='rounded-lg bg-white p-6'>
						<h2 className='mb-6 text-2xl font-semibold'>onError 이벤트 처리</h2>
						<p className='mb-4 text-gray-600'>
							이미지 로딩 중 에러가 발생했을 때의 처리를 정의할 수 있다.
						</p>
						<div className='rounded-lg bg-gray-50 p-4'>
							<figure className='text-center'>
								<Image
									width={300}
									height={430}
									src={
										'https://cdn.jaturi.kr/news//202312/20546_30694_4036.jpg'
									}
									alt='짱구 이미지'
									onError={() => setIsError('에러가 발생했다')}
								/>
								<figcaption className='mt-2 text-gray-600'>
									{isError}
								</figcaption>
							</figure>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Optional;
