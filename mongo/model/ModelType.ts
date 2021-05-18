"use strict";

import mongoose from "../index";

const Schema = mongoose.Schema;
// 大类表
const ModelType = new Schema({
  // 大类
  name: String,
  level: Number,
  children: Array,
  flagShow: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("type", ModelType);
