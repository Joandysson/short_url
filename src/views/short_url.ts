import ShortUrl from "@models/ShortUrl";

export function renderShortUrl(shortUrl: ShortUrl) {
    return {
        newUrl: shortUrl.url
    }
}