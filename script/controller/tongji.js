$(function() {
	var date = new Date();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	$('#time').val(year + "-" + month);
	$('#time-add').on('click', function() {
		if (month == 12) {
			month = 1;
			year++;
			$('#time').val(year + "-" + month);
		} else {
			month++;
			$('#time').val(year + "-" + month);
		}
	});
	$('#time-sub').on('click', function() {
		if (month == 1) {
			month = 12;
			year--;
			$('#time').val(year + "-" + month);
		} else {
			month--;
			$('#time').val(year + "-" + month);
		}
	});
});
$(function(){
	$('#')
});
$(function() {
	var optionPie = {
		animation:false,
		tooltip: {
			trigger: 'item',
			textStyle: {
				fontSize: '16',
				fontWeight: 'bolder'
			},
			formatter: "{b} : {c} ({d}%)"
		},

		series: [{
			type: 'pie',
			radius: ['30%', '60%'],
			itemStyle: {
				normal: {
					label: {
						show: true
					},
					labelLine: {
						show: true
					}
				},
				emphasis: {
					label: {
						show: false
					}
				}
			},
			data: [{
				value: 2000,
				name: '食品烟酒'
			}, {
				value: 1660,
				name: '衣着'
			}, {
				value: 800,
				name: '居住'
			}, {
				value: 1660,
				name: '生活用品及服务'
			}, {
				value: 700,
				name: '交通通信'
			}, {
				value: 2000,
				name: '教育文化娱乐'
			}, {
				value: 200,
				name: '医疗保障'
			}, {
				value: 1000,
				name: '其他用品及服务'
			}]
		}]
	};
	optionBar = {
		animation:false,
		grid: {
			borderWidth: 0,
			y: 10,
			y2: 10,
			x: 10,
			x2: 150
		},
		tooltip: {
			trigger: 'item',
			textStyle: {
				fontSize: '16',
				fontWeight: 'bolder'
			},
			formatter: "{b} : ￥{c}"
		},
		yAxis: [{
			type: 'category',
			data: ['工资性收入', '非农业生产经营收入', '财产性收入', '转移性收入']

		}],
		xAxis: [{
			show: false,
			type: 'value'
		}],
		series: [{
			type: 'bar',
			itemStyle: {
				normal: {
					color: function(params) {
						// build a color map as your need.
						var colorList = ['#3ac4f0', '#6479dd', '#64e255',
							'#2ce6d4', '#64ecb5', '#b2e941', '#b08ee8',
							'#9282de'
						];
						return colorList[params.dataIndex]
					},
					label: {
						show: true,
						formatter: '{b} {c}',
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [5000, 1000, 3021, 100]
		}]
	};
	var bodyWidthNum = document.body.scrollWidth * 0.95;
	var bodyWidth = bodyWidthNum + "px";
	$('#echartsOutter').css({
		"width": bodyWidth,
		"height": bodyWidth,
		"background-color": '#FFFFFF',
		"border-radius": "10px",
		"margin-left":"2.5%",
		"margin-top":"2.5%"
	})
	$('#echartPie').css({
		"width": bodyWidth,
		"height": bodyWidth,
		"display":"none"
	});
	$('#echartBar').css({
		"width": bodyWidth,
		"height": bodyWidth
	});
	var PieEChart = echarts.init(document.getElementById('echartPie'));
	var BarEChart = echarts.init(document.getElementById('echartBar'));
	BarEChart.setOption(optionBar);
	PieEChart.setOption(optionPie);
	$('#selectEchart').on('click',function(){
		var name=$('#echart').attr('name');
		if(name == "Bar"){
			$('#echartBar').show();
			$('#echartPie').hide();
			$('#echart').attr('name','Pie');
			$('#echart').html('饼图');
			$('#icon-echart').html('<img src="../image/icon_form@1.5x.png"/>');
		}else{
			$('#echartPie').show();
			$('#echartBar').hide();
			$('#echart').attr('name','Bar');
			$('#echart').html('柱状图');
			$('#icon-echart').html('<img src="../image/icon_column@1.5x.png"/>');
		}
		
	});
});