export default function getUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}
