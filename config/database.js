const mongoose = require('mongoose')

const connectDatabase = () => {

    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).then(
        (data) => {
            console.log(`Mongodb connected with sever ${data.connection.host}`)
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )

}

module.exports = connectDatabase;