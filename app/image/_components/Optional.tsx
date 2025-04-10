'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Jjanggu from '../../../public/jjanggu.jpg';
import Jjanggu2 from '../../../public/jjanggu2.webp';
import {cn} from 'utils/cn';

const Optional = () => {
	const liclass = 'w-full px-20 pt-12 pb-16 bg-gray-100 rounded-3xl';
	const h1 = 'text-3xl font-bold mb-6';
	const div = 'flex gap-20 items-center';
	const textul = '*:text-xl *:font-medium flex flex-col gap-1';

	const [isLoad, setIsLoad] = useState<string>('이미지 로드 중입니다.');
	const [isError, setIsError] = useState<string>('이미지 로드 중입니다.');
	const [isClicked, setIsClicked] = useState<boolean>(false);

	return (
		<div className='container  mx-auto'>
			<h2 className='mb-8 mt-20 text-center text-4xl font-bold'>
				Image Optional Prop
			</h2>
			<ul className='space-y-20 '>
				<li className={liclass}>
					<h1 className={h1}>🖼️ Loader</h1>
					<div className={div}>
						<Image
							loader={({src, width, quality}) => {
								return `http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjjanggu.7be54a9f.jpg&w=640&q=10`;
							}}
							src={Jjanggu}
							alt='짱구 이미지'
						/>
						<ul className={textul}>
							<li>🔹 이미지의 src와 alt만 지정해주면 된다.</li>
						</ul>
					</div>
				</li>
				<li className={liclass}>
					<h1 className={h1}>🖼️ Sizes 이미지 불러오기</h1>
					<div className={cn('', div)}>
						<div className={cn('relative h-[200px] w-[300px]', div)}>
							<Image
								fill
								sizes='(max-width: 300px) 300px, (max-width: 768px) 50vw, 33vw'
								src={Jjanggu}
								alt='짱구 이미지'
								style={{objectFit: 'cover'}} // 또는 'contain'으로 설정 가능
							/>
						</div>
						<ul className={textul}>
							<li>
								🔹 미디어 쿼리처럼, 뷰포트 사이즈에 따라 어떤 사이즈의 이미지를
								가져올지 결정한다.
							</li>
						</ul>
					</div>
				</li>
				<li className={liclass}>
					<h1 className={h1}>🖼️ Quality 조절하기 </h1>
					<div className={cn('', div)}>
						<figure>
							<Image
								sizes='(max-width: 300px) 300px, (max-width: 768px) 50vw, 33vw'
								src={Jjanggu}
								alt='짱구 이미지'
								quality={100}
							/>
							<figcaption>quality: 100</figcaption>
						</figure>
						<figure>
							<Image
								sizes='(max-width: 300px) 300px, (max-width: 768px) 50vw, 33vw'
								src={Jjanggu}
								alt='짱구 이미지'
								quality={1}
							/>
							<figcaption>quality: 1</figcaption>
						</figure>

						<ul className={textul}>
							<li>🔹 1~100 이내의 값으로 퀄리티를 설정해줄 수 있다.</li>
						</ul>
					</div>
				</li>
				<li className={liclass}>
					<h1 className={h1}>🖼️ placeholder 조절하기 </h1>
					<div className={cn('', div)}>
						<Image
							sizes='(max-width: 300px) 300px, (max-width: 768px) 50vw, 33vw'
							src={Jjanggu}
							alt='짱구 이미지'
							placeholder='empty'
						/>
						<Image
							sizes='(max-width: 300px) 300px, (max-width: 768px) 50vw, 33vw'
							src={Jjanggu}
							alt='짱구 이미지'
							placeholder='blur'
						/>

						<ul className={textul}>
							<li>🔹 이미지가 로드되는 동안 사용할 placeholder를 설정한다.</li>
							<li>🔹 empty, blur, data:image/... 등을 설정해줄 수 있다.</li>
						</ul>
					</div>
				</li>
				<li className={liclass}>
					<h1 className={h1}>🖼️ Loading 된 후의 action 설정하기</h1>
					<div className={cn('', div)}>
						<figure>
							<Image
								width={300}
								height={430}
								src={
									'https://cdn.jaturi.kr/news/photo/202312/20546_30694_4036.jpg'
								}
								alt='짱구 이미지'
								onLoad={(e: any) => {
									setIsLoad('로드 완료되었습니다.');
								}}
							/>

							<figcaption>{isLoad}</figcaption>
						</figure>

						<ul className={textul}>
							<li>🔹 이미지가 로드가 완료된 이후 상황을 설정한다.</li>
						</ul>
					</div>
				</li>
				<li className={liclass}>
					<h1 className={h1}>
						🖼️ Loading 시도하였으나 Error 발생했을 때 action 설정하기
					</h1>
					<div className={cn('', div)}>
						<figure>
							<Image
								width={300}
								height={430}
								src={'https://cdn.jaturi.kr/news//202312/20546_30694_4036.jpg'}
								alt='짱구 이미지'
								onError={(e: any) => {
									setIsError('에러가 발생했습니다');
								}}
							/>

							<figcaption>{isError}</figcaption>
						</figure>

						<ul className={textul}>
							<li>
								🔹 이미지가 로드되는 중 에러가 발생할 때의 상황을 설정한다.
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Optional;
