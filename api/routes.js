const router = require("express").Router();

router.use("/news", require("./news/router"));
router.use("/organization", require("./organization/router"));
router.use("/filelist", require("./filelist/router"));
router.use("/news_type", require("./news_type/router"));
router.use("/organization_type", require("./organization_type/router"));
router.use("/filelist_type", require("./filelist_type/router"));
module.exports = router;
