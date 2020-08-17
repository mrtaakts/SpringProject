$(function() {
    "use strict";

	
	// chart 1
    // $.getJSON('/anasayfa/gunlukSefer', function(response) {
        $.get('/anasayfa/gunlukSefer', function(response) {
        console.log(response);
        var sefersayisi = response;

            localStorage.setItem("sefersay", sefersayisi);

        var options = {
            chart: {
                height: 35,
                type: 'line',
                zoom: {
                    enabled: false
                },
                foreColor: '#4e4e4e',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    opacity: 0.12,
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '10%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2.5,
                curve: 'straight'
            },
            series: [{
                name: 'Sefer',
                data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
            }],

            xaxis: {
                type: 'month',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return parseInt(val);
                    }
                }

            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#fff'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 80, 100]
                },
            },
            colors: ['#fff'],
            legend: {
                show: 0,
                position: "top",
                horizontalAlign: "center",
                offsetX: -20,
                fontSize: "12px",
                markers: {
                    radius: 50,
                    width: 10,
                    height: 10
                }
            },
            grid: {
                show: false,
                borderColor: 'rgba(66, 59, 116, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart1"),
            options
        );

        chart.render();
    });


	
	
	
	// chart 2
    $.get('/anasayfa/gunlukPersonel', function(response) {
    console.log(response);
    var personelsayisi = response;

        localStorage.setItem("persay", personelsayisi);

	var options = {
            chart: {
                height: 35,
                type: 'line',
                zoom: {
                      enabled: false
                    },
             foreColor: '#4e4e4e',
             toolbar: {
                  show: false
                },
          sparkline:{
              enabled:true,
            },
            dropShadow: {
                    enabled: true,
                    top: 1,
					left: 1,
					blur: 2,
					opacity: 0.12,
                }
            },
            plotOptions: {
                bar: {
            columnWidth: '10%',
              endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2.5, 
                curve: 'straight'
            },
            series: [{
                name: 'Personel',
                data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
            }],

            xaxis: {
                type: 'month',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],                
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                    return parseInt(val);
                  }
                }

            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#fff'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 80, 100]
                },
            },
            colors: ['#fff'],
            legend: {
                show: 0,
                position: "top",
                horizontalAlign: "center",
                offsetX: -20,
                fontSize: "12px",
                markers: {
                  radius: 50,
                  width: 10,
                  height: 10
                }
              },
            grid:{
                show: false,
                borderColor: 'rgba(66, 59, 116, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart2"),
            options
        );

        chart.render();
    });
	
	
	
	// chart 3
    $.get('/anasayfa/gunlukOzArac', function(response) {
        console.log(response);
        var ozaracsayisi = response;

        localStorage.setItem("ozaracsayisi", ozaracsayisi);

        var options = {
            chart: {
                height: 35,
                type: 'line',
                zoom: {
                      enabled: false
                    },
             foreColor: '#4e4e4e',
             toolbar: {
                  show: false
                },
          sparkline:{
              enabled:true,
            },
            dropShadow: {
                    enabled: true,
                    top: 1,
					left: 1,
					blur: 2,
					opacity: 0.12,
                }
            },
            plotOptions: {
                bar: {
            columnWidth: '10%',
              endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2.5, 
                curve: 'straight'
            },
            series: [{
                name: 'Orders',
                data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
            }],

            xaxis: {
                type: 'month',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],                
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                    return parseInt(val);
                  }
                }

            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#fff'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 80, 100]
                },
            },
            colors: ['#fff'],
            legend: {
                show: 0,
                position: "top",
                horizontalAlign: "center",
                offsetX: -20,
                fontSize: "12px",
                markers: {
                  radius: 50,
                  width: 10,
                  height: 10
                }
              },
            grid:{
                show: false,
                borderColor: 'rgba(66, 59, 116, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart3"),
            options
        );

        chart.render();
    });
		
		
   // chart 4
    $.get('/anasayfa/gunlukKiralik', function(response) {
        console.log(response);
        var kiralikaracsayisi = response;

        localStorage.setItem("kiralikaracsayisi", kiralikaracsayisi);

            var options = {
            chart: {
                height: 35,
                type: 'line',
                zoom: {
                      enabled: false
                    },
             foreColor: '#4e4e4e',
             toolbar: {
                  show: false
                },
          sparkline:{
              enabled:true,
            },
            dropShadow: {
                    enabled: true,
                    top: 1,
					left: 1,
					blur: 2,
					opacity: 0.12,
                }
            },
            plotOptions: {
                bar: {
            columnWidth: '10%',
              endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2.5, 
                curve: 'straight'
            },
            series: [{
                name: 'Orders',
                data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
            }],

            xaxis: {
                type: 'month',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],                
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                    return parseInt(val);
                  }
                }

            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#fff'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 80, 100]
                },
            },
            colors: ['#fff'],
            legend: {
                show: 0,
                position: "top",
                horizontalAlign: "center",
                offsetX: -20,
                fontSize: "12px",
                markers: {
                  radius: 50,
                  width: 10,
                  height: 10
                }
              },
            grid:{
                show: false,
                borderColor: 'rgba(66, 59, 116, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart4"),
            options
        );

        chart.render();
    });
	
	
	
	// chart 5
  
	
	var options = {
      chart: {
        height: 350,
        type: 'area',
        toolbar:{
          show:false
        }
      },
      stroke: {
		width: 2.5, 
        curve: 'smooth'
      },
       dataLabels: {
             enabled: false
          },
      series: [{
        name: 'Gider',
        data: [800, 750, 800, 1100, 720, 860, 660, 1800, 800, 1500, 1800]
      }, {
        name: 'Gelir',
        data: [2990, 4250, 3500, 4300, 3900, 4550, 4750, 3700, 4100, 4900, 4900]
      }],
      fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				gradientToColors: [ '#e100ff', '#00c8ff'],
				shadeIntensity: 1,
				type: 'vertical',
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 5000, 6000]
			},
		},
      colors: ['#ff6258', '#0072ff'],
      labels: ['Oca', 'Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl ','Eki','Kas','Ara'],
      markers: {
        size: 0
      },
      tooltip: {
			enabled: true,
			theme: 'dark',
	  }

    }

    var chart = new ApexCharts(
      document.querySelector("#chart5"),
      options
    );

    chart.render();
	
	
	
	//chart 6
    var dataTest=[];
    $.getJSON('/anasayfa/aylık', function(response) {
        console.log(response);
        dataTest=response;

    var ctgr=[];
    var deger=[];
    var colorlist=["#566ca0" ,"#ffdbe1" ,"#2f1179", '#8f50ff', '#0072ff', '#f1076f',"#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812", "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
        "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977", "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",];  /*Gelen veriler colorlist ten küçük olmalı*/
    var colors=[];
    for(var i=0; i<dataTest.length;i++){
        ctgr.push(dataTest[i].x);
        deger.push(dataTest[i].y);
        colors.push(colorlist[i]);
    }

    var options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '60%',
                endingShape: 'rounded',
                distributed: true,
                //horizontal: false,
                dataLabels: {
                    position: 'center', // top, center,
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#fff"]
            }
        },
        stroke: {
            width: 1
        },
        series: [{
            name: 'Orders',
            data: deger,
        }],
        tooltip: {
            enabled: true,
            theme: 'dark',
        },
        grid:{
            show: true,
            borderColor: 'rgba(66, 59, 116, 0.15)',
        },
        xaxis: {
            categories: ctgr,
            position: 'bottom',
            labels: {
                offsetY: 0,

            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                gradientToColors: colors,
                shadeIntensity: 1,
                type: 'vertical',
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100]
            }
        },
        colors: colors,
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }

        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart6"),
        options
    );

    chart.render();
    });

    // var options = {
    //     chart: {
    //         height: 350,
    //         type: 'bar',
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     series: [],
    //     title: {
    //         text: 'Ajax Example',
    //     },
    //     noData: {
    //         text: 'Loading...'
    //     }
    // }
	// var chart = new ApexCharts(
	// 	document.querySelector("#chart6"),
	// 	options
	// );
    // chart.render();
    // $.getJSON('/anasayfa/aylık', function(response) {
    //     console.log(response)
    //     chart.updateSeries([{
    //         name: 'Orders',
    //         data: response
    //     }])
    // });

  // chart 7
	 
   var options = {
      chart: {
        height: 290,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '85%',
            background: 'transparent',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              //color: 'rgba(246, 181, 49, 0.65)',
              opacity: 0.12
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '30%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
			  //color: 'rgba(246, 181, 49, 0.65)',
              opacity: 0.12
            }
          },

          dataLabels: { 
            showOn: 'always',
            name: {
              offsetY: -20,
              show: true,
              color: '#000',
              fontSize: '15px'
            },
            value: {
              formatter: function (val) {
						return val + "%";
					},
              color: '#000',
              fontSize: '40px',
              show: true,
			  offsetY: 10,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#f7b733'],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#fc4a1a"],
      series: [64],
      stroke: {
        //lineCap: 'round',
        dashArray: 4
      },
      labels: ['Aylık Sefer'],

    }

    var chart = new ApexCharts(
      document.querySelector("#chart7"),
      options
    );

    chart.render();


	

	// chart 8
	 
	var options = {
      chart: {
        height: 290,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '85%',
            background: 'transparent',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              //color: 'rgba(209, 58, 223, 0.65)',
              opacity: 0.12
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '30%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
			  //color: 'rgba(209, 58, 223, 0.65)',
              opacity: 0.12
            }
          },

          dataLabels: { 
            showOn: 'always',
            name: {
              offsetY: -20,
              show: true,
              color: '#000',
              fontSize: '15px'
            },
            value: {
              formatter: function (val) {
						return val + "%";
					},
              color: '#000',
              fontSize: '40px',
              show: true,
			  offsetY: 10,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#00dbde'],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#fc00ff"],
      series: [68],
      stroke: {
        //lineCap: 'round',
        dashArray: 4
      },
      labels: ['Haftalık Sefer'],

    }

    var chart = new ApexCharts(
      document.querySelector("#chart8"),
      options
    );

    chart.render();	 

	
	
   // chart 9
   
		 
   var options = {
      chart: {
        height: 290,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '85%',
            background: 'transparent',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              //color: 'rgba(8, 165, 14, 0.65)',
              opacity: 0.12
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '30%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
			  //color: 'rgba(8, 165, 14, 0.65)',
              opacity: 0.12
            }
          },

          dataLabels: { 
            showOn: 'always',
            name: {
              offsetY: -20,
              show: true,
              color: '#000',
              fontSize: '15px'
            },
            value: {
              formatter: function (val) {
						return val + "%";
					},
              color: '#000',
              fontSize: '40px',
              show: true,
			  offsetY: 10,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#08a50e'],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#cddc35"],
      series: [74],
      stroke: {
        //lineCap: 'round',
        dashArray: 4
      },
      labels: ['Günlük Sefer'],

    }

    var chart = new ApexCharts(
      document.querySelector("#chart9"),
      options
    );

    chart.render(); 
		 
		 
		 
            
      //chart 10

             
         var options = {
            chart: {
                width: 300,
                type: 'donut',
                foreColor: 'rgba(255, 255, 255, 0.85)',
            },
            dataLabels: {
                enabled: true
            },
            series: [44, 55, 60],
            fill: {
                type: 'gradient',
                gradient: {
                    gradientToColors: [ '#ee0979', '#08a50e', '#2575fc'],
                },
            },
            colors: ["#ff6a00", "#cddc35", '#6a11cb'],
            tooltip: {
                  enabled: false,
                  theme: 'dark',
              },
            legend: {
            	show:false,
                formatter: function(val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 280
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]

        }

        var chart = new ApexCharts(
            document.querySelector("#chart10"),
            options
        );

        chart.render();



    // chart 11
	 
	var options = {
      chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -0,
              show: false,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '16px'
            },
            value: {
              formatter: function(val) {
                return val + "%";
              },
			  offsetY: 8,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '19px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#f1076f'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#ff5447"],
      series: [75],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
	  responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 230
                    }
                }
            }]

    }

    var chart = new ApexCharts(
      document.querySelector("#chart11"),
      options
    );

    chart.render();

    
	
	 // chart 12
	 
	 var options = {
      chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -0,
              show: false,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '16px'
            },
            value: {
              formatter: function(val) {
                return val + "%";
              },
			  offsetY: 8,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '19px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#0072ff'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#00c8ff"],
      series: [45],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
	  responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 230
                    }
                }
            }]

    }

    var chart = new ApexCharts(
      document.querySelector("#chart12"),
      options
    );

    chart.render();
	
	
	
	 // chart 13
	 
	 var options = {
      chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -0,
              show: false,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '16px'
            },
            value: {
              formatter: function(val) {
                return val + "%";
              },
			  offsetY: 8,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '19px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#f7971e'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#ffd200"],
      series: [55],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
	  responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 230
                    }
                }
            }]

    }

    var chart = new ApexCharts(
      document.querySelector("#chart13"),
      options
    );

    chart.render();
	
	
	// chart 14
	 
	 var options = {
      chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -0,
              show: false,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '16px'
            },
            value: {
              formatter: function(val) {
                return val + "%";
              },
			  offsetY: 8,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '19px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#cddc35'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#08a50e"],
      series: [80],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
	  responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 230
                    }
                }
            }]

    }

    var chart = new ApexCharts(
      document.querySelector("#chart14"),
      options
    );

    chart.render();
	
	
	
	// chart 15
	 
	 var options = {
      chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -0,
              show: false,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '16px'
            },
            value: {
              formatter: function(val) {
                return val + "%";
              },
			  offsetY: 8,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '19px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#00dbde'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#fc00ff"],
      series: [65],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
	  responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 230
                    }
                }
            }]

    }

    var chart = new ApexCharts(
      document.querySelector("#chart15"),
      options
    );

    chart.render();
	
	
	
	// chart 16
	 
	 var options = {
      chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -0,
              show: false,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '16px'
            },
            value: {
              formatter: function(val) {
                return val + "%";
              },
			  offsetY: 8,
              color: 'rgba(0, 0, 0, 0.84)',
              fontSize: '19px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#8f50ff'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#d13adf"],
      series: [70],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
	  responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 230
                    }
                }
            }]

    }

    var chart = new ApexCharts(
      document.querySelector("#chart16"),
      options
    );

    chart.render();



    // chart 2 Eklenen

    var options = {
        chart: {
            height: 365,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                //startAngle: -135,
                //endAngle: 135,
                hollow: {
                    margin: 12,
                    size: '45%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#eeedfb',
                    strokeWidth: '100%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: false,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },
                dataLabels: {
                    name: {
                        color:'#000',
                        fontSize: '14px',
                        offsetY: -5
                    },
                    value: {
                        color: '#000',
                        fontSize: '25px',
                        offsetY: 5
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#000',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 300
                        }
                    }
                }
            }
        },
        stroke: {
            lineCap: "round",
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ '#d13adf', '#d13adf', '#f7971e', '#08a50e'],
                shadeIntensity: 1,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        colors: ["#8f50ff", "#f1076f", "#ffd200", "#cddc35"],
        series: [90, 80, 70, 60],
        labels: ['Career Page', 'Referral', 'Agency', 'Job Boards'],
        responsive: [{
            breakpoint: 1280,
            options: {
                chart: {
                    height: 350
                }
            }
        }]

    }

    var chart = new ApexCharts(
        document.querySelector("#application-by-source"),
        options
    );

    chart.render();




// worl map

$(function(){
    
       $('#world-map').vectorMap({

       	backgroundColor: 'transparent',
       	borderColor: '#818181',
        borderOpacity: 0.25,
        regionStyle : {
	        initial : {
	          fill : '#4e4e4e'
	        }
	      },
      
        onRegionClick: function(event, code){
            code = code.toLowerCase();
            if(countries.indexOf(code) == -1)
                code = 'us';
            window.location = 'http://www.microstrategy.com/' + code;
        },
        series: {
            regions: [{
                values: {
                    IN:'#b659ff',
                    US:'#2ccc72',
                    RU:'#5a52db',
                    AU:'#f09c15'
                }
            }]
        }
     
    });
 
})



    });