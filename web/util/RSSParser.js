const Parser = require('rss-parser');

const options = {
  customFields: {
    item: ['media:content', ['media:thumbnail', 'thumbnail'], 'media:group'],
  },
};

module.exports = new Parser(options);
