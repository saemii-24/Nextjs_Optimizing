export function IframeVideo() {
	return (
		<div className='relative w-full pt-[56.25%]'>
			<iframe
				className='absolute left-0 top-0 size-full'
				src='https://www.youtube.com/embed/19g66ezsKAg'
				title='YouTube video player example'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		</div>
	);
}
