export function Video() {
	return (
		<video width='250' controls>
			<source src='/videos/dog.webm' type='video/webm' />
			<source src='/videos/dog.mp4' type='video/mp4' />
			<track
				src='/videos/dog.vtt'
				kind='subtitles'
				srcLang='ko'
				label='Korean'
			/>
			Your browser does not support the video tag.
			<a href='/videos/dog.webm'>WEBM</a>
			or
			<a href='/videos/dog.mp4'>MP4</a>
		</video>
	);
}
