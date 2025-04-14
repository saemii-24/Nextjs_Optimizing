export default function VideoSkeleton() {
	return (
		<div className='relative w-full pt-[56.25%]'>
			<div className='absolute left-0 top-0 size-full rounded-lg bg-gray-200'>
				<div className='flex h-full flex-col items-center justify-center'>
					<div className='size-12 animate-pulse rounded-full bg-gray-300' />
					<div className='mt-4 h-4 w-32 animate-pulse rounded bg-gray-300' />
				</div>
			</div>
		</div>
	);
}
