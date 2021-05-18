"use strict";

import mongoose from "../index";

const Schema = mongoose.Schema;
// 图鉴表，根据等级
const ModelBanner = new Schema({
  title: {
    type: String,
    default: ""
  },
  // 图片地址
  url: {
    type: String,
    default: ""
  },
  // 绑定的产品id
  productId: {
    type: String,
    default: ""
  },
  //排序
  index: {
    type: Number,
    default: 0
  }
});

export default mongoose.model("banner", ModelBanner);
