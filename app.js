(function () {
  ('use strict');

  const getCoinData = () => {
    fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        let coinArray = data.coins;
        const coinNames = coinArray.map((item) => item.id);
        const coinMarket = coinArray.map((item) => item.marketCap);
        handlerFunction(coinNames, coinMarket);
      });
  };

  const handlerFunction = (data1, data2) => {
    console.log(data1);
    console.log(data2);
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [...data1],
        datasets: [
          {
            data: [...data2],
            label: 'Crypto market cap',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: 'blue',
            borderWidth: 2,
            pointBackgroundColor: 'green',
          },
        ],
      },
      options: {},
    });
  };
  getCoinData();
  handlerFunction();
})();
