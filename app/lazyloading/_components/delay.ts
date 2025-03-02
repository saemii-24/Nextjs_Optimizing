export function delay(promise: Promise<any>, delay: number) {
	return new Promise((resolve) => setTimeout(() => resolve(promise), delay));
}
