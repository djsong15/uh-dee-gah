const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 12;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    placesList: Array,
});

userSchema.pre('save', (next) => {
    if (!this.isModified('password')) return next();
    bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
        if (err) return next(`bcrypt ERROR: ${err}`);
        return next();
    });
});

module.exports = mongoose.model('User', userSchema);