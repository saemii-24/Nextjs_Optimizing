const webVitalsContent = [
	{
		title: 'FCP',
		content:
			'사용자가 페이지 요청 후, 브라우저가 첫 번째 콘텐츠를 화면에 렌더링하는 데 걸리는 시간.',
	},
	{
		title: 'LCP',
		content: '페이지의 가장 큰 콘텐츠 요소가 화면에 렌더링되는 데 걸리는 시간.',
	},
	{
		title: 'FID',
		content:
			'사용자가 페이지에서 처음으로 상호작용을 시도할 때, 브라우저가 해당 이벤트에 반응하기까지 걸리는 시간.',
	},
	{
		title: 'CLS',
		content:
			'페이지의 요소들이 로드 중에 얼마나 많이 이동하는지를 측정하는 지표.',
	},
	{
		title: 'TTFB',
		content:
			'클라이언트가 요청한 후, 서버가 첫 번째 바이트를 클라이언트에 보내기까지 걸리는 시간.',
	},
	{
		title: 'INP',
		content:
			'사용자가 상호작용한 후, 다음 프레임이 화면에 렌더링되기까지 걸리는 시간.',
	},
];

export default function WebVitals() {
	return (
		<>
			<div className='grid grid-cols-3 gap-4'>
				{webVitalsContent.map((item, index) => {
					return (
						<div key={index} className='rounded border p-4'>
							<h2 className='text-lg font-bold'>{item.title}</h2>
							<p>{item.content}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}
