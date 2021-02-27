const mongoose = require('mongoose');

const user_schema = mongoose.Schema({

    email: { type: String, require: true },
    password: { type: String, require: true }

});

module.exports = mongoose.model('User', user_schema);