import mongoose from "mongoose";

const connect = () => {
  let result = new Promise((resolve, reject) => {
    if (
      mongoose.connection.readyState !== mongoose.ConnectionStates.connected
    ) {
      mongoose
        .connect(process.env.MONGODB_URI, { connectTimeoutMS: 120000 })
        .then(
          () => {
            console.log("connected to mongodb");
            resolve();
          },
          err => {
            console.log("mongodb error: ", err);
            reject(err);
          },
        );
    } else resolve();
    reject();
  });
  return result;
};

export default connect;
