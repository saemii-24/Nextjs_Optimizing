import {NextResponse} from 'next/server';

export async function POST(request: Request) {
	const metric = await request.json();

	// 메트릭 로그 또는 데이터베이스에 저장
	console.log('Received metric:', metric);

	return NextResponse.json({message: 'Metric received'}, {status: 200});
}
