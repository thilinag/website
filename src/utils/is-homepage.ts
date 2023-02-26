export function isHomepage(url: string) {
  const pathname = new URL(url).pathname;
  const currentPath = pathname.slice(1);
  return currentPath === "";
}
