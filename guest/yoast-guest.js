document.addEventListener("DOMContentLoaded", function() {
  const getSEOData = () => {
    return {
      title: document.querySelector('title')?.innerText,
      description: document.querySelector('meta[name="description"]')?.content,
      keyword: document.querySelector('meta[name="keywpord"]')?.content,
      contents: document.querySelector('body').innerHTML
    }
  };

  window.craftercms.guest.fromTopic('REQUEST_SEO_DATA').subscribe((payload) => {
    console.log('got REQUEST_SEO_DATA', payload);

    window.craftercms.guest.post({
      type: 'RESPONSE_SEO_DATA',
      payload: getSEOData()
    });
  });
});
