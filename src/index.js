import connetionDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
connetionDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is runneing succes fully ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Bagho ", err);
  });
