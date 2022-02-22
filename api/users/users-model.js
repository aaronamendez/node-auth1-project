/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
const db = require('../../data/db-config');
function find() {
	return db('users');
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function findBy(filter) {
	return db('users').where('username', filter);
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function findById(user_id) {
	return db('users').where('user_id', user_id).select('user_id', 'username');
}

/**
  resolves to the newly inserted user { user_id, username }
 */
async function add(user) {
	let result = await db('users').insert(user);
	let [new_user] = await findById(result);

	return new_user;
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
	find,
	findBy,
	findById,
	add,
};
