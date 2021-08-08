const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({

    grocery: {
        type: String,
    },
    isPurchased: {
        type: Boolean,
        default: false,
    },
    dateAdded: {
        type: Date,
        default: () => Date.now(), // default with called function makes sure each grocery gets its on time added... without, it will just be the DATE.NOW of when we create model
    },
});

module.exports = mongoose.model("grocery", grocerySchema);