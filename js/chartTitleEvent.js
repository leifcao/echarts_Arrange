// 全局事件委托
var bodyMain = document.getElementById('bodyMain');
bodyMain.onclick = ev =>{
  var ev = ev || window.event;
  var target = ev.target || ev.srcElement;
  if(target.nodeName.toLocaleLowerCase() === 'p' && target.className === 'title'){
    switch (target.innerHTML) {
      case '饼图': titleLink('饼图-饼图');break;
      case '环形饼图': titleLink('饼图-环形饼图');break;
      case '玫瑰饼图': titleLink('饼图-玫瑰饼图');break;
      case '轮播饼图': titleLink('饼图-轮播饼图');break;
      case '嵌套饼图': titleLink('饼图-嵌套饼图');break;
      case '跑道图': titleLink('饼图-跑道图');break;
      case '柱状图': titleLink('柱状图-柱状图');break;
      case '多柱图': titleLink('柱状图-多柱图');break;
      case '堆积柱图': titleLink('柱状图-堆积柱图');break;
      case '阶梯瀑布图': titleLink('柱状图-阶梯瀑布图');break;
      case '3d柱状图-阴影': titleLink('柱状图-3D阴影柱状图');break;
      case '条形图': titleLink('条形图-条形图');break;
      case '胶囊条形图': titleLink('条形图-胶囊条形图');break;
      case '温度条形图': titleLink('条形图-温度条形图');break;
      case '条形多柱图': titleLink('条形图-条形多柱图');break;
      case '条形堆积图': titleLink('条形图-条形堆积图');break;
      case '正负条形图': titleLink('条形图-正负条形图');break;
      case '折线图': titleLink('折线图-折线图');break;
      case '区域堆积图': titleLink('折线图-区域堆积图');break;
      case '双Y轴折线图': titleLink('折线图-双Y轴折线图');break;
      case '线柱混搭图': titleLink('折线图-线柱混搭图');break;
      case '正负线柱混搭图': titleLink('折线图-正负线柱混搭图');break;
      case '等分仪表盘': titleLink('仪表盘-仪表盘');break;
      case '环形仪表盘': titleLink('仪表盘-环形仪表盘');break;
      case '多个仪表盘': titleLink('仪表盘-多个仪表盘');break;
      case '水环图': titleLink('仪表盘-水环图');break;
      case '圆形仪表盘': titleLink('仪表盘-圆形仪表盘');break;
      case '雷达图': titleLink('雷达图-雷达图');break;
      case '多边雷达图': titleLink('雷达图-多边雷达图');break;
      case '圆形雷达图': titleLink('雷达图-圆形雷达图');break;
      case '漏斗图': titleLink('漏斗图-漏斗图');break;
      case '气泡图': titleLink('气泡图-气泡图');break;
      case '迁徙图': titleLink('地图-迁徙图');break;
      case '世界迁徙图': titleLink('地图-世界迁徙图');break;
      case '气泡地图': titleLink('地图-气泡地图');break;
      case '地图轮播': titleLink('地图-地图轮播');break;
      case '下钻图': titleLink('地图-下钻图');break;
      case '大区下钻图': titleLink('地图-大区下钻图');break;
      case '词云图': titleLink('词云图-词云图');break;
      case '数据图表-线柱': titleLink('数据图表-线柱');break;
      case '数据图表-堆积': titleLink('数据图表-堆积');break;
      case 'k线图': titleLink('k线图-k线图');break;
      case '矩形树图': titleLink('矩形树图-矩形树图');break;
      case '桑基图': titleLink('桑基图-桑基图');break;
      case '关系图': titleLink('关系图-关系图');break;
      case '横向-树图': titleLink('树图-横向树图');break;
      case '纵向-树图': titleLink('树图-纵向树图');break;
    }
    // console.log(target.innerHTML,target.className)
  }
}

// 图表点击跳转新页面
const titleLink  = params =>{
  let url = '/mdp/report?rptname='+ encodeURI(params) +'.mrt';
  window.open(url);
}
