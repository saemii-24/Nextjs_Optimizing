async function getVideoSrc() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return 'https://www.youtube.com/embed/19g66ezsKAg';
}

export default async function VideoComponent() {
	const src = await getVideoSrc();

	return (
		<div className='relative w-full pt-[56.25%]'>
			<iframe
				className='absolute left-0 top-0 size-full rounded-lg'
				src={src}
				title='Video Player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		</div>
	);
}
