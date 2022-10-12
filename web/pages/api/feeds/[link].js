import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export default (req, res) => {
  const { link } = req.query;
  axios
    .get(link)
    .then((feed) => parseStringPromise(feed.data))
    .then((feedJSON) => res.status(200).json(feedJSON.rss.channel[0].item))
    .catch((err) => res.status(400).json(err));
};
