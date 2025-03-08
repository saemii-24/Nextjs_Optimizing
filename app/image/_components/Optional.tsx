'use client';
import React from 'react';
import Image from 'next/image';
import Jjanggu from '../../../public/jjanggu.jpg';
import {cn} from 'utils/cn';

const Optional = () => {
	const liclass = 'w-full px-20 pt-12 pb-16 bg-gray-100 rounded-3xl';
	const h1 = 'text-3xl font-bold mb-6';
	const div = 'flex gap-20 items-center';
	const textul = '*:text-xl *:font-medium flex flex-col gap-1';

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
			</ul>
			<ul className='space-y-20 '>
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
			</ul>
		</div>
	);
};

export default Optional;
