export type Dictionary <T = any> = Record<string, T>;

export type Snippet = {
	prefix: string,
	body: string[],
	description?: string,
};