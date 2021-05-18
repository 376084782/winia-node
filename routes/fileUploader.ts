var express = require("express");
var app = express();
var multer = require("multer");
var fs = require("fs");
// var upload=multer({ dest: './tmp/' })

var createFolder = function(folder) {
  try {
    fs.accessSync(folder);
  } catch (e) {
    fs.mkdirSync(folder);
  }
};

var uploadFolder = "./upload/";

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadFolder); // 保存的路径，备注：需要自己创建
  },
  filename: function(req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    let suffix = file.mimetype.split("/")[1]; //获取文件格式
    cb(null, file.fieldname + "-" + Date.now() + "." + suffix);
  }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage });

app.post("/profile", upload.single("file"), function(req, res, next) {
  //req.body contains the text fields
  console.log(req.file, "------", req.body, "-------", req.file.path);
  // res.end(req.file.buffer);
  // console.log(req.file.buffer.toString().length);

  res.end("ok");
});
app.listen(8081);
