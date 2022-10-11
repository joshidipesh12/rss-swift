import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export default (req, res) => {
  const { link } = req.query;
  axios
    .get(link)
    .then((feed) => parseStringPromise(feed.data))
    .then((feedJSON) => res.status(200).json(feedJSON))
    .catch((err) => res.status(400).json({ code: err.code }));
};
