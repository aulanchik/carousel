const checkUrl = (url: string) => (url.startsWith("//") ? `https:${url}` : url);

export default checkUrl;
