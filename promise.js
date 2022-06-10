const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    promiseTheaterIXX()
      .then((data) => {
        let count = 0;
        for (let item = 0; item < data.length; item++) {
          if (data[item].hasil === emosi) {
            count += 1;
          }
        }

        promiseTheaterVGC()
          .then((data) => {
            for (let item = 0; item < data.length; item++) {
              if (data[item].hasil === emosi) {
                count += 1;
              }
            }

            // Resolve of promiseOutput
            resolve(count);
          })

          // Reject of promiseOutput
          .catch((err) => reject(err));
      })
      // Reject of promiseOutput
      .catch((err) => reject(err));
  });
};

module.exports = {
  promiseOutput,
};
