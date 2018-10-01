export function addQueryParams(url, params) {
  const query = Object
    .keys(params)
    .reduce((acc, curr) => {
      return acc.concat(`${curr}=${encodeURIComponent(params[curr])}`);
    }, [])
    .join('&');
  if (url.indexOf('?') !== -1) {
    return `${url}&${query}`;
  }
  return `${url}?${query}`;
}
