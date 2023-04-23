const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.DB_CNN );
        // mongoose.set('strictQuery', true)

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        console.log('Error a la hora de inicializar BD');
    }
}

module.exports = {
    dbConnection
}

