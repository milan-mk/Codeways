import mongoose from "mongoose";
import validator from 'validator';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

//create user Schema
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: [10, "Username must be at least 10 characters."],
        maxLength: [20, "Username must be less than 20 characters."]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail , "Please provide a valid email!!"]
    },
    password:{
        type: String,
        required: true,
        minLength: [12, "Password length must be at least 12 characters."],
        select: false
    },
    confirmPassword:{
        type: String,
        required: true,
        minLength: [12, "Password length must be at least 12 characters."],
        select: false
    }
});

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        next();
    }

    this.password = argon2.hash(this.password);
});

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await argon2.verify(this.password, enteredPassword);
}

userSchema.methods.generateJsonWebToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model("User",userSchema);