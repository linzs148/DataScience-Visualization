// 柱状图模块1
(function() {
	// 1实例化对象
	var myChart = echarts.init(document.querySelector(".bar .chart"));
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
// 柱状图2
(function() {
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	// 1. 实例化对象
	var myChart = echarts.init(document.querySelector(".bar2 .chart"));
	// 2. 指定配置和数据
	var option = {
		grid: {
			top: "10%",
			left: "22%",
			bottom: "10%"
			// containLabel: true
		},
		// 不显示x轴的相关信息
		xAxis: {
			show: false
		},
		yAxis: [{
				type: "category",
				inverse: true,
				data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
				// 不显示y轴的线
				axisLine: {
					show: false
				},
				// 不显示刻度
				axisTick: {
					show: false
				},
				// 把刻度标签里面的文字颜色设置为白色
				axisLabel: {
					color: "#fff"
				}
			},
			{
				data: [702, 350, 610, 793, 664],
				inverse: true,
				// 不显示y轴的线
				axisLine: {
					show: false
				},
				// 不显示刻度
				axisTick: {
					show: false
				},
				// 把刻度标签里面的文字颜色设置为白色
				axisLabel: {
					color: "#fff"
				}
			}
		],
		series: [{
				name: "条",
				type: "bar",
				data: [70, 34, 60, 78, 69],
				yAxisIndex: 0,
				// 修改第一组柱子的圆角
				itemStyle: {
					barBorderRadius: 20,
					// 此时的color 可以修改柱子的颜色
					color: function(params) {
						// params 传进来的是柱子对象
						// console.log(params);
						// dataIndex 是当前柱子的索引号
						return myColor[params.dataIndex];
					}
				},
				// 柱子之间的距离
				barCategoryGap: 50,
				//柱子的宽度
				barWidth: 10,
				// 显示柱子内的文字
				label: {
					show: true,
					position: "inside",
					// {c} 会自动的解析为 数据  data里面的数据
					formatter: "{c}%"
				}
			},
			{
				name: "框",
				type: "bar",
				barCategoryGap: 50,
				barWidth: 15,
				yAxisIndex: 1,
				data: [100, 100, 100, 100, 100],
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 3,
					barBorderRadius: 15
				}
			}
		]
	};

	// 3. 把配置给实例对象
	myChart.setOption(option);
	// 4. 让图表跟随屏幕自动的去适应
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
// 折线图1模块制作
(function() {
	var yearData = [{
			year: "2020", // 年份
			data: [
				// 两个数组是因为有两条线
				[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
				[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			]
		},
		{
			year: "2021", // 年份
			data: [
				// 两个数组是因为有两条线
				[123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
				[143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
			]
		}
	];
	// 1. 实例化对象
	var myChart = echarts.init(document.querySelector(".line .chart"));
	// 2.指定配置
	var option = {
		// 通过这个color修改两条线的颜色
		color: ["#00f2f1", "#ed3f35"],
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
		series: [{
				name: "新增粉丝",
				type: "line",
				// true 可以让我们的折线显示带有弧度
				smooth: true,
				data: yearData[0].data[0]
			},
			{
				name: "新增游客",
				type: "line",
				smooth: true,
				data: yearData[0].data[1]
			}
		]
	};

	// 3. 把配置给实例对象
	myChart.setOption(option);
	// 4. 让图表跟随屏幕自动的去适应
	window.addEventListener("resize", function() {
		myChart.resize();
	});

	// 5.点击切换效果
	$(".line h2").on("click", "a", function() {
		// alert(1);
		// console.log($(this).index());
		// 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
		// console.log(yearData[$(this).index()]);
		var obj = yearData[$(this).index()];
		option.series[0].data = obj.data[0];
		option.series[1].data = obj.data[1];
		// 需要重新渲染
		myChart.setOption(option);
	});
})();
// 折线图2 模块制作
(function() {
	var myChart = echarts.init(document.querySelector(".line2 .chart"));
	var option = {
		tooltip: {
			trigger: "axis"
		},
		legend: {
			top: "0%",
			data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},

		grid: {
			left: "10",
			top: "30",
			right: "10",
			bottom: "10",
			containLabel: true
		},
		xAxis: [{
			type: "category",
			boundaryGap: false,
			// x轴更换数据
			data: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
				"24",
				"25",
				"26",
				"26",
				"28",
				"29",
				"30"
			],
			// 文本颜色为rgba(255,255,255,.6)  文字大小为 12
			axisLabel: {
				textStyle: {
					color: "rgba(255,255,255,.6)",
					fontSize: 12
				}
			},
			// x轴线的颜色为   rgba(255,255,255,.2)
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,.2)"
				}
			}
		}],
		yAxis: [{
			type: "value",
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)"
				}
			},
			axisLabel: {
				textStyle: {
					color: "rgba(255,255,255,.6)",
					fontSize: 12
				}
			},
			// 修改分割线的颜色
			splitLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)"
				}
			}
		}],
		series: [{
				name: "邮件营销",
				type: "line",
				smooth: true,
				// 单独修改当前线条的样式
				lineStyle: {
					color: "#0184d5",
					width: "2"
				},
				// 填充颜色设置
				areaStyle: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[{
								offset: 0,
								color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
							},
							{
								offset: 0.8,
								color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
							}
						],
						false
					),
					shadowColor: "rgba(0, 0, 0, 0.1)"
				},
				// 设置拐点
				symbol: "circle",
				// 拐点大小
				symbolSize: 8,
				// 开始不显示拐点， 鼠标经过显示
				showSymbol: false,
				// 设置拐点颜色以及边框
				itemStyle: {
					color: "#0184d5",
					borderColor: "rgba(221, 220, 107, .1)",
					borderWidth: 12
				},
				data: [
					30,
					40,
					30,
					40,
					30,
					40,
					30,
					60,
					20,
					40,
					30,
					40,
					30,
					40,
					30,
					40,
					30,
					60,
					20,
					40,
					30,
					40,
					30,
					40,
					30,
					40,
					20,
					60,
					50,
					40
				]
			},
			{
				name: "联盟广告",
				type: "line",
				smooth: true,
				lineStyle: {
					normal: {
						color: "#00d887",
						width: 2
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[{
									offset: 0,
									color: "rgba(0, 216, 135, 0.4)"
								},
								{
									offset: 0.8,
									color: "rgba(0, 216, 135, 0.1)"
								}
							],
							false
						),
						shadowColor: "rgba(0, 0, 0, 0.1)"
					}
				},
				// 设置拐点 小圆点
				symbol: "circle",
				// 拐点大小
				symbolSize: 5,
				// 设置拐点颜色以及边框
				itemStyle: {
					color: "#00d887",
					borderColor: "rgba(221, 220, 107, .1)",
					borderWidth: 12
				},
				// 开始不显示拐点， 鼠标经过显示
				showSymbol: false,
				data: [
					130,
					10,
					20,
					40,
					30,
					40,
					80,
					60,
					20,
					40,
					90,
					40,
					20,
					140,
					30,
					40,
					130,
					20,
					20,
					40,
					80,
					70,
					30,
					40,
					30,
					120,
					20,
					99,
					50,
					20
				]
			}
		]
	};
	myChart.setOption(option);
	// 4. 让图表跟随屏幕自动的去适应
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
// 饼形图1
(function() {
	// 1. 实例化对象
	var myChart = echarts.init(document.querySelector(".pie .chart"));
	// 2.指定配置
	var option = {
		color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},

		legend: {
			bottom: "0%",
			// 修改小图标的大小
			itemWidth: 10,
			itemHeight: 10,
			// 修改图例组件的文字为 12px
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		series: [{
			name: "年龄分布",
			type: "pie",
			// 这个radius可以修改饼形图的大小
			// radius 第一个值是内圆的半径 第二个值是外圆的半径
			radius: ["40%", "60%"],
			center: ["50%", "45%"],
			avoidLabelOverlap: false,
			// 图形上的文字
			label: {
				show: false,
				position: "center"
			},
			// 链接文字和图形的线是否显示
			labelLine: {
				show: false
			},
			data: [{
					value: 1,
					name: "0岁以下"
				},
				{
					value: 4,
					name: "20-29岁"
				},
				{
					value: 2,
					name: "30-39岁"
				},
				{
					value: 2,
					name: "40-49岁"
				},
				{
					value: 1,
					name: "50岁以上"
				}
			]
		}]
	};

	// 3. 把配置给实例对象
	myChart.setOption(option);
	// 4. 让图表跟随屏幕自动的去适应
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

// 词云
(function() {
	var myChart = echarts.init(document.querySelector(".wordcloud .chart"));
	
	var keywords = {
	  "visualMap": 22199,
	  "continuous": 10288,
	  "contoller": 620,
	  "series": 274470,
	  "gauge": 12311,
	  "detail": 1206,
	  "piecewise": 4885,
	  "textStyle": 32294,
	  "markPoint": 18574,
	  "pie": 38929,
	  "roseType": 969,
	  "label": 37517,
	  "emphasis": 12053,
	  "yAxis": 57299,
	  "name": 15418,
	  "type": 22905,
	  "gridIndex": 5146,
	  "normal": 49487,
	  "itemStyle": 33837,
	  "min": 4500,
	  "silent": 5744,
	  "animation": 4840,
	  "offsetCenter": 232,
	  "inverse": 3706,
	  "borderColor": 4812,
	  "markLine": 16578,
	  "line": 76970,
	  "radiusAxis": 6704,
	  "radar": 15964,
	  "data": 60679,
	  "dataZoom": 24347,
	  "tooltip": 43420,
	  "toolbox": 25222,
	  "geo": 16904,
	  "parallelAxis": 4029,
	  "parallel": 5319,
	  "max": 3393,
	  "bar": 43066,
	  "heatmap": 3110,
	  "map": 20285,
	  "animationDuration": 3425,
	  "animationDelay": 2431,
	  "splitNumber": 5175,
	  "axisLine": 12738,
	  "lineStyle": 19601,
	  "splitLine": 7133,
	  "axisTick": 8831,
	  "axisLabel": 17516,
	  "pointer": 590,
	  "color": 23426,
	  "title": 38497,
	  "formatter": 15214,
	  "slider": 7236,
	  "legend": 66514,
	  "grid": 28516,
	  "smooth": 1295,
	  "smoothMonotone": 696,
	  "sampling": 757,
	  "feature": 12815,
	  "saveAsImage": 2616,
	  "polar": 6279,
	  "calculable": 879,
	  "backgroundColor": 9419,
	  "excludeComponents": 130,
	  "show": 20620,
	  "text": 2592,
	  "icon": 2782,
	  "dimension": 478,
	  "inRange": 1060,
	  "animationEasing": 2983,
	  "animationDurationUpdate": 2259,
	  "animationDelayUpdate": 2236,
	  "animationEasingUpdate": 2213,
	  "xAxis": 89459,
	  "angleAxis": 5469,
	  "showTitle": 484,
	  "dataView": 2754,
	  "restore": 932,
	  "timeline": 10104,
	  "range": 477,
	  "value": 5732,
	  "precision": 878,
	  "target": 1433,
	  "zlevel": 5361,
	  "symbol": 8718,
	  "interval": 7964,
	  "symbolSize": 5300,
	  "showSymbol": 1247,
	  "inside": 8913,
	  "xAxisIndex": 3843,
	  "orient": 4205,
	  "boundaryGap": 5073,
	  "nameGap": 4896,
	  "zoomLock": 571,
	  "hoverAnimation": 2307,
	  "legendHoverLink": 3553,
	  "stack": 2907,
	  "throttle": 466,
	  "connectNulls": 897,
	  "clipOverflow": 826,
	  "startValue": 551,
	  "minInterval": 3292,
	  "opacity": 3097,
	  "splitArea": 4775,
	  "filterMode": 635,
	  "end": 409,
	  "left": 6475,
	  "funnel": 2238,
	  "lines": 6403,
	  "baseline": 431,
	  "align": 2608,
	  "coord": 897,
	  "nameTextStyle": 7477,
	  "width": 4338,
	  "shadowBlur": 4493,
	  "effect": 929,
	  "period": 225,
	  "areaColor": 631,
	  "borderWidth": 3654,
	  "nameLocation": 4418,
	  "position": 11723,
	  "containLabel": 1701,
	  "scatter": 10718,
	  "areaStyle": 5310,
	  "scale": 3859,
	  "pieces": 414,
	  "categories": 1000,
	  "selectedMode": 3825,
	  "itemSymbol": 273,
	  "effectScatter": 7147,
	  "fontStyle": 3376,
	  "fontSize": 3386,
	  "margin": 1034,
	  "iconStyle": 2257,
	  "link": 1366,
	  "axisPointer": 5245,
	  "showDelay": 896,
	  "graph": 22194,
	  "subtext": 1442,
	  "selected": 2881,
	  "barCategoryGap": 827,
	  "barGap": 1094,
	  "barWidth": 1521,
	  "coordinateSystem": 3622,
	  "barBorderRadius": 284,
	  "z": 4014,
	  "polarIndex": 1456,
	  "shadowOffsetX": 3046,
	  "shadowColor": 3771,
	  "shadowOffsetY": 2475,
	  "height": 1988,
	  "barMinHeight": 575,
	  "lang": 131,
	  "symbolRotate": 2752,
	  "symbolOffset": 2549,
	  "showAllSymbol": 942,
	  "transitionDuration": 993,
	  "bottom": 3724,
	  "fillerColor": 229,
	  "nameMap": 1249,
	  "barMaxWidth": 747,
	  "radius": 2103,
	  "center": 2425,
	  "magicType": 3276,
	  "labelPrecision": 248,
	  "option": 654,
	  "seriesIndex": 935,
	  "controlPosition": 121,
	  "itemGap": 3188,
	  "padding": 3481,
	  "shadowStyle": 347,
	  "boxplot": 1394,
	  "labelFormatter": 264,
	  "realtime": 631,
	  "dataBackgroundColor": 239,
	  "showDetail": 247,
	  "showDataShadow": 217,
	  "x": 684,
	  "valueDim": 499,
	  "onZero": 931,
	  "right": 3255,
	  "clockwise": 1035,
	  "itemWidth": 1732,
	  "trigger": 3840,
	  "axis": 379,
	  "selectedOffset": 670,
	  "startAngle": 1293,
	  "minAngle": 590,
	  "top": 4637,
	  "avoidLabelOverlap": 870,
	  "labelLine": 3785,
	  "sankey": 2933,
	  "endAngle": 213,
	  "start": 779,
	  "roam": 1738,
	  "fontWeight": 2828,
	  "fontFamily": 2490,
	  "subtextStyle": 2066,
	  "indicator": 853,
	  "sublink": 708,
	  "zoom": 1038,
	  "subtarget": 659,
	  "length": 1060,
	  "itemSize": 505,
	  "controlStyle": 452,
	  "yAxisIndex": 2529,
	  "edgeLabel": 1188,
	  "radiusAxisIndex": 354,
	  "scaleLimit": 1313,
	  "geoIndex": 535,
	  "regions": 1892,
	  "itemHeight": 1290,
	  "nodes": 644,
	  "candlestick": 3166,
	  "crossStyle": 466,
	  "edges": 369,
	  "links": 3277,
	  "layout": 846,
	  "barBorderColor": 721,
	  "barBorderWidth": 498,
	  "treemap": 3865,
	  "y": 367,
	  "valueIndex": 704,
	  "showLegendSymbol": 482,
	  "mapValueCalculation": 492,
	  "optionToContent": 264,
	  "handleColor": 187,
	  "handleSize": 271,
	  "showContent": 1853,
	  "angleAxisIndex": 406,
	  "endValue": 327,
	  "triggerOn": 1720,
	  "contentToOption": 169,
	  "buttonColor": 71,
	  "rotate": 1144,
	  "hoverLink": 335,
	  "outOfRange": 491,
	  "textareaColor": 58,
	  "textareaBorderColor": 58,
	  "textColor": 60,
	  "buttonTextColor": 66,
	  "category": 336,
	  "hideDelay": 786,
	  "alwaysShowContent": 1267,
	  "extraCssText": 901,
	  "effectType": 277,
	  "force": 1820,
	  "rippleEffect": 723,
	  "edgeSymbolSize": 329,
	  "showEffectOn": 271,
	  "gravity": 199,
	  "edgeLength": 193,
	  "layoutAnimation": 152,
	  "length2": 169,
	  "enterable": 957,
	  "dim": 83,
	  "readOnly": 143,
	  "levels": 444,
	  "textGap": 256,
	  "pixelRatio": 84,
	  "nodeScaleRatio": 232,
	  "draggable": 249,
	  "brushType": 158,
	  "radarIndex": 152,
	  "large": 182,
	  "edgeSymbol": 675,
	  "largeThreshold": 132,
	  "leafDepth": 73,
	  "childrenVisibleMin": 73,
	  "minSize": 35,
	  "maxSize": 35,
	  "sort": 90,
	  "funnelAlign": 61,
	  "source": 336,
	  "nodeClick": 200,
	  "curveness": 350,
	  "areaSelectStyle": 104,
	  "parallelIndex": 52,
	  "initLayout": 359,
	  "trailLength": 116,
	  "boxWidth": 20,
	  "back": 53,
	  "rewind": 110,
	  "zoomToNodeRatio": 80,
	  "squareRatio": 60,
	  "parallelAxisDefault": 358,
	  "checkpointStyle": 440,
	  "nodeWidth": 49,
	  "color0": 62,
	  "layoutIterations": 56,
	  "nodeGap": 54,
	  "color(Array": 76,
	  "<string>)": 76,
	  "repulsion": 276,
	  "tiled": 105,
	  "currentIndex": 145,
	  "axisType": 227,
	  "loop": 97,
	  "playInterval": 112,
	  "borderColor0": 23,
	  "gap": 43,
	  "autoPlay": 123,
	  "showPlayBtn": 25,
	  "breadcrumb": 119,
	  "colorMappingBy": 85,
	  "id": 18,
	  "blurSize": 85,
	  "minOpacity": 50,
	  "maxOpacity": 54,
	  "prevIcon": 12,
	  "children": 21,
	  "shape": 98,
	  "nextIcon": 12,
	  "showNextBtn": 17,
	  "stopIcon": 21,
	  "visibleMin": 83,
	  "visualDimension": 97,
	  "colorSaturation": 56,
	  "colorAlpha": 66,
	  "emptyItemWidth": 10,
	  "inactiveOpacity": 4,
	  "activeOpacity": 4,
	  "showPrevBtn": 19,
	  "playIcon": 26,
	  "ellipsis": 19,
	  "gapWidth": 19,
	  "borderColorSaturation": 10,
	  "handleIcon": 2,
	  "handleStyle": 6,
	  "borderType": 1,
	  "constantSpeed": 1,
	  "polyline": 2,
	  "blendMode": 1,
	  "dataBackground": 1,
	  "textAlign": 1,
	  "textBaseline": 1,
	  "brush": 3
	};
	
	var data = [];
	for (var name in keywords) {
	    data.push({
	        name: name,
	        value: Math.sqrt(keywords[name])
	    })
	}
	
	var option = {
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
