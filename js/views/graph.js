var options = {
          series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
          chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['', '', '', '', '', '', ''],
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      

      var options2 = {
          series: [44, 55, 41, 17, 15],
          chart: {
          type: 'donut',
          width: 500
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
             show: false
           }
          }
        },
        {
          breakpoint: 900,
          options: {
            chart: {
              width: 250
            },
            legend: {
             show: false
           }
          }
        },
        {
          breakpoint: 1300,
          options: {
            chart: {
              width: 400
            },
            legend: {
             show: false
           }
          }
        }]
        };

        var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
        chart2.render();
      
         var options3 = {
          series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          height: 435,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };

        var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
        chart3.render();
        
         var options4 = {
          series: [{
          data: [44, 55, 41, 67, 22]
        }, {
          data: []
        }, {
          data: []
        }, {
          data: []
        }],
          chart: {
          type: 'bar',
          height: 300,
          stacked: false,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: ['Sales', 'IT', 'HR', 'Fin', 'Fm'],
        },
        legend: {
          position: 'right',
          offsetY: 40,
          show: false
        },
        fill: {
          opacity: 1
        }
        };

        var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
        chart4.render();
      


      