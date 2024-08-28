app.get("/test", (req, res) => {
  const data = [];
  fs.createReadStream("men.csv")
    .pipe(csvParser())
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", () => {
      res.json(data);
    })
    .on("error", (err) => console.log(err));
});
