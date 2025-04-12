import type {Metadata, ResolvingMetadata} from 'next';

//next 15에서 params 사용 방식 변경 (Promise 사용)
type Props = {
	params: Promise<{id: string}>;
	searchParams: Promise<{[key: string]: string | string[] | undefined}>;
};

//메타데이터 만드는 함수(공식문서 제공)
export async function generateMetadata(
	{params, searchParams}: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const {id} = await params;
	const response = await fetch(`http://localhost:3000/api/metadata?id=${id}`, {
		cache: 'no-store',
	});

	if (!response.ok) {
		return {
			title: '방범대 대원을 찾을 수 없습니다',
			description: '요청하신 대원을 찾을 수 없습니다.',
		};
	}

	const data = await response.json();

	return {
		title: data.name,
		description: data.description,
	};
}

export default async function Page({params}: Props) {
	const {id} = await params;

	const response = await fetch(`http://localhost:3000/api/metadata?id=${id}`, {
		cache: 'no-store',
	});

	if (!response.ok) {
		return (
			<div className='container mx-auto p-4'>
				<h1 className='mb-4 text-2xl font-bold'>캐릭터를 찾을 수 없습니다</h1>
			</div>
		);
	}

	const data = await response.json();

	return (
		<div className='container mx-auto p-4'>
			<h1 className='mb-4 text-2xl font-bold'>{data.name}</h1>
			<p className='text-gray-600'>{data.description}</p>
		</div>
	);
}
