import {NextResponse} from 'next/server';

const characters = {
	'1': {name: '신짱구', id: '1'},
	'2': {name: '김철수', id: '2'},
	'3': {name: '이훈이', id: '3'},
	'4': {name: '한유리', id: '4'},
	'5': {name: '맹구', id: '5'},
};

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url);
	const id = searchParams.get('id');

	if (!id || !characters[id as keyof typeof characters]) {
		return NextResponse.json({error: 'Character not found'}, {status: 404});
	}

	const character = characters[id as keyof typeof characters];

	return NextResponse.json({
		name: character.name,
		description: `${character.name} 대원의 페이지입니다 (F12로 확인)`,
	});
}
