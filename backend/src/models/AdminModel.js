import { pool } from "../config/db.js";

export const getAllRecentTask = async () => {
  const result = await pool.query("SELECT * FROM activity_log");
  return result.rows;
}

export const addClientMessage = async ({fname, lname, email, message}) => {
  const query = `
    INSERT INTO contacts (fname, lname, email, message)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `

  const values = [fname, lname, email, message];
  const result = await pool.query(query, values);

  return result.rows[0];
}

export const addNewActivityLog = async ({action_type, description, target_table}) => {
  const query = `
    INSERT INTO activity_log (action_type, description, target_table)
    VALUES ($1, $2, $3)
    RETURNING *;
  `
  const values = [action_type, description, target_table];
  const result = await pool.query(query, values);

  return result.rows[0];
}
