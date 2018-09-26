export function useHttps(url) {
  if (!url) {
    return url;
  }
  if (url.startsWith('https://')) {
    return url;
  }
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  return `https://${url}`;
}
