import Parser from '../../../util/RSSParser';
import cleanup from '../../../util/cleanupFeed';

export default (req, res) => {
  const { link } = req.query;
  Parser.parseURL(link).then((feed) => res.json(cleanup(feed)));
};
