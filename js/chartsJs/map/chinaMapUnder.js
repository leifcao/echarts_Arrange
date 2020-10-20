/*
 * 默认显示全国
 * @cityName 点击时候存储的城市名称
 * @parentCode 点击时候存储的城市行政区code
 * @rootUrl  根目录路径
 * @rootName  根路径名称
 * @childCity 市模块路径
 * @childDistrict 镇模块路径
 * */

// 全国地图下钻图

var mapUnder = document.getElementById('mapUnder');
var mapUnderEcharts = echarts.init(mapUnder);

var cityName = ['全国'];
var parentCode = [100000];
let rootUrl = 'data/';
let rootName = [''];



//获取div
getJson(100000);

//根据城市的行政区code 编号获取相应的json文件
function getJson(cityCode) {
    let url = `${rootUrl}${rootName.join('')}${cityCode}.json`;
    console.log(url, '路径');
    $.get(url, function(areaJson, err) {
        // console.log(areaJson);
        getMapData(areaJson);
    }).fail(function() {
        alert('小编正在努力开发中');
        listPop();
    });
}


$('.back').click(function() {
    if (parentCode.length === 1) return;

    //删除最后一位
    listPop();
    getJson(parentCode[parentCode.length - 1]);
})





/**
 *   cityCode 行政区code 编号
 **/
//获取数据，这里我们用随机数模拟数据
function getMapData(Json) {
    let mapData = Json.features.map(item => {
        return ({
            name: item.properties.name,
            value:item.properties.center.concat(Math.random() * 1000),
            level: item.properties.level,
            cityCode: item.properties.adcode
        })
    });
    //去渲染echarts
    initEcharts(mapData, Json)
}

// 层级索引
var name = ['china'];
var idx = 0;
var pos = {
    leftPlus: 115,
    leftCur: 150,
    left: 198,
    top: 50
};

var _line = [
    [0, 0],
    [8, 11],
    [0, 22]
];
// style
var style = {
    font: '18px "Microsoft YaHei", sans-serif',
    textColor: '#eee',
    lineColor: 'rgba(147, 235, 248, .8)'
};


function initEcharts(mapData, mapJson) {
    //注册
    echarts.registerMap('Map', mapJson);

    //这里加true是为了让地图重新绘制，不然如果你有筛选的时候地图会飞出去
    mapUnderEcharts.setOption({
        backgroundColor: mapBackground,
        tooltip: {
            trigger: "item",
            formatter: p => {
                let val = p.value;
                if (window.isNaN(val)) {
                    val = 0;
                }
                let txtCon =
                    p.name + "<br>" + "<hr>" + "数值 : " + val.toFixed(2);
                return txtCon;
            }
        },
        title: {
            show: true,
            x: "center",
            y: "top",
            text: cityName[cityName.length - 1] + "地图实现点击下钻",
            textStyle: {
                color: mapEmphasis_label,
                fontSize: 13
            }
        },


        visualMap: {
            type: 'piecewise',
            bottom: "3%",
            right:'2%',
            align:'left',
            itemWidth: 15,
            itemHeight: 10,
            textStyle: {
                color: textColor,
                fontSize: 12,
            },
            pieces: [{
                value: 0,
                label: '未发生',
            }, {
                min: 0,
                max: 250,
                label: '0-250',
            }, {
                min: 250,
                max: 500,
                label: '250-500',
            },{
                min: 500,
                max: 750,
                label: '500-750',
            },{
                min: 750,
                max: 1000,
                label: '750-1000',
            }],
            inRange: {
                color:mapArea
            },
            outOfRange: {
                color: ['#eeeeee']
            }
        },

        series: [{
            name: "地图",
            type: "map",
            map: "Map",
            roam: true, //是否可缩放
            zoom: 1.2, //缩放比例
            data: mapData,
            itemStyle: {
                normal: {
                    color: '#ffffff', //地图背景色
                    borderColor: mapBorder, //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    areaColor:mapEmphasis_area,//地图背景色

                }
            },
            label: {
                normal: {
                    show: true, //显示省份标签
                    fontFamily:'sans-serif',
                    textStyle: {
                        color: map_label, //省份标签字体颜色
                        fontSize: 10,
                    }
                },
                emphasis: {
                    //对应的鼠标悬浮效果
                    show: true,
                    textStyle: {
                        color: mapEmphasis_label
                    },

                }
            }
        }],

    }, true)

    mapUnderEcharts.on('click', echartsMapClick);
}

//防止点击多次
let clickFlag = true;

//echarts点击事件
function echartsMapClick(params) {
    if (clickFlag) {
        clickFlag = false;
        console.log(params,'under')
        let cityCode = params.data.cityCode;
        let level = params.data.level;
        let name = params.data.name;
        if (cityCode != parentCode[parentCode.length - 1]) {
            if (level === 'city' || level === 'district') {
                rootName.push(`${level}/`);
            } else {
                proviceName(name);
            }
            parentCode.push(cityCode);
            cityName.push(name);
            getJson(cityCode);
        }
        clickFlag = true;
    }
}

// 数组末尾删除
function listPop() {
    rootName.pop();
    cityName.pop();
    parentCode.pop();
}


