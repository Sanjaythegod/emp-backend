const mysql = require('mysql')



const db = mysql.createConnection({
    host: 'database-1.cpxfz0aupufi.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'Smarathe!00',
    database: 'emp_database',
})




module.exports = async () => {
    db.connect(err => {
        if (err) {
            console.log('Connect to db error: ',err.message)
            return
        }
        console.log('db connected')
    })
}


