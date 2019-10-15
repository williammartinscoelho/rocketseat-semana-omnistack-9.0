const mongoose = require("mongoose");

const UserSChema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model("User", UserSChema);