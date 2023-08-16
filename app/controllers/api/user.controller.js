const db = require('../../utils/db')

exports.getAllUsers = async (req, res) => {
    const users = await db.select().from('users')
    res.json(users)
}