"use strict";

import mongoose from "../index";

const Schema = mongoose.Schema;
// icon
const ModelIcon = new Schema({
  url: {
    default: "",
    type: String
  },
  name: {
    default: "",
    type: String
  }
});

export default mongoose.model("icon", ModelIcon);
