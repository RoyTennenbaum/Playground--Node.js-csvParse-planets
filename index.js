import { parse } from "csv-parse";
import { createReadStream } from "node:fs";

const results = [];

createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => console.log(err))
  .on("end", () => {
    console.log(`${results} DONE PROCCESSING FILE!`);
  });
