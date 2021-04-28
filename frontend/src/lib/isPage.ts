export const isPage = (page: string) => {
  // Get the location of the current page in the page URL
  if (
    window.location.href.substring(
      window.location.href.lastIndexOf('/') + 1
    ) === page
  ) {
    return true
  }
  return false
}
