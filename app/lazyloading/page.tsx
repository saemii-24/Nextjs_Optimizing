'use client';

import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {createPortal} from 'react-dom';
import ScrollDiv, {LoadingSpinner} from './_components/ScrollDiv';
import {useInView} from 'react-intersection-observer';
// 클라이언트 컴포넌트:
const First = dynamic(() => import('./_components/First')); // 즉시 로드
const Second = dynamic(() => import('./_components/Second')); // 조건부 로드
const Third = dynamic(() => import('./_components/Third'), {ssr: false}); // 클라이언트 전용 로드
const Modal = dynamic(() => import('./_components/Modal'), {ssr: false});
// const ScrollDiv = dynamic(() => import('./_components/ScrollDiv'), {
// 	loading: () => <LoadingSpinner />,
// 	ssr: false,
// });

export default function LazyLoading() {
	const [showMore, setShowMore] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const {ref, inView} = useInView({threshold: 1});

	return (
		<div>
			{/* 즉시 로드되지만 별도의 클라이언트 번들로 포함됨 */}
			<First />

			{/* 조건이 충족될 때만 로드됨 */}
			{showMore && <Second />}
			<div className='center-flex w-full'>
				<button
					onClick={() => setShowMore(!showMore)}
					className='cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-500/70'>
					Toggle
				</button>
			</div>

			{/* 클라이언트에서만 로드됨 */}
			<Third />

			{/* 조건이 충족될 때 모달이 로드됨 */}
			<div className='center-flex w-full'>
				<button
					onClick={() => setShowModal(true)}
					className='cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-500/70'>
					모달 열기
				</button>
				{showModal &&
					createPortal(
						<Modal onClose={() => setShowModal(false)} />,
						document.body,
					)}
			</div>

			{/* 사용자 뷰포인트에 들어왔을 때 로딩 */}

			{/* <div
				ref={ref}
				className='mt-10 flex h-10 w-full items-center justify-center bg-blue-300'>
				<p>이 영역이 화면에 보이면 동적 로딩!</p>
			</div>
			{inView && <ScrollDiv />} */}
			<ScrollDiv />
		</div>
	);
}
