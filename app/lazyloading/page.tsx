// app/page.js

'use client';

import {useState} from 'react';
import dynamic from 'next/dynamic';

// 클라이언트 컴포넌트:
const First = dynamic(() => import('./_components/First')); // 즉시 로드
const Second = dynamic(() => import('./_components/Second')); // 조건부 로드
const Third = dynamic(() => import('./_components/Third'), {ssr: false}); // 클라이언트 전용 로드

export default function LazyLoading() {
	const [showMore, setShowMore] = useState<boolean>(false);

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
		</div>
	);
}
