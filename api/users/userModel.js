const pool = require("../../conn/db")

module.exports = {
    create: (data, callback) => {
        pool.query(
            `SELECT * FROM registration`,
            `INSERT INTO registration (firstName, lastName, gender, email, password, number) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fileds ) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    }
}