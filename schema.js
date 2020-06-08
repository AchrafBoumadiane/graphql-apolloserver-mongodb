const { gql } = require("apollo-server");

const typeDefs = gql`
	type Category {
		id: ID!
		name: String!
	}

	type Author {
		id: ID!
		firstname: String!
		lastname: String!
		email: String!
		posts: [Post]
	}

	type Post {
		id: ID!
		title: String!
		article: String!
		author: Author!
		category: Category!
	}

	type Query {
		categories: [Category]!
		category(id: ID!): Category
		authors: [Author]!
		author(id: ID!): Author
		posts: [Post]!
		post(id: ID!): Post
	}

	type Mutation {
		addCategory(name: String!): Category!
		updateCategory(id: ID!, name: String): Category!
		deleteCategory(id: ID!): Boolean!

		addAuthor(
			firstname: String!
			lastname: String!
			email: String
			posts: [String]
		): Author!
		updateAuthor(
			id: ID!
			firstname: String
			lastname: String
			email: String
			posts: [String]
		): Boolean!
		deleteAuthor(id: ID!): Author!

		addPost(
			title: String!
			article: String!
			author: String!
			category: String!
		): Post!
		updatePost(
			id: ID!
			title: String
			article: String
			author: String
			category: String
		): Post!
		deletePost(id: ID!): Boolean!
	}
`;

module.exports = typeDefs;
