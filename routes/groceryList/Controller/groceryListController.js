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

async function updateGrocery(req, res) {
    try {
        let updatedGrocery = await Grocery.findByIdAndUpdate(req.params.id, req.body, {new: true });

        res.json({ payload: updatedGrocery });
    } catch (e) {
        res.status(500).json({ message: e.message, error: e });
    }
};

async function deleteGrocery(req, res) {
    try {
        let deletedGrocery = await Grocery.findByIdAndDelete(req.params.id);

        res.json({ payload: deletedGrocery});
    } catch (e) {
        res.status(500).json({ message: e.message, error: e });
    }
};

async function sortGroceryByPurchased(req, res) {
    try {
        let isPurchased = req.query.isPurchased;
        let isPurchasedOrder = isPurchased === "true" ? true : false;
        let sortByDate = req.query.sort ? req.query.sort : null;
        let finalSort;

        if(!sortByDate) {
            finalSort = null;
        } else {
            finalSort = sortByDate === "asc" ? 1 : -1;
        };

        let foundGrocery = await Grocery.find({ isPurchased: isPurchasedOrder}).sort({dateAdded: finalSort });

        res.json({ payload: foundGrocery });
    } catch(e) {
        res.status(500).json({ message: e.message, error: e });
    }
};

async function sortGroceryByDate() {};

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
    sortGroceryByPurchased,
    sortGroceryByDate,
}

