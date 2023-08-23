export interface Env {
	MY_BUCKET: R2Bucket;
	AUTH_KEY_SECRET: string;
}

export default {
	async fetch(request: Request, env: Env) {
		const url = new URL(request.url);
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
			'Access-Control-Max-Age': '86400',
		};

		switch (request.method) {
			case 'GET':
				const category = url.searchParams.get('category') ?? '';
				const options: R2ListOptions = {
					prefix: category !== '' ? category : undefined,
				};
				const listed = await env.MY_BUCKET.list(options);

				const keys = listed.objects.map((object: R2Object) => object.key.replace(`${category}/`, ''));
				return new Response(JSON.stringify(keys), {
					headers: {
						...corsHeaders,
						'content-type': 'application/json; charset=UTF-8',
					},
				});
			default:
				return new Response(`${request.method} is not allowed.`, {
					status: 405,
					headers: {
						Allow: 'PUT',
					},
				});
		}
	},
};
