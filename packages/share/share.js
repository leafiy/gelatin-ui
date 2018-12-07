const templates = {
  weibo: 'https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}',
  wechat: 'javascript:',
  douban: 'http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11',
  linkedin: 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin',
  facebook: 'https://www.facebook.com/sharer/sharer.php?u={{URL}}',
  twitter: 'https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}',
  google: 'https://plus.google.com/share?url={{URL}}'
};


const makeUrl = function({site, data}) {
  if (!data['summary']) {
    data['summary'] = data['description'];
  }
  return templates[site].replace(/\{\{(\w)(\w*)\}\}/g, function(m, fix, key) {
    var nameKey = site + fix + key.toLowerCase();
    key = (fix + key).toLowerCase();

    return encodeURIComponent((data[nameKey] === undefined ? data[key] : data[nameKey]) || '');
  });
}


export { templates, makeUrl }
