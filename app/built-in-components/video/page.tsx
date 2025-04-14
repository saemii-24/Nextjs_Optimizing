'use client';

import {IframeVideo} from 'app/components/IframeVideo';
import ServerVideo from 'app/components/ServerVideo';
import {Video} from 'app/components/Video';

export default function VideoPage() {
	return (
		<div className='mx-auto max-w-6xl p-8'>
			<h1 className='mb-8 text-4xl font-bold'>비디오 최적화</h1>

			<section className='space-y-12'>
				{/* HTML5 비디오 예제 */}
				<div className='rounded-lg bg-white p-6'>
					<h2 className='mb-6 text-2xl font-semibold'>
						{'<video>'} 태그 사용하기
					</h2>
					<p className='mb-4 text-gray-600'>
						HTML {'<video>'} 태그는 자체 호스팅 또는 직접 서비스되는 비디오
						콘텐츠를 삽입할 수 있어 재생 및 모양을 제어할 수 있다.
					</p>
					<div className='rounded-lg bg-gray-50 p-4'>
						<Video />
					</div>
				</div>

				{/* Iframe 비디오 예제 */}
				<div className='rounded-lg bg-white p-6'>
					<h2 className='mb-6 text-2xl font-semibold'>
						외부 비디오를 위한 {'<iframe>'} 사용하기
					</h2>
					<p className='mb-4 text-gray-600'>
						HTML {'<iframe>'} 태그를 사용하면 YouTube 또는 Vimeo와 같은 외부
						플랫폼의 동영상을 삽입할 수 있다.
					</p>
					<div className='rounded-lg bg-gray-50 p-4'>
						<IframeVideo />
					</div>
				</div>

				{/* 서버 컴포넌트 비디오 예제 */}
				<div className='rounded-lg bg-white p-6'>
					<h2 className='mb-6 text-2xl font-semibold'>
						서버 컴포넌트와 Suspense 활용하기
					</h2>
					<p className='mb-4 text-gray-600'>
						동영상을 삽입할 서버 컴포넌트를 만들고, React Suspense를 활용할 수
						있다. 이는 페이지가 blocking 되는 것을 방지하므로 더 나은 사용자
						경험을 제공할 수 있다.
					</p>
					{/* Suspense 사용 컴포넌트 */}
					<ServerVideo />
				</div>
			</section>
		</div>
	);
}
