/* eslint-disable no-useless-catch */
const client = require("./client");
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;
async function createUser({ username, password }) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT)
  try {
    
    const { rows:  [users]  } = await client.query(`
      INSERT INTO users( username, password) 
      VALUES($1, $2) 
      ON CONFLICT (username) DO NOTHING 
      RETURNING *;
    `, [ username, hashedPassword]);
    delete users.password

    return users;
  } catch (error) {
    throw error;
  }


// database functions

// user functions
//async function createUser({ username, password }) {


//const hashedPassword = await bcrypt.hash(password, SALT_COUNT)

  
}

async function getUser({ username, password }) {
  const user = await getUserByUsername(username);
  const hashedPassword = user.password;
  const passwordMatch = await bcrypt.compare(password, hashedPassword)
  // isValid will be a boolean based on wether the password matches the hashed password
  if (!passwordMatch) return
  delete user.password 
  return user

  
}

async function getUserById(userId) {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM users
      WHERE id=$1
    `, [userId]);
    delete rows[0].password

    return rows[0];
  } catch (error) {
    throw error;
  }
}




async function getUserByUsername(userName) {
  try {
    const { rows: [user] } = await client.query(`
      SELECT *
      FROM users
      WHERE username=$1;
    `, [userName]);

    return user;
  } catch (error) {
    throw error;
  }
}



module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}
