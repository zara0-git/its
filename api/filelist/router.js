const router = require("express").Router();

const { list, getList, show } = require("./controller");

router.route("/").get(list);
router.route("/getList").get(getList);
//.post(create);

router.route("/:id").get(show); //.put(update).delete(destroy);

module.exports = router;
