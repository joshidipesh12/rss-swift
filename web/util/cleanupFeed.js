module.exports = (feed) => {
  // @feed -> json
  feed.items = feed.items.map((item) => {
    let image = item['media:content'] || item['media:group'];
    if (image !== undefined) {
      if ('$' in image) {
        image = image.$.url;
        delete item['media:content'];
      } else if (
        'media:content' in image &&
        image['media:content'].constructor === Array
      ) {
        image = image['media:content'][0].$.url;
        delete item['media:group'];
      }
    }

    if ('thumbnail' in item) item.thumbnail = item.thumbnail.$.url;

    return { ...item, image };
  });
  return feed;
};
