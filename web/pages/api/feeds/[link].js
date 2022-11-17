import Parser from '../../../util/RSSParser';
import cleanup from '../../../util/cleanupFeed';

export default async (req, res) => {
  const {link} = req.query;
  const feed = await Parser.parseURL(link);
  return res.json(cleanup(feed));
};
