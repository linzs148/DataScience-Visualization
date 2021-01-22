// 新增确诊人数
(function() {
	var myChart = echarts.init(document.querySelector(".people .chart"));

	var option = {
		
		dataZoom: [
		        {
		            show: false,
		            realtime: true,
		            start: 20,
		            end: 100
		        },
		        {
		            type: 'inside',
		            realtime: true,
		            start: 20,
		            end: 100
		        }
		    ],
		
		// 通过这个color修改线的颜色
		color: ["#ed3f35"],
		tooltip: {
			trigger: "axis"
		},
		legend: {
			// 如果series 对象有name值，则legend可以不用写data
			// 修改图例组件 文字颜色
			textStyle: {
				color: "#4c9bfd"
			},
			// 这个10% 必须加引号
			right: "10%"
		},
		grid: {
			top: "20%",
			left: "3%",
			right: "4%",
			bottom: "3%",
			show: true, // 显示边框
			borderColor: "#012f4a", // 边框颜色
			containLabel: true // 包含刻度文字在内
		},

		xAxis: {
			type: "category",
			boundaryGap: false,
			data: [
				"1月",
				"2月",
				"3月",
				"4月",
				"5月",
				"6月",
				"7月",
				"8月",
				"9月",
				"10月",
				"11月",
				"12月"
			],
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			}
		},
		yAxis: {
			type: "value",
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			},
			splitLine: {
				lineStyle: {
					color: "#012f4a" // 分割线颜色
				}
			}
		},
		series: [{
				name: "新增确诊病例",
				type: "line",
				// true 可以让我们的折线显示带有弧度
				smooth: true,
				data: [11791, 68033, 1730, 1320, 143, 514, 761, 766, 356, 559, 557, 522]
			}
		]
	};

	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

/*
// 公众心态变化（）
(function() {
	// 1实例化对象
	var myChart = echarts.init(document.querySelector(".mentality .chart"));
	// 2. 指定配置项和数据
	var option = {
		color: ["#2f89cf"],
		tooltip: {
			trigger: "axis",
			axisPointer: {
				// 坐标轴指示器，坐标轴触发有效
				type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		// 修改图表的大小
		grid: {
			left: "0%",
			top: "10px",
			right: "0%",
			bottom: "4%",
			containLabel: true
		},
		xAxis: [{
			type: "category",
			data: [
				"旅游行业",
				"教育培训",
				"游戏行业",
				"医疗行业",
				"电商行业",
				"社交行业",
				"金融行业"
			],
			axisTick: {
				alignWithLabel: true
			},
			// 修改刻度标签 相关样式
			axisLabel: {
				color: "rgba(255,255,255,.6) ",
				fontSize: "10"
			},
			// 不显示x坐标轴的样式
			axisLine: {
				show: false
			}
		}],
		yAxis: [{
			type: "value",
			// 修改刻度标签 相关样式
			axisLabel: {
				color: "rgba(255,255,255,.6) ",
				fontSize: 12
			},
			// y轴的线条改为了 2像素
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)",
					width: 2
				}
			},
			// y轴分割线的颜色
			splitLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)"
				}
			}
		}],
		series: [{
			name: "直接访问",
			type: "bar",
			barWidth: "35%",
			data: [200, 300, 300, 900, 1500, 1200, 600],
			itemStyle: {
				// 修改柱子圆角
				barBorderRadius: 5
			}
		}]
	};
	// 3. 把配置项给实例对象
	myChart.setOption(option);
	// 4. 让图表跟随屏幕自动的去适应
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
*/

