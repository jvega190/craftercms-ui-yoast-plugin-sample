document.addEventListener("DOMContentLoaded", function() {

  const getSEOData = () => {
    const title = document.querySelector('title')?.innerText;
    const description = document.querySelector('meta[name="description"]')?.content;
    const keyword = document.querySelector('meta[name="keyword"]')?.content;
    const contents = document.querySelector('body').innerHTML;
    const url = window.location.href;
    const facebookDescription = document.querySelector('meta[name="og:description"]')?.content ?? description;
    const facebookUrl = window.location.host;
    const facebookImageUrl = document.querySelector('meta[name="og:image"]')?.content;

    return {
      title,
      description,
      keyword,
      contents,
      url,
      facebookDescription,
      facebookUrl,
      facebookImageUrl
    }
  };

  window.craftercms.guest.fromTopic('REQUEST_SEO_DATA').subscribe((payload) => {
    window.craftercms.guest.post({
      type: 'RESPONSE_SEO_DATA',
      payload: getSEOData()
    });
  });
});
