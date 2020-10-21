//选择城市进入路径
function proviceName(cityName) {
  let name = '';
  switch (cityName) {
    case '广东省':
      name = 'province_gd/';
      break;
    case '广西壮族自治区':
      name = 'province_gx/';
      break;
    case '海南省':
      name = 'province_hain/';
      break;
    case '澳门特别行政区':
      name = 'province_am/';
      break;
    case '香港特别行政区':
      name = 'province_xg/';
      break;
    case '台湾省':
      name = 'province_tw/';
      break;
    case '福建省':
      name = 'province_fj/';
      break;
    case '江西省':
      name = 'province_jx/';
      break;
    case '云南省':
      name = 'province_yn/';
      break;
    case '湖南省':
      name = 'province_hunan/';
      break;
    case '湖北省':
      name = 'province_hubei/';
      break;
    case '浙江省':
      name = 'province_zj/';
      break;
    case '安徽省':
      name = 'province_ah/';
      break;
    case '重庆市':
      name = 'province_cq/';
      break;
    case '四川省':
      name = 'province_sc/';
      break;
    case '上海省':
      name = 'province_sh/';
      break;
    case '河南省':
      name = 'province_henan/';
      break;
    case '河北省':
      name = 'province_hebei/';
      break;
    case '山东省':
      name = 'province_shandong/';
      break;
    case '山西省':
      name = 'province_shanxi/';
      break;
    case '陕西省':
      name = 'province_shan_xi/';
      break;
    case '北京市':
      name = 'province_bj/';
      break;
    case '天津市':
      name = 'province_tj/';
      break;
    case '辽宁省':
      name = 'province_ln/';
      break;
    case '吉林省':
      name = 'province_jl/';
      break;
    case '黑龙江省':
      name = 'province_hlj/';
      break;
    case '内蒙古自治区':
      name = 'province_nmg/';
      break;
    case '甘肃省':
      name = 'province_gansu/';
      break;
    case '青海省':
      name = 'province_qinghai/';
      break;
    case '西藏自治区':
      name = 'province_xizang/';
      break;
    case '新疆维吾尔自治区':
      name = 'province_xinjiang/';
      break;
    case '宁夏回族自治区':
      name = 'province_ningxia/';
      break;
    case '贵州省':
      name = 'province_guizhou/';
      break;
  }
  return name;
}
