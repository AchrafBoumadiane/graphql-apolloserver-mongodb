const Category = require("../models/category");
const Author = require("../models/author");
const Post = require("../models/post");

const resolvers = {
	Query: {
		categories: async () => {
			try {
				const categories = await Category.find();
				return categories.map((category) => {
					return category;
				});
			} catch (err) {
				throw err;
			}
		},
		category: async (parent, { id }) => {
			try {
				const category = await Category.findById(id);
				return category;
			} catch (err) {
				throw err;
			}
		},
	},
	Mutation: {
		addCategory: async (parent, { name }) => {
			try {
				const category = await Category.create({ name });
				return category;
			} catch (err) {
				throw err;
			}
		},
		updateCategory: async (parent, { id, name }) => {
			try {
				const category = await Category.findByIdAndUpdate(
					id,
					{ name },
					{ new: true }
				);
				return category;
			} catch (err) {
				throw err;
			}
		},
		deleteCategory: async (parent, { id }) => {
			try {
				const resultatDelete = Category.findById(id).remove().exec();
				if (resultatDelete) {
					return true;
				}
				return false;
			} catch (err) {
				throw err;
			}
		},
		addAuthor: async (parent, { firstname, lastname, email }) => {
			try {
				const author = await Author.create({
					firstname,
					lastname,
					email,
				});
				return author;
			} catch (err) {
				throw err;
			}
		},

		addPost: async (parent, { title, article, author, category }) => {
			try {
				const post = await Post.create({
					title,
					article,
					author,
					category,
				});
				return post;
			} catch (err) {
				throw err;
			}
		},
	},
};

module.exports = resolvers;
