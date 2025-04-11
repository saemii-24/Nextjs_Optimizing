import Link from 'next/link';

export default function MetadataPage() {
	const characters = [
		{id: '1', name: '신짱구'},
		{id: '2', name: '김철수'},
		{id: '3', name: '이훈이'},
		{id: '4', name: '한유리'},
		{id: '5', name: '맹구'},
	];

	//SEO 최적화
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: '떡잎마을 방범대',
		description: '우리는 떡잎마을 방범대!',
		member: characters.map((c) => ({
			'@type': 'Person',
			name: c.name,
			url: `https://your-domain.com/metadata/${c.id}`,
		})),
	};

	return (
		<div className='container mx-auto p-4'>
			{/* 구조화 데이터 삽입 */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
			/>

			<h1 className='mb-4 text-2xl font-bold'>떡잎마을 방범대</h1>
			<p className='mb-6 text-gray-600'>
				떡잎마을 방범대의 메타데이터를 확인해보세요
			</p>
			<div className='grid gap-4'>
				{characters.map((character) => (
					<Link
						key={character.id}
						href={`/metadata/${character.id}`}
						className='rounded-lg border p-4 hover:bg-gray-50'>
						<h2 className='text-xl font-semibold'>{character.name}</h2>
						<p className='text-gray-600'>
							떡잎마을 방범대 {character.name} 대원의 메타데이터 확인
						</p>
					</Link>
				))}
			</div>
		</div>
	);
}
