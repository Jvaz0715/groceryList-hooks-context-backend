var express = require('express');
var router = express.Router();

const {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
    // sortGroceryByPurchased,
    // sortGroceryByDate,
} = require("./Controller/groceryListController");

/* GET Home Page */
router.get('/', function(req, res, next) {
    res.json(true);
});

router.get("/get-all-groceries", getAllGroceries);

router.post("/create-grocery", createGrocery);

router.put("/update-grocery-by-id/:id", updateGrocery);

router.delete("/delete-grocery-by-id/:id", deleteGrocery);

// router.get("/get-groceries-by-purchased", sortGroceryByPurchased);

// router.get("/get-groceries-by-sort", sortGroceryByDate);

module.exports = router;