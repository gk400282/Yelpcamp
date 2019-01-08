var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
            },
        firstname: String,
        lastname: String
    }
});

module.exports = mongoose.model("comment", commentSchema);