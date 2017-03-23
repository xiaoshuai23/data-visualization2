/**
 * Created by eng on 2017/3/22.
 */

// 1 饼型图区域bengin
var myHandle = echarts.init(document.getElementById('handle'));

optionHandle = {
    color: ['#00b1d2', "#b4da47", "#f26051"],
    title: {
        text: '案件处理',
        top: 10,
        left: 30,
        textStyle: {
            color: "#fff",
            fontWeight: 400
        }
    },
//        工具提示框
    tooltip: {
//           数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
        trigger: 'item',
//            可修改
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

//        图例组件
    legend: {
        orient: 'vertical',
        left: '50%',
        top: "30%",
        color: '#fff',
        data: ["立案总数", "立案处理总数", "未结案个数"],
        textStyle: {
            color: "#fff",
        }
    },
    series: [
        {
            name: '立案情况',
            type: 'pie',
            radius: '65%',
//                圆形坐标
            center: ['30%', '50%'],
//                label: {
//                    normal: {
//                        position: 'inner',
//                        formatter: function (params) {
//
////                移入到某个点浮出层显示的数据；
////                return params.name + ' : ' + params.value[0]+","+params.value[1];
//                            return params.name + params.value;
//                        }
//                    }
//                },

            data: [
                {value: 100, name: '立案总数'},
                {value: 80, name: '立案处理总数'},
                {value: 20, name: '未结案个数'},
            ],
            itemStyle: {
                normal:{
                    label:{
                        show:true,

                        formatter: '{b} \n ({c})'

                    },
                    labelLine:{
                        show:true
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myHandle.setOption(optionHandle);

//    饼型图区域end


//    2 树状图区域bengin

var mySource = echarts.init(document.getElementById('source'));
var data1=[320, 332, 301, 334, 390, 330, 320],
    data2=[120, 132, 101, 134, 90, 230, 210],
    data3=[220, 182, 191, 234, 290, 330, 310],
    data4=[1500, 2320, 2010, 1540, 1900, 3300, 4100],
    data5=[862, 1018, 964, 1026, 1679, 1600, 1570],
    data6=[620, 732, 701, 734, 1090, 1130, 1120],
    data7=[120, 132, 101, 134, 290, 230, 220],
    data8=[60, 72, 71, 74, 190, 130, 110];




//    树状图区域end

function getData(data){
    for(var i=0;i<data.length;i++){
        data[i]+=parseInt(5*Math.random());
    }
}

setInterval(function(){
    getData(data1);
    getData(data2);
    getData(data3);
    getData(data4);
    getData(data5);
    getData(data6);
    getData(data7);
    getData(data8);
    optionSource = {
        title: {
            text: '案件来源个数',
            top: 0,
            left: 30,
            textStyle: {
                color: "#fff",
                fontWeight: 400
            }
        },
        tooltip: {
//            坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
            trigger: 'axis',
//            坐标轴指示器配置项
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ['#f26051', "#00b1d2", "#b4da47", "#f47935", "#fcf863", "#7480be", '#e39a80', "#83d1d6"],
//      图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示
        legend: {
            left: "8%",
            top: "7%",
            textStyle: {
                color: "#fff",
                fontSize: 5
            },
            data: ["设备报警", "电话报警", "巡查报警", "日常慰问", "上门申述", "临时呼出", "手动输入", "电话漏接"]

        },
//        直角坐标系内绘图网格
        grid: {
//            show:true,
            left: '8%',
            right: '1%',
            bottom: "3%",
            top: '18%',



//            grid 区域是否包含坐标轴的刻度标签，在无法确定坐标轴标签的宽度，容器又比较小
//                  无法预留较多空间的时候，可以设为 true 防止标签溢出容器。
            containLabel: true
        },
        xAxis: [
            {
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#323c48",
                    }
                },


                type: 'category',
                data: ["家政服务", "企业服务", "中介服务", "法律服务", "出国服务"]
            }
        ],
        yAxis: [
            {
                axisLabel: {
                    show: true,
                    margin: 2,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:"#323c48"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#323c48",
                    }
                },

                type: 'value'
            }
        ],

        series: [
            {
//              bar:柱状/条形图 通过 柱形的高度/条形的宽度 来表现数据的大小，用于有至少一个类目轴或时间轴的直角坐标系上
                name: '设备报警',
                type: 'bar',
                stack: 'a',
                barWidth: 18,
                label:{
                    normal:{
                        show:true,
                        position:'inside',
                    }
                },
                data: data1
            },
            {
                name: '电话报警',
                type: 'bar',
                stack: 'a',
                barWidth: 18,
                data: data2
            },
            {
                name: '巡查报警',
                type: 'bar',
                stack: 'b',
                barWidth: 18,
                data: data3
            },
            {
                name: '日常慰问',
                type: 'bar',
                stack: 'b',
                barWidth: 18,
                data: data4
            },
            {
                name: '上门申述',
                type: 'bar',
                barWidth: 18,
                stack: 'b',
                data:data5,
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data: [
                        [{type: 'min'}, {type: 'max'}]
                    ]
                }
            },
            {
                name: '临时呼出',
                type: 'bar',
                barWidth: 18,
                stack: 'c',
                data:data6
            },
            {
                name: '手动输入',
                type: 'bar',
                barWidth: 18,
                stack: 'c',
                data: data7
            },
            {
                name: '电话漏接',
                type: 'bar',
                stack: 'c',
                barWidth: 18,
                data: data8
            }
        ]
    };
    mySource.setOption(optionSource);

},1000)








//  服务交易额begin
var myTrade = echarts.init(document.getElementById('trade'));
var  dataTime = {
    "一天": [220, 182, 191, 234, 290],
    "一周": [2200, 1820, 1910, 2340, 2900],
    "一月": [9200, 9820, 9910, 9340, 9900],
    "一年": [920000, 982000, 991000, 934000, 990000]
}
var yMax1,yMax2,yMax3,yMax4;



setInterval(function(){
    yMax1= Math.max.apply(null,  dataTime["一天"])+300;
    yMax2= Math.max.apply(null,  dataTime["一周"])+1000;
    yMax3= Math.max.apply(null,  dataTime["一月"])+4000;
    yMax4= Math.max.apply(null,  dataTime["一年"])+10000;
    var dataShadow1 = [],dataShadow2 = [],dataShadow3 = [],dataShadow4 = [];
    for (var i = 0; i <  dataTime["一天"].length; i++) {
        var temp=parseInt(10*Math.random());
        dataTime['一天'][i]+=temp;
        dataTime['一周'][i]+=temp;
        dataTime['一月'][i]+=temp;
        dataTime['一年'][i]+=temp;
        dataShadow1.push(yMax1);
        dataShadow2.push(yMax2);
        dataShadow3.push(yMax3);
        dataShadow4.push(yMax4);
    }

    optionTrade = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 1500,
                // controlStyle: {
                //     position: 'left'
                // },
                data: ['一天', '一周', '一月', "一年"],
                lineStyle:{
                    // 设置时间轴的颜色；
                    color:"#1d1e22"
                },
                // 设置轴的文本
                label:{
                    normal:{
                        textStyle:{
                            color:"#fff"
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#1d1e22',

                    }
                },
            // 被选择点的颜色
                checkpointStyle:{
                    color:'#00b1d2',
                    borderColor:'#00b1d2',
                },

            //    控制按钮的样式
                controlStyle:{
                   normal:{
                       color:"#fff"
                   },
                    emphasis:{
                        color:"pink"
                    }
                }

            },
            calculable: true,
            grid: {
                top: 80,
                bottom: 100
            },
            yAxis: {
                type: 'category',
                data: ["出国服务", "法律服务", "中介服务", "企政服务", "家政服务"],
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            xAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "#1d1e22"
                    }
                }
            },
            series: [
                {name: '出国服务', type: 'bar'},
                {name: '法律服务', type: 'bar'},
                {name: '中介服务', type: 'bar'},
                {name: '企政服务', type: 'bar'},
                {name: '家政服务', type: 'bar'}
            ]
        },
        options: [
            {
                title: {
                    text: '一天服务类型交易额',
                    top: 20,
                    left: 30,
                    textStyle: {
                        color: "#fff",
                        fontWeight: 400
                    }
                },
                series: [
                    { // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: {color: "#1d1e22"}
                        },
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        data: dataShadow1,
                        animation: false
                    },
                    {
                        type: 'bar',
//                设置柱状的宽
                        barWidth: 8,
                        label:{
                            normal:{
                                show:true,
//                        position:'insideRight',

                                position:["90%","-50%"],
                                textStyle:{
                                    color:"#fff"
                                }
                            }

                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[5, 5, 5, 5],
                                color: "#00b1d2"
                            }

                        },
                        data: dataTime["一天"]
                    }

                ]
            },

            {
                title: {
                    text: '一周服务类型交易额',
                    top: 20,
                    left: 30,
                    textStyle: {
                        color: "#fff",
                        fontWeight: 400
                    }
                },
                series: [
                    { // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: {color: "#1d1e22"}
                        },
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        data: dataShadow2,
                        animation: false
                    },
                    {
                        type: 'bar',
//                设置柱状的宽
                        barWidth: 8,
                        label:{
                            normal:{
                                show:true,
//                        position:'insideRight',

                                position:["90%","-50%"],
                                textStyle:{
                                    color:"#fff"
                                }
                            }

                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[5, 5, 5, 5],
                                color: "#00b1d2"
                            }

                        },
                        data: dataTime["一周"]
                    }

                ]
            },

            {
                title: {
                    text: '一月服务类型交易额',
                    top: 20,
                    left: 30,
                    textStyle: {
                        color: "#fff",
                        fontWeight: 400
                    }
                },
                series: [
                    { // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: {color: "#1d1e22"}
                        },
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        data: dataShadow3,
                        animation: false
                    },
                    {
                        type: 'bar',
//                设置柱状的宽
                        barWidth: 8,
                        label:{
                            normal:{
                                show:true,
//                        position:'insideRight',

                                position:["90%","-50%"],
                                textStyle:{
                                    color:"#fff"
                                }
                            }

                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[5, 5, 5, 5],
                                color: "#00b1d2"
                            }

                        },
                        data: dataTime["一月"]
                    }

                ]
            },
            {
                title: {
                    text: '一年服务类型交易额',
                    top: 20,
                    left: 30,
                    textStyle: {
                        color: "#fff",
                        fontWeight: 400
                    }
                },
                series: [
                    { // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: {color: "#1d1e22"}
                        },
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        data: dataShadow4,
                        animation: false
                    },
                    {
                        type: 'bar',
//                设置柱状的宽
                        barWidth: 8,
                        label:{
                            normal:{
                                show:true,
//                        position:'insideRight',

                                position:["90%","-50%"],
                                textStyle:{
                                    color:"#fff"
                                }
                            }

                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius:[5, 5, 5, 5],
                                color: "#00b1d2"
                            }

                        },
                        data: dataTime["一年"]
                    }

                ]
            }

        ]
    };
    myTrade.setOption(optionTrade);
},1000)






//    服务交易额end


var myChart = echarts.init(document.getElementById('map'));
//    每个点的经度和纬度
var geoCoordMap = {
    "海门": [121.15, 31.89],
    "鄂尔多斯": [109.781327, 39.608266],
    "招远": [120.38, 37.35],
    "舟山": [122.207216, 29.985295],
    "齐齐哈尔": [123.97, 47.33],
    "盐城": [120.13, 33.38],
    "赤峰": [118.87, 42.28],
    "青岛": [120.33, 36.07],
    "乳山": [121.52, 36.89],
    "金昌": [102.188043, 38.520089],
    "泉州": [118.58, 24.93],
    "莱西": [120.53, 36.86],
    "日照": [119.46, 35.42],
    "胶南": [119.97, 35.88],
    "南通": [121.05, 32.08],
    "拉萨": [91.11, 29.97],
    "云浮": [112.02, 22.93],
    "梅州": [116.1, 24.55],
    "文登": [122.05, 37.2],
    "上海": [121.48, 31.22],
    "攀枝花": [101.718637, 26.582347],
    "威海": [122.1, 37.5],
    "承德": [117.93, 40.97],
    "厦门": [118.1, 24.46],
    "汕尾": [115.375279, 22.786211],
    "潮州": [116.63, 23.68],
    "丹东": [124.37, 40.13],
    "太仓": [121.1, 31.45],
    "曲靖": [103.79, 25.51],
    "烟台": [121.39, 37.52],
    "福州": [119.3, 26.08],
    "瓦房店": [121.979603, 39.627114],
    "即墨": [120.45, 36.38],
    "抚顺": [123.97, 41.97],
    "玉溪": [102.52, 24.35],
    "张家口": [114.87, 40.82],
    "阳泉": [113.57, 37.85],
    "莱州": [119.942327, 37.177017],
    "湖州": [120.1, 30.86],
    "汕头": [116.69, 23.39],
    "昆山": [120.95, 31.39],
    "宁波": [121.56, 29.86],
    "湛江": [110.359377, 21.270708],
    "揭阳": [116.35, 23.55],
    "荣成": [122.41, 37.16],
    "连云港": [119.16, 34.59],
    "葫芦岛": [120.836932, 40.711052],
    "常熟": [120.74, 31.64],
    "东莞": [113.75, 23.04],
    "河源": [114.68, 23.73],
    "淮安": [119.15, 33.5],
    "泰州": [119.9, 32.49],
    "南宁": [108.33, 22.84],
    "营口": [122.18, 40.65],
    "惠州": [114.4, 23.09],
    "江阴": [120.26, 31.91],
    "蓬莱": [120.75, 37.8],
    "韶关": [113.62, 24.84],
    "嘉峪关": [98.289152, 39.77313],
    "广州": [113.23, 23.16],
    "延安": [109.47, 36.6],
    "太原": [112.53, 37.87],
    "清远": [113.01, 23.7],
    "中山": [113.38, 22.52],
    "昆明": [102.73, 25.04],
    "寿光": [118.73, 36.86],
    "盘锦": [122.070714, 41.119997],
    "长治": [113.08, 36.18],
    "深圳": [114.07, 22.62],
    "珠海": [113.52, 22.3],
    "宿迁": [118.3, 33.96],
    "咸阳": [108.72, 34.36],
    "铜川": [109.11, 35.09],
    "平度": [119.97, 36.77],
    "佛山": [113.11, 23.05],
    "海口": [110.35, 20.02],
    "江门": [113.06, 22.61],
    "章丘": [117.53, 36.72],
    "肇庆": [112.44, 23.05],
    "大连": [121.62, 38.92],
    "临汾": [111.5, 36.08],
    "吴江": [120.63, 31.16],
    "石嘴山": [106.39, 39.04],
    "沈阳": [123.38, 41.8],
    "苏州": [120.62, 31.32],
    "茂名": [110.88, 21.68],
    "嘉兴": [120.76, 30.77],
    "长春": [125.35, 43.88],
    "胶州": [120.03336, 36.264622],
    "银川": [106.27, 38.47],
    "张家港": [120.555821, 31.875428],
    "三门峡": [111.19, 34.76],
    "锦州": [121.15, 41.13],
    "南昌": [115.89, 28.68],
    "柳州": [109.4, 24.33],
    "三亚": [109.511909, 18.252847],
    "自贡": [104.778442, 29.33903],
    "吉林": [126.57, 43.87],
    "阳江": [111.95, 21.85],
    "泸州": [105.39, 28.91],
    "西宁": [101.74, 36.56],
    "宜宾": [104.56, 29.77],
    "呼和浩特": [111.65, 40.82],
    "成都": [104.06, 30.67],
    "大同": [113.3, 40.12],
    "镇江": [119.44, 32.2],
    "桂林": [110.28, 25.29],
    "张家界": [110.479191, 29.117096],
    "宜兴": [119.82, 31.36],
    "北海": [109.12, 21.49],
    "西安": [108.95, 34.27],
    "金坛": [119.56, 31.74],
    "东营": [118.49, 37.46],
    "牡丹江": [129.58, 44.6],
    "遵义": [106.9, 27.7],
    "绍兴": [120.58, 30.01],
    "扬州": [119.42, 32.39],
    "常州": [119.95, 31.79],
    "潍坊": [119.1, 36.62],
    "重庆": [106.54, 29.59],
    "台州": [121.420757, 28.656386],
    "南京": [118.78, 32.04],
    "滨州": [118.03, 37.36],
    "贵阳": [106.71, 26.57],
    "无锡": [120.29, 31.59],
    "本溪": [123.73, 41.3],
    "克拉玛依": [84.77, 45.59],
    "渭南": [109.5, 34.52],
    "马鞍山": [118.48, 31.56],
    "宝鸡": [107.15, 34.38],
    "焦作": [113.21, 35.24],
    "句容": [119.16, 31.95],
    "北京": [116.46, 39.92],
    "徐州": [117.2, 34.26],
    "衡水": [115.72, 37.72],
    "包头": [110, 40.58],
    "绵阳": [104.73, 31.48],
    "乌鲁木齐": [87.68, 43.77],
    "枣庄": [117.57, 34.86],
    "杭州": [120.19, 30.26],
    "淄博": [118.05, 36.78],
    "鞍山": [122.85, 41.12],
    "溧阳": [119.48, 31.43],
    "库尔勒": [86.06, 41.68],
    "安阳": [114.35, 36.1],
    "开封": [114.35, 34.79],
    "济南": [117, 36.65],
    "德阳": [104.37, 31.13],
    "温州": [120.65, 28.01],
    "九江": [115.97, 29.71],
    "邯郸": [114.47, 36.6],
    "临安": [119.72, 30.23],
    "兰州": [103.73, 36.03],
    "沧州": [116.83, 38.33],
    "临沂": [118.35, 35.05],
    "南充": [106.110698, 30.837793],
    "天津": [117.2, 39.13],
    "富阳": [119.95, 30.07],
    "泰安": [117.13, 36.18],
    "诸暨": [120.23, 29.71],
    "郑州": [113.65, 34.76],
    "哈尔滨": [126.63, 45.75],
    "聊城": [115.97, 36.45],
    "芜湖": [118.38, 31.33],
    "唐山": [118.02, 39.63],
    "平顶山": [113.29, 33.75],
    "邢台": [114.48, 37.05],
    "德州": [116.29, 37.45],
    "济宁": [116.59, 35.38],
    "荆州": [112.239741, 30.335165],
    "宜昌": [111.3, 30.7],
    "义乌": [120.06, 29.32],
    "丽水": [119.92, 28.45],
    "洛阳": [112.44, 34.7],
    "秦皇岛": [119.57, 39.95],
    "株洲": [113.16, 27.83],
    "石家庄": [114.48, 38.03],
    "莱芜": [117.67, 36.19],
    "常德": [111.69, 29.05],
    "保定": [115.48, 38.85],
    "湘潭": [112.91, 27.87],
    "金华": [119.64, 29.12],
    "岳阳": [113.09, 29.37],
    "长沙": [113, 28.21],
    "衢州": [118.88, 28.97],
    "廊坊": [116.7, 39.53],
    "菏泽": [115.480656, 35.23375],
    "合肥": [117.27, 31.86],
    "武汉": [114.31, 30.52],
    "大庆": [125.03, 46.58]
};

//    这里生成series的数据，将经纬度和value值映射起来
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
//                    value的值为[经度，纬度，value]
            });
        }
    }
    return res;
};

optionMap = {
    backgroundColor: '#27282c',

    title: {
        text: '会员数据图',
        left: 50,
        textStyle: {
            color: '#fff'
        }
    },
//        提示框组件
    tooltip: {
        trigger: 'item',
        formatter: function (params) {

//                移入到某个点浮出层显示的数据；
//                return params.name + ' : ' + params.value[0]+","+params.value[1];
            return params.name + ' : ' + params.value;
        }
    },
//        legend: {
//            orient: 'vertical',
//            y: 'bottom',
//            x:'right',
//            data:['会员'],
//            textStyle: {
//                color: '#fff'
//            }
//        },

//        是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道)
//        这里设置的是左下角颜色显示条
        visualMap: {
            // 能定义目标系列视觉形式，，也同时定义了 visualMap-piecewise 本身的视觉样式
            //inRange 同时定义了散点图的 颜色、尺寸 等，也定义了 visualMap-piecewise 本身的 颜色、尺寸 等。这二者能对应上。
            inRange: {
                //color: ['#50a3ba', '#eac736', '#d94e5d']
                color: ["#fcf863"],
                // 设置视图的大小
                symbolSize:[4]
            },

            // 设置控制器
            controller: {
                inRange: {
                    symbolSize: [10,10]
                }
            },
            
            textStyle: {
                color: '#fff'
//                color: 'red'
            }

        },



//        地理坐标系组件
    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#fcf863',
//                    地图颜色
                areaColor: '#323c48',
//                     各个地区边框颜色
                borderColor: '#27282c'

            },
            emphasis: {
                color: '#fcf863',
//                    鼠标移入时对应地区的颜色
                areaColor: '#2a333d'
            }
        }
    },
//        系列列表；每个系列通过 type 决定自己的图表类型
    series: [
        {
            name: 'mumber',
//                scatter表示散点图
            type: 'scatter',
//                使用地理坐标系
            coordinateSystem: 'geo',

            data: convertData([
                {name: "海门", value: 9},
                {name: "鄂尔多斯", value: 12},
                {name: "招远", value: 12},
                {name: "舟山", value: 12},
                {name: "齐齐哈尔", value: 14},
                {name: "盐城", value: 15},
                {name: "赤峰", value: 16},
                {name: "青岛", value: 18},
                {name: "乳山", value: 18},
                {name: "金昌", value: 19},
                {name: "泉州", value: 21},
                {name: "莱西", value: 21},
                {name: "日照", value: 21},
                {name: "胶南", value: 22},
                {name: "南通", value: 23},
                {name: "拉萨", value: 24},
                {name: "云浮", value: 24},
                {name: "梅州", value: 25},
                {name: "文登", value: 25},
                {name: "上海", value: 25},
                {name: "攀枝花", value: 25},
                {name: "威海", value: 25},
                {name: "承德", value: 25},
                {name: "厦门", value: 26},
                {name: "汕尾", value: 26},
                {name: "潮州", value: 26},
                {name: "丹东", value: 27},
                {name: "太仓", value: 27},
                {name: "曲靖", value: 27},
                {name: "烟台", value: 28},
                {name: "福州", value: 29},
                {name: "瓦房店", value: 30},
                {name: "即墨", value: 30},
                {name: "抚顺", value: 31},
                {name: "玉溪", value: 31},
                {name: "张家口", value: 31},
                {name: "阳泉", value: 31},
                {name: "莱州", value: 32},
                {name: "湖州", value: 32},
                {name: "汕头", value: 32},
                {name: "昆山", value: 33},
                {name: "宁波", value: 33},
                {name: "湛江", value: 33},
                {name: "揭阳", value: 34},
                {name: "荣成", value: 34},
                {name: "连云港", value: 35},
                {name: "葫芦岛", value: 35},
                {name: "常熟", value: 36},
                {name: "东莞", value: 36},
                {name: "河源", value: 36},
                {name: "淮安", value: 36},
                {name: "泰州", value: 36},
                {name: "南宁", value: 37},
                {name: "营口", value: 37},
                {name: "惠州", value: 37},
                {name: "江阴", value: 37},
                {name: "蓬莱", value: 37},
                {name: "韶关", value: 38},
                {name: "嘉峪关", value: 38},
                {name: "广州", value: 38},
                {name: "延安", value: 38},
                {name: "太原", value: 39},
                {name: "清远", value: 39},
                {name: "中山", value: 39},
                {name: "昆明", value: 39},
                {name: "寿光", value: 40},
                {name: "盘锦", value: 40},
                {name: "长治", value: 41},
                {name: "深圳", value: 41},
                {name: "珠海", value: 42},
                {name: "宿迁", value: 43},
                {name: "咸阳", value: 43},
                {name: "铜川", value: 44},
                {name: "平度", value: 44},
                {name: "佛山", value: 44},
                {name: "海口", value: 44},
                {name: "江门", value: 45},
                {name: "章丘", value: 45},
                {name: "肇庆", value: 46},
                {name: "大连", value: 47},
                {name: "临汾", value: 47},
                {name: "吴江", value: 47},
                {name: "石嘴山", value: 49},
                {name: "沈阳", value: 50},
                {name: "苏州", value: 50},
                {name: "茂名", value: 50},
                {name: "嘉兴", value: 51},
                {name: "长春", value: 51},
                {name: "胶州", value: 52},
                {name: "银川", value: 52},
                {name: "张家港", value: 52},
                {name: "三门峡", value: 53},
                {name: "锦州", value: 54},
                {name: "南昌", value: 54},
                {name: "柳州", value: 54},
                {name: "三亚", value: 54},
                {name: "自贡", value: 56},
                {name: "吉林", value: 56},
                {name: "阳江", value: 57},
                {name: "泸州", value: 57},
                {name: "西宁", value: 57},
                {name: "宜宾", value: 58},
                {name: "呼和浩特", value: 58},
                {name: "成都", value: 58},
                {name: "大同", value: 58},
                {name: "镇江", value: 59},
                {name: "桂林", value: 59},
                {name: "张家界", value: 59},
                {name: "宜兴", value: 59},
                {name: "北海", value: 60},
                {name: "西安", value: 61},
                {name: "金坛", value: 62},
                {name: "东营", value: 62},
                {name: "牡丹江", value: 63},
                {name: "遵义", value: 63},
                {name: "绍兴", value: 63},
                {name: "扬州", value: 64},
                {name: "常州", value: 64},
                {name: "潍坊", value: 65},
                {name: "重庆", value: 66},
                {name: "台州", value: 67},
                {name: "南京", value: 67},
                {name: "滨州", value: 70},
                {name: "贵阳", value: 71},
                {name: "无锡", value: 71},
                {name: "本溪", value: 71},
                {name: "克拉玛依", value: 72},
                {name: "渭南", value: 72},
                {name: "马鞍山", value: 72},
                {name: "宝鸡", value: 72},
                {name: "焦作", value: 75},
                {name: "句容", value: 75},
                {name: "北京", value: 79},
                {name: "徐州", value: 79},
                {name: "衡水", value: 80},
                {name: "包头", value: 80},
                {name: "绵阳", value: 80},
                {name: "乌鲁木齐", value: 84},
                {name: "枣庄", value: 84},
                {name: "杭州", value: 84},
                {name: "淄博", value: 85},
                {name: "鞍山", value: 86},
                {name: "溧阳", value: 86},
                {name: "库尔勒", value: 86},
                {name: "安阳", value: 90},
                {name: "开封", value: 90},
                {name: "济南", value: 92},
                {name: "德阳", value: 93},
                {name: "温州", value: 95},
                {name: "九江", value: 96},
                {name: "邯郸", value: 98},
                {name: "临安", value: 99},
                {name: "兰州", value: 99},
                {name: "沧州", value: 100},
                {name: "临沂", value: 103},
                {name: "南充", value: 104},
                {name: "天津", value: 105},
                {name: "富阳", value: 106},
                {name: "泰安", value: 112},
                {name: "诸暨", value: 112},
                {name: "郑州", value: 113},
                {name: "哈尔滨", value: 114},
                {name: "聊城", value: 116},
                {name: "芜湖", value: 117},
                {name: "唐山", value: 119},
                {name: "平顶山", value: 119},
                {name: "邢台", value: 119},
                {name: "德州", value: 120},
                {name: "济宁", value: 120},
                {name: "荆州", value: 127},
                {name: "宜昌", value: 130},
                {name: "义乌", value: 132},
                {name: "丽水", value: 133},
                {name: "洛阳", value: 134},
                {name: "秦皇岛", value: 136},
                {name: "株洲", value: 143},
                {name: "石家庄", value: 147},
                {name: "莱芜", value: 148},
                {name: "常德", value: 152},
                {name: "保定", value: 153},
                {name: "湘潭", value: 154},
                {name: "金华", value: 157},
                {name: "岳阳", value: 169},
                {name: "长沙", value: 175},
                {name: "衢州", value: 177},
                {name: "廊坊", value: 193},
                {name: "菏泽", value: 194},
                {name: "合肥", value: 229},
                {name: "武汉", value: 273},
                {name: "大庆", value: 279}
            ]),
//                设置图中圆点的半径，这里可以设置两个数
            symbolSize: 8,

            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },


            itemStyle: {
//                    鼠标移入某个圆点时显示的状态
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}

myChart.setOption(optionMap);
