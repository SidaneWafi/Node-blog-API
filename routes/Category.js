const express = require("express");
const router = express.Router();
const { categoryController } = require("../controllers");
const { addCategoryValidator ,idValidators} = require("../validators/category");
const validate =require("../validators/validate");
const isAuth =require("../middleware/isAuth");
const isAdmin=require("../middleware/isAdmin");


router.post("/",addCategoryValidator,validate,isAuth ,isAdmin,categoryController.addCategory);
router.put(
    "/:id",
    isAuth,
    isAdmin,
    idValidators,
    validate,
    categoryController.updateCategory
  );

router.delete("/:id",isAuth ,isAdmin ,idValidators,validate,categoryController.deleteCategory);
router.get("/",isAuth ,categoryController.getCategories);
router.get("/:id",isAuth,idValidators,validate,categoryController.getCategory)
module.exports = router;
