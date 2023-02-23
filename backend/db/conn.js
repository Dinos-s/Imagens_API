const mongoose = require('mongoose')
require('dotenv').config()

const user = process.env.DB_USER
const pass = process.env.DB_PASS

async function main(){
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(
            `mongodb+srv://${user}:${pass}@clusterimg.hm3vskm.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log('Mongo Conectado!');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main