"use strict";

import mongoose from "../index";

const Schema = mongoose.Schema;
// 明星产品
const ModelProduct = new Schema({
  // 是否显示为明星产品
  isStar: {
    default: false,
    type: Boolean
  },
  // 产品型号简称
  model: {
    default: "",
    type: String
  },
  // 名称
  name: {
    default: "",
    type: String
  },
  // 简介，显示在明星产品最底下一行
  starContent: {
    default: "",
    type: String
  },
  // 产品图
  imgList: {
    default: [],
    type: Array
  },
  // 详情
  detailPicList: {
    default: [],
    type: Array
  },
  // 规格
  sizePicList: {
    default: [],
    type: Array
  },
  // 所属标签
  type: {
    default: "",
    type: String
  }
});

export default mongoose.model("mainProduct", ModelProduct);
