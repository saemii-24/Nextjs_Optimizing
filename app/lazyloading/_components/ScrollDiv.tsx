import React, {useState, useEffect} from 'react';

export function delay<T>(promise: Promise<T>, delay: number): Promise<T> {
	return new Promise((resolve) => setTimeout(() => resolve(promise), delay));
}

const ScrollDiv = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = delay(Promise.resolve(), 2000);
		timer.then(() => setIsVisible(true));
	}, []);

	return (
		isVisible && (
			<div className='center-flex h-[500px] w-full bg-orange-200'>
				뷰포인트에 들어왔습니다!
			</div>
		)
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
