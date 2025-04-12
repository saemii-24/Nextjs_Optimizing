import React, {useState, useEffect} from 'react';
import {delay} from './delay';

const ScrollDiv = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const loadContent = async () => {
			await delay(2000); // 2초 대기
			setIsVisible(true); // 상태 업데이트
		};

		loadContent();
	}, []);

	return (
		<>
			{isVisible ? (
				<div className='center-flex h-[500px] w-full bg-orange-200'>
					뷰포인트에 들어왔습니다!
				</div>
			) : (
				<LoadingSpinner /> // 로딩 스피너 표시
			)}
		</>
	);
};

export default ScrollDiv;

export function LoadingSpinner() {
	return (
		<div className='mt-5 flex h-48 w-full items-center justify-center bg-gray-400'>
			<p>⏳ 로딩 중...</p>
		</div>
	);
}
