// The given file must be run in a web browser
// Open index.html to see results in the console

class DataSource {
  constructor(_endpoint = "https://static.ngnrs.io/test/prices") {
    this.endpoint = _endpoint;
  }

  async getPrices() {
    try {
      const response = await fetch(this.endpoint);
      if (response.status === 200) {
        const {
          data: { prices },
        } = await response.json();

        prices.forEach((price) => {
          price.mid = () => (price.buy + price.sell) / 2;
          price.quote = () => price.pair.slice(-3);
        });
        return prices;
      } else {
        throw "Request not completed!";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const ds = new DataSource();
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
