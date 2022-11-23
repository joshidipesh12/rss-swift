import mongoose from "mongoose";

const topFeedSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true,
  },
  data: mongoose.Schema.Types.Mixed,
});

if (!global.TopFeedTable) {
  global.TopFeedTable = mongoose.model("TopFeeds", topFeedSchema);
}

export default global.TopFeedTable;
