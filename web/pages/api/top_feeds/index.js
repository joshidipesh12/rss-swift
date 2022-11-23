import Parser from "../../../util/RSSParser";
import cleanup from "../../../util/cleanupFeed";
import mongooseConnect from "../../../util/mongoConnector";
import TopFeedTable from "../../../modals/TopFeedTable";
import config from "../../../config.json";

import moment from "moment";

export default async (req, res) => {
  const date = moment().format("DD MM YYYY");
  await mongooseConnect();

  const exists = await TopFeedTable.exists({ date });
  if (exists) {
    const { data } = await TopFeedTable.findOne({ date });
    return res.status(200).json(data);
  }

  const { categories } = config;
  const category = categories[moment().day()];
  const providers = config.providers.filter(p => p.category === category);

  const items = [];
  for (let provider of providers) {
    const feed = await Parser.parseURL(provider.rss_url);
    const posts = cleanup(feed);
    posts?.items?.length > 0
      ? items.push({ post: posts.items[0], provider })
      : null;
  }

  res.status(200).send({ items, category });

  let data = new TopFeedTable({ date, data: { items, category } });
  data.save();
};
