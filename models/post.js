const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	article: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Author",
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
	},
});

module.exports = mongoose.model("Post", PostSchema);
