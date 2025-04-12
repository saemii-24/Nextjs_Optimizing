'use client';
import {useState} from 'react';
import './Modal.css';
import {cn} from 'utils/cn';
import {flushSync} from 'react-dom';

function Modal({onClose}: {onClose: () => void}) {
	const [isClosing, setIsClosing] = useState<boolean>(false);

	const handleClose = () => {
		setIsClosing(true);
	};

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center bg-black/50 ${
				isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
			}`}
			onAnimationEnd={() => {
				if (isClosing) {
					flushSync(() => onClose()); // 즉시 상태 변경하여 createPortal 제거
				}
			}}>
			<div className='w-96 rounded-lg bg-white p-6 shadow-lg'>
				<p>LazyLoading 모달!</p>
				<button onClick={handleClose} className='mt-4 rounded bg-gray-200 p-2'>
					닫기
				</button>
			</div>
		</div>
	);
}

export default Modal;
