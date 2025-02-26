import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/errorMiddleware.js';
import {User} from '../models/userSchema.js';

export const userSignup = catchAsyncErrors(async (req, res, next) =>{
    const { username, email, password, confirmPassword} = req.body;

    if(!username || !email || !password || !confirmPassword){
        return next(new ErrorHandler("Please fill the form completely!", 400));
    }

    let user = await User.findOne({ email });

    if(user){
        return next(new ErrorHandler("User Already Exists!", 400));
    }

    user = await User.create({ username, email, password, confirmPassword});

    res.status(200).json({
        success: true,
        message: "User has registered successfully!",
    });

});