module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.jaturi.kr',
				port: '',
				pathname: '/**',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'i.namu.wiki',
				port: '',
				pathname: '/**',
				search: '',
			},
		],
	},
	//cache 시도
	async headers() {
		return [
			{
				source: '/long/((?!exclude).*)', // public/long/ 경로 (exclude는 제외함)
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000', // 1년간 캐시 (1년: 365일 × 24시간 × 60분 × 60초 = 31,536,000초)
					},
				],
			},
			{
				source: '/short/((?!exclude).*)', // public/short/ 경로  (exclude는 제외함)
				headers: [
					{
						key: 'Cache-Control',
						value: 'no-cache', // 항상 최신 버전 요청
					},
				],
			},
		];
	},
};
