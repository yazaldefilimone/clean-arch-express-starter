export class NotFoundError extends Error {
	constructor({ param }: { param: string }) {
		super(`this [${param}] was not found.`);
		this.name = 'NotFoundError';
	}
}
