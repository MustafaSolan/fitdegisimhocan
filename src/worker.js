export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        try {
            // Önce istenen dosyayı (asset) getirmeye çalış
            let response = await env.ASSETS.fetch(request);

            // Eğer dosya bulunamazsa (404) ve istek bir API isteği değilse, index.html döndür (SPA için)
            if (response.status === 404 && !url.pathname.startsWith('/api')) {
                return await env.ASSETS.fetch(new URL('/index.html', request.url));
            }

            return response;
        } catch (e) {
            return new Response('Internal Error', { status: 500 });
        }
    }
};
