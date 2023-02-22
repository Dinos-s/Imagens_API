const mongoose = require('mongoose')

async function main(){
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(
            `mongodb+srv://GMR:Duolingo@clusterimg.hm3vskm.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log('Mongo Conectado');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main