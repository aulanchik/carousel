const checkUrl = (url: string) => {
  return url.startsWith("//") ? `https:${url}` : url;
};

export default checkUrl;
