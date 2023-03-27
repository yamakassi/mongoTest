const collect = "notes";
module.exports = function (app, db) {
  app.post("/notes", (req, res) => {
    const note = { text: req.body.body, title: req.body.title };

    db.collection(collect).insertOne(note, function (error, response) {
      if (error) {
        res.send("Error occurred while inserting");
        // return
      } else {
        res.status(200).send(response);
        // return
      }
    });

    /* db.collection("notes").insertOne(note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });*/
  });
  app.get("/all", (req, res) => {
    db.collection(collect)
      .find({})
      .toArray(function (error, response) {
        if (error) {
          res.send("Error occurred while inserting");
          // return
        } else {
          res.status(200).send(response);
          // return
        }
      });
  });

  app.get("/query/5", (req, res) => {
    db.collection(collect).find({
      "transactions": {
        $elemMatch: {
          "amount": {
            $lte: 1000,
        
      },
      "symbol": "amd",
      "transaction_code": "buy",
      
    }
  },
  
}).toArray(function (error, response) {
        if (error) {
          res.send("Error occurred while inserting");
          // return
        } else {
          res.status(200).send(response);
          // return
        }
      });
  });

  app.get("/query/1", (req, res) => {
    db.collection(collect)
      .aggregate([
        {
          $sort: {
            transaction_count: -1,
          },
        },
        {
          $limit: 1,
        },
      ])
      .toArray(function (error, response) {
        if (error) {
          res.send("Error occurred while inserting");
          // return
        } else {
          res.status(200).send(response);
          // return
        }
      });
  });
};
