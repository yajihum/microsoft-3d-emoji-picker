export interface Env {
	MY_BUCKET: R2Bucket;
	AUTH_KEY_SECRET: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const url = new URL(request.url);
		const corsHeaders = {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Max-Age": "86400",
		};

		switch (request.method) {
			case "GET": {
				const cacheKey = new Request(url.toString(), request);
				const cache = caches.default;
				const cachedRes = await cache.match(cacheKey);

				if (cachedRes) return cachedRes;

				const category = url.searchParams.get("category") ?? "";
				const options: R2ListOptions = {
					prefix: category !== "" ? category : undefined,
				};
				const listed = await env.MY_BUCKET.list(options);
				const keys = listed.objects.map((object: R2Object) =>
					object.key.replace(`${category}/`, ""),
				);

				const res = new Response(JSON.stringify(keys), {
					headers: {
						...corsHeaders,
						"Content-Type": "application/json; charset=UTF-8",
						"Cache-Control": "public, s-maxage=1209600",
					},
				});
				ctx.waitUntil(cache.put(cacheKey, res.clone()));
				return res;
			}
			default:
				return new Response(`${request.method} is not allowed.`, {
					status: 405,
					headers: {
						Allow: "PUT",
					},
				});
		}
	},
};
