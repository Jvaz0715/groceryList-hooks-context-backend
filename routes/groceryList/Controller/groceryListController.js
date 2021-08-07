const Grocery = require("../Model/GroceryList");

async function getAllGroceries(req, res) {
    try{
        let allGroceries = await Grocery.find({});
        res.json({ payload: allGroceries });
    } catch(e) {
        res.status(500).json({ message: e.message, error: e });
    }
};

async function createGrocery(req, res) {
    try {
        let createdGrocery = new Grocery({
            grocery: req.body.grocery,
        });

        let savedGrocery = await createdGrocery.save();

        res.json({ payload: savedGrocery })
    } catch(e) {
        res.status(500).json({ message: e.message, error: e });
    }
};

async function updateGrocery() {};

async function deleteGrocery() {};

async function sortGroceryByPurchased() {};

async function sortGroceryByDate() {};

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
    sortGroceryByPurchased,
    sortGroceryByDate,
}

