import {Suspense} from 'react';
import VideoComponent from './VideoComponent';
import VideoSkeleton from './VideoSkeleton';

export default function ServerVideo() {
	// 서스펜스 사용을 위해 servercomponent를 사용해야 한다!
	return (
		<div className='rounded-lg bg-gray-50 p-4'>
			<Suspense fallback={<VideoSkeleton />}>
				<VideoComponent />
			</Suspense>
		</div>
	);
}
