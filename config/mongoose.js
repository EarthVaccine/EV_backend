const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jungmin:wjdals4587!@cluster0.gtr37.mongodb.net/earthvaccine?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected!')).catch(err => console.log(err));

module.exports = mongoose;