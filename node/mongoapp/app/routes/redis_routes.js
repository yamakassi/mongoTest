const collect = "notes";
module.exports = function (app, db, redis) {
  app.get("/redis", function (req, res) {
    console.log("resis");
    redis.get("all", function (err, all) {
      all = JSON.parse(all);
      if (!all) {
        db.collection(collect)
          .find({})
          .toArray(function (error, response) {
            if (error) {
              res.send("Error occurred while inserting");
            } else {
              redis.set("all", JSON.stringify(response));
              res.status(200).send(response);
            }
          });
      } else {
        res.status(200).send(all);
      }
    });
  });
};
