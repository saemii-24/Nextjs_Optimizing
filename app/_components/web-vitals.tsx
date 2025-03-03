'use client';

import {useReportWebVitals} from 'next/web-vitals';

export function WebVitals() {
	useReportWebVitals((metric) => {
		switch (metric.name) {
			case 'FCP': {
				console.log('First Contentful Paint:', metric);
				break;
			}
			case 'LCP': {
				console.log('Largest Contentful Paint:', metric);
				break;
			}
			case 'FID': {
				console.log('First Input Delay:', metric);
				break;
			}
			case 'CLS': {
				console.log('Cumulative Layout Shift:', metric);
				break;
			}
			case 'TTFB': {
				console.log('Time to First Byte:', metric);
				break;
			}
			case 'INP': {
				console.log('Interaction to Next Paint:', metric);
				break;
			}
		}
	});

	return null;
}
