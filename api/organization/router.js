const router = require("express").Router();

const {
  list,
  getList,
  show,
  update,
  destroy,
  uploadFile,
  create,
} = require("./controller");

router.route("/").get(list).post(create);
router.route("/getList").get(getList);
//.post(create);

router.route("/:id").get(show).put(update).delete(destroy);
router.route("/upload-file").post(uploadFile);
module.exports = router;
