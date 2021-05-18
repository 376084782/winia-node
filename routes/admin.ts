import ModelBanner from "../mongo/model/ModelBanner";
import ModelType from "../mongo/model/ModelType";
import ModelProduct from "../mongo/model/ModelProduct";
import ModelIcon from "../mongo/model/ModelIcon";

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/login", async (req, res, next) => {
  res.send({
    code: 0,
    data: {}
  });
});

router.get("/product/list", async (req, res, next) => {
  let list = await ModelProduct.find();
  res.send({
    code: 0,
    data: list
  });
});

router.get("/product/detail", async (req, res, next) => {
  let data = req.query;
  let target = await ModelProduct.findOne({ _id: data._id });
  res.send({
    code: 0,
    data: target
  });
});

router.post("/product/edit", async (req, res, next) => {
  let data = req.query;
  let target = await ModelProduct.findOne({ _id: data._id });
  if (!target) {
    // 创建
    target = await ModelProduct.create(data, {
      writeConcern: 0
    });
  } else {
    // 查询后做修改
    await target.updateOne(data);
  }
  res.send({
    code: 0,
    data: target
  });
});
router.get("/type/list", async (req, res, next) => {
  let list = await ModelType.find();
  res.send({
    code: 0,
    data: list
  });
});
router.post("/type/edit", async (req, res, next) => {
  let data = req.query;
  let type_name = data.type_name;
  let target = await ModelType.findOne({ _id: data._id });
  if (!target) {
    // 创建
    target = await ModelType.create(data, {
      writeConcern: 0
    });
  } else {
    // 查询后做修改
    await target.updateOne(data);
  }
  res.send({
    code: 0,
    data: target
  });
});

router.get("/icon/list", async (req, res, next) => {
  let list = await ModelIcon.find();
  res.send({
    code: 0,
    data: list
  });
});
router.post("/icon/edit", async (req, res, next) => {
  let data = req.query;
  let target = await ModelIcon.findOne({ _id: data._id });
  if (!target) {
    // 创建
    target = await ModelIcon.create(data, {
      writeConcern: 0
    });
  } else {
    // 查询后做修改
    await target.updateOne(data);
  }
  res.send({
    code: 0,
    data: target
  });
});

router.get("/banner/list", async (req, res, next) => {
  let list = await ModelBanner.find();
  res.send({
    code: 0,
    data: list
  });
});
router.post("/banner/edit", async (req, res, next) => {
  let data = req.query;
  let target = await ModelBanner.findOne({ _id: data._id });
  if (!target) {
    // 创建
    target = await ModelBanner.create(data, {
      writeConcern: 0
    });
  } else {
    // 查询后做修改
    await target.updateOne(data);
  }
  res.send({
    code: 0,
    data: target
  });
});

let fs = require("fs");
let multer = require("multer");
let path = require("path");

let upload = multer({ dest: "upload_tmp/" });

router.post("/upload/", upload.any(), function(req, res, next) {
  console.log(req.files[0]); // 上传的文件信息

  var des_file = "./upload_tmp/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data) {
    fs.writeFile(des_file, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        let response = {
          message: "File uploaded successfully",
          filename: req.files[0].originalname
        };
        console.log(response);
        res.end(JSON.stringify(response));
      }
    });
  });
});

var url = require("url");
router.get("/img", (req, res, next) => {
  let data = req.query;
  var des_file = "./upload_tmp/" + data.filename;
  fs.readFile(des_file, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
