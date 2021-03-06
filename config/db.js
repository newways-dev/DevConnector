const mongoose = require('mongoose')
const colors = require('colors')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
       await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
       console.log('MongoDB Connected...'.green.bold);
    } catch (err) {
        console.error(err.message)
        // Exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB