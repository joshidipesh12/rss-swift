import Parser from "../../../util/RSSParser";
import cleanup from "../../../util/cleanupFeed";

const handler = async (req, res) => {
  const { link } = req.query;
  const feed = await Parser.parseURL(link);
  return res.json(cleanup(feed));
};

export default handler;