// 数据分布（）
(function() {
	var myChart = echarts.init(document.querySelector(".resource .chart"));

	var option = {
	    color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
	    grid: {
	        left: -100,
	        top: 50,
	        bottom: 10,
	        right: 10,
	        containLabel: true
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: "{b} : {c} ({d}%)"
	    },
	    legend: {
	        type: "scroll",
	        orient: "vartical",
	        top: "center",
	        right: "15",
	        itemWidth: 16,
	        itemHeight: 8,
	        itemGap: 16,
	        textStyle: {
	            color: '#A3E2F4',
	            fontSize: 15,
	            fontWeight: 1
	        },
	        data: ['微博', '知乎', 'B站', '新闻', '指数']
	    },
	    polar: {},
	    angleAxis: {
	        interval: 1,
	        type: 'category',
	        data: [],
	        z: 10,
	        axisLine: {
	            show: false,
	            lineStyle: {
	                color: "#0B4A6B",
	                width: 1,
	                type: "solid"
	            },
	        },
	        axisLabel: {
	            interval: 0,
	            show: true,
	            color: "#0B4A6B",
	            margin: 8,
	            fontSize: 16
	        },
	    },
	    radiusAxis: {
	        min: 40,
	        max: 120,
	        interval: 20,
	        axisLine: {
	            show: false,
	            lineStyle: {
	                color: "#0B3E5E",
	                width: 1,
	                type: "solid"
	            },
	        },
	        axisLabel: {
	            formatter: '{value} %',
	            show: false,
	            padding: [0, 0, 20, 0],
	            color: "#0B3E5E",
	            fontSize: 16
	        },
	        splitLine: {
	            lineStyle: {
	                color: "#0B3E5E",
	                width: 2,
	                type: "solid"
	            }
	        }
	    },
	    calculable: true,
	    series: [{
	        type: 'pie',
	        radius: ["5%", "10%"],
	        hoverAnimation: false,
	        labelLine: {
	            normal: {
	                show: false,
	                length: 30,
	                length2: 55
	            },
	            emphasis: {
	                show: false
	            }
	        },
	        data: [{
	            name: '',
	            value: 0,
	            itemStyle: {
	                normal: {
	                    color: "#0B4A6B"
	                }
	            }
	        }]
	    }, {
	        type: 'pie',
	        radius: ["90%", "95%"],
	        hoverAnimation: false,
	        labelLine: {
	            normal: {
	                show: false,
	                length: 30,
	                length2: 55
	            },
	            emphasis: {
	                show: false
	            }
	        },
	        name: "",
	        data: [{
	            name: '',
	            value: 0,
	            itemStyle: {
	                normal: {
	                    color: "#0B4A6B"
	                }
	            }
	        }]
	    }, {
	        stack: 'a',
	        type: 'pie',
	        radius: ['20%', '80%'],
	        roseType: 'area',
	        zlevel:10,
	        label: {
	            normal: {
	                show: true,
	                formatter: "{c}",
	                textStyle: {
						color: '#ffffff',
	                    fontSize: 12
	                },
	                position: 'outside'
	            },
	            emphasis: {
	                show: true
	            }
	        },
	        labelLine: {
	            normal: {
	                show: true,
	                length: 10,
	                length2: 30
	            },
	            emphasis: {
	                show: false
	            }
	        },
	        data: [{
	                value: 1523,
	                name: '微博'
	            },
	            {
	                value: 3256,
	                name: '知乎'
	            },
	            {
	                value: 3515,
	                name: 'B站'
	            },
	            {
	                value: 4130,
	                name: '新闻'
	            },
	            {
	                value: 6545,
	                name: '指数'
	            }
	        ]
	    }, ]
	}

	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();


// 雷达图
(function() {
	var myChart = echarts.init(document.querySelector(".rader .chart"));
	var option = {
		"normal": {
			"top": 200,
			"left": 300,
			"width": 500,
			"height": 400,
			"zIndex": 6,
		},
		"title": {
			"show": true,
			"text": "数据雷达图",
			"left": "43%",
			"top": "4%",
			"textStyle": {
				"fontSize": 18,
				"color": "#fff",
				"fontStyle": "normal",
				"fontWeight": "normal"
			}
		},
		"tooltip": {
			"show": true,
			"trigger": "item"
		},
		"legend": {
			"show": true,
			"icon": "circle",
			"left": "30%",
			"top": "90%",
			"orient": "horizontal",
			"textStyle": {
				"fontSize": 14,
				"color": "#fff"
			},
			"data": ["公众心态", "疫情人数", "新闻热度"]
		},
		"radar": {
			"center": ["50%", "50%"],
			"radius": "70%",
			"startAngle": 90,
			"splitNumber": 4,
			"shape": "circle",
			"splitArea": {
				"areaStyle": {
					"color": ["transparent"]
				}
			},
			"axisLabel": {
				"show": false,
				"fontSize": 18,
				"color": "#fff",
				"fontStyle": "normal",
				"fontWeight": "normal"
			},
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "grey" //
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": "grey" //
				}
			},
			"indicator": [{
				"name": "2019-12",
				"max": 88
			}, {
				"name": "2020-1",
				"max": 88
			}, {
				"name": "2020-2",
				"max": 88
			}, {
				"name": "2020-3",
				"max": 88
			}, {
				"name": "2020-4",
				"max": 88
			}, {
				"name": "2020-5",
				"max": 88
			}, {
				"name": "2020-6",
				"max": 88
			}, {
				"name": "2020-7",
				"max": 88
			}, {
				"name": "2020-8",
				"max": 88
			}, {
				"name": "2020-9",
				"max": 88
			}, {
				"name": "2020-10",
				"max": 88
			}, {
				"name": "2020-11",
				"max": 88
			}, {
				"name": "2020-12",
				"max": 88
			}]
		},
		"series": [{
			"name": "公众心态",
			"type": "radar",
			"symbolSize": 5,
			"areaStyle": {
				"normal": {
					"color": "rgba(245, 166, 35, 0.4)"
				}
			},
			itemStyle: {
				color: 'rgba(245, 166, 35, 1)',
				borderColor: 'rgba(245, 166, 35, 0.3)',
				borderWidth: 5,
			},
			"lineStyle": {
				"normal": {
					"type": "dashed",

					"color": "rgba(245, 166, 35, 1)",
					"width": 2
				}
			},
			"data": [
				[80, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40, 42]
			]
		}, {
			"name": "疫情人数",
			"type": "radar",
			"symbolSize": 5,
			"areaStyle": {
				"normal": {
					"color": "rgba(255, 0, 0, 0.4)"
				}
			},
			itemStyle: {
				color: 'rgba(255, 0, 0, 1.0)',
				borderColor: 'rgba(255, 0, 0, 0.3)',
				borderWidth: 5,
			},
			"lineStyle": {
				"normal": {
					"type": "dashed",

					"color": "rgba(255, 0, 0, 1)",
					"width": 2
				}
			},
			"data": [
				[80, 50, 55, 50, 50, 20, 48, 53, 60, 78, 50, 46, 42]
			]
		}, {
			"name": "新闻热度",
			"type": "radar",
			"symbolSize": 5,
			"itemStyle": {
				"normal": {
					color: 'rgba(19, 173, 255, 1)',
					"borderColor": "rgba(19, 173, 255, 0.4)",
					"borderWidth": 5
				}
			},
			"areaStyle": {
				"normal": {
					"color": "rgba(19, 173, 255, 0.5)"
				}
			},
			"lineStyle": {
				"normal": {
					"color": "rgba(19, 173, 255, 1)",
					"width": 2,
					"type": "dashed"
				}
			},
			"data": [
				[60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60, 80]
			]
		}]
	};
	myChart.setOption(option);
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();


// 各省累计确诊病例
(function() {
	dataList = [
	    {
	        name: '北京',
	        value: 1020
	    },
	    {
	        name: '天津',
	        value: 335
	    },
	    {
	        name: '上海',
	        value: 1624
	    },
	    {
	        name: '重庆',
	        value: 591
	    },
	    {
	        name: '河北',
	        value: 1249
	    },
	    {
	        name: '河南',
	        value: 1303
	    },
	    {
	        name: '云南',
	        value: 231
	    },
	    {
	        name: '辽宁',
	        value: 396
	    },
	    {
	        name: '黑龙江',
	        value: 1274
	    },
	    {
	        name: '湖南',
	        value: 1026
	    },
	    {
	        name: '安徽',
	        value: 994
	    },
	    {
	        name: '山东',
	        value: 866
	    },
	    {
	        name: '新疆',
	        value: 980
	    },
	    {
	        name: '江苏',
	        value: 688
	    },
	    {
	        name: '浙江',
	        value: 1316
	    },
	    {
	        name: '江西',
	        value: 935
	    },
	    {
	        name: '湖北',
	        value: 68150
	    },
	    {
	        name: '广西',
	        value: 267
	    },
	    {
	        name: '甘肃',
	        value: 182
	    },
	    {
	        name: '山西',
	        value: 231
	    },
	    {
	        name: '内蒙古',
	        value: 366
	    },
	    {
	        name: '陕西',
	        value: 533
	    },
	    {
	        name: '吉林',
	        value: 338
	    },
	    {
	        name: '福建',
	        value: 534
	    },
	    {
	        name: '贵州',
	        value: 147
	    },
	    {
	        name: '广东',
	        value: 2098
	    },
	    {
	        name: '青海',
	        value: 18
	    },
	    {
	        name: '西藏',
	        value: 1
	    },
	    {
	        name: '四川',
	        value: 865
	    },
	    {
	        name: '宁夏',
	        value: 75
	    },
	    {
	        name: '海南',
	        value: 171
	    },
	    {
	        name: '台湾',
	        value: 873
	    },
	    {
	        name: '香港',
	        value: 9867
	    },
	    {
	        name: '澳门',
	        value: 46
	    }
	];
	
	option = {
	    tooltip: {
	        trigger: "item",
	        formatter: function(e, t, n) {
	            return e.name + "：" + e.value
	        }
	    },
	    visualMap: {
	        min: 0,
	        max: 1000,
	        left: 26,
	        bottom: 40,
	        showLabel: !0,
	        text: ["高", "低"],
	        pieces: [{
	            gt: 10000,
	            color: "#7f1100"
	        }, {
	            gte: 1000,
	            lte: 10000,
	            color: "#ff5428"
	        }, {
	            gte: 500,
	            lt: 1000,
	            color: "#ff8c71"
	        }, {
	            gt: 1,
	            lt: 500,
	            color: "#ffd768"
	        }, {
	            value: 0,
	            color: "#ffffff"
	        }],
	        show: false
	    },
	    
		geo: {
	        map: "china",
	        roam: !1,
	        scaleLimit: {
	            min: 1,
	            max: 2
	        },
	        zoom: 1.23,
	        top: 20,
	        label: {
	            normal: {
	                show: false,
	                fontSize: "14",
	                color: "rgba(0,0,0,0.7)"
	            }
	        },
	        itemStyle: {
	            normal: {
	                //shadowBlur: 50,
	                //shadowColor: 'rgba(0, 0, 0, 0.2)',
	                borderColor: "rgba(0, 0, 0, 0.2)"
	            },
	            emphasis: {
	                areaColor: "#f2d5ad",
	                shadowOffsetX: 0,
	                shadowOffsetY: 0,
	                borderWidth: 0
	            }
	        }
	    },
	    series: [{
	        name: "累计确诊病例",
	        type: "map",
	        geoIndex: 0,
	        data: dataList
	    }]
	};
	var myChart = echarts.init(document.querySelector(".patient .chart"));

	myChart.setOption(option);

	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();


// 百度搜索指数
(function() {
  var keyData = [
    {
      key: "疫情", // 年份
      data: [5712559, 23449289, 18602777, 12519045, 7339423, 7074239, 5762485, 4059407, 3059660, 3659169, 3946757, 6098736]
    },
    {
      key: "新冠", // 年份
      data: [23914, 188902, 391133, 475088, 182810, 232405, 207341, 147865, 170342, 218656, 227228, 353482]
    },
	{
	  key: "口罩", // 年份
	  data: [1067982, 1375599, 593040, 289042, 149108, 99595, 57750, 56673, 64241, 70387, 68191, 74062]
	},
	{
	  key: "病例", // 年份
	  data: [28216, 32042, 23723, 20437, 19766, 22310, 21323, 20735, 19684, 16669, 18284, 18373]
	},
	{
	  key: "防疫", // 年份
	  data: [33761, 149754, 104200, 73611, 57827, 48044, 43455, 34071, 44899, 40728, 43957, 52676]
	}
  ];

  var myChart = echarts.init(document.querySelector(".search .chart"));

  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "搜索指数",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: keyData[0].data
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 点击切换效果
  $(".search h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = keyData[$(this).index()];
    option.series[0].data = obj.data;
    // 需要重新渲染
    myChart.setOption(option);
  });
})();


// 词云
(function() {
	var myChart = echarts.init(document.querySelector(".wordcloud .chart"));
	
	var keywords = {
	  "visualMap": 200,
	  "continuous": 102,
	  "contoller": 62,
	  "series": 27,
	  "gauge": 123,
	  "detail": 12,
	  "piecewise": 48,
	  "brush": 30,
	  "visualMa": 200,
	  "continuus": 102,
	  "contller": 62,
	  "seres": 27,
	  "gage": 123,
	  "detal": 12,
	  "pieewise": 48,
	  "brsh": 30,
	  "visualap": 200,
	  "contiuous": 102,
	  "contoller": 62,
	  "seres": 27,
	  "gaue": 123,
	  "deil": 12,
	  "piewise": 48,
	  "brsh": 30
	};
	
	var data = [];
	for (var name in keywords) {
	    data.push({
	        name: name,
	        value: keywords[name]
	    })
	}
	
	var option = {
		tooltip: {
		        trigger: 'item',
		        padding: [10, 15],
		        textStyle: {
		            fontSize: 20
		        }
		    },		
	    series: [ {
	        type: 'wordCloud',
	        sizeRange: [15, 40],
	        rotationRange: [-90, 90],
	        rotationStep: 45,
	        gridSize: 2,
	        shape: 'pentagon',
	        drawOutOfBound: false,
	        textStyle: {
	            color: function () {
	                return 'rgb(' + [
	                    Math.round(Math.random() * 160),
	                    Math.round(Math.random() * 160),
	                    Math.round(Math.random() * 160)
	                ].join(',') + ')';
	            }
	        },
	        emphasis: {
	            textStyle: {
	                color: 'red'
	            }
	        },
	        data: data.sort(function (a, b) {
	            return b.value  - a.value;
	        })
	    } ]
	};
	myChart.setOption(option);
	
	myChart.on('click', function (params) {
	                //alert((params.name));
	                window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
	            });
	
	window.onresize = function () {
	    myChart.resize();
	};
})();

