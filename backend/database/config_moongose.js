const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect( 'mongodb+srv://woler:woler@cluster0.b7pzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
        

    } catch (error) {
        console.log(error);
        throw new Error('Error base de datos');
    }


}

module.exports = {
    dbConnection
}