import config from "../../../config.json";
import moment from "moment";

const handler = async (req, res) => {
  const { categories } = config;
  const category = categories[moment().day()];
  return res.status(200).send(category);
};

export default handler;
