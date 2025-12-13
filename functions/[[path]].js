export async function onRequest(context) {
    try {
        const url = new URL(context.request.url);

        // First, verify if it's an asset or API call
        // Note: In Pages Functions, we usually try to fetch the asset first.
        // context.next() passes the request to the next handler or the static asset.
        let response = await context.next();

        if (response.status === 404 && !url.pathname.startsWith('/api')) {
            // If the static asset is not found (404), and it's not an API, serve index.html (SPA Fallback)
            // modifying the request path to point to root index.html
            const indexRequest = new Request(new URL('/', context.request.url), context.request);
            return context.env.ASSETS.fetch(indexRequest);
        }

        return response;
    } catch (e) {
        return new Response(`Error: ${e.message}`, { status: 500 });
    }
}
