import httpStatus from "http-status";
import { AppError, asyncHandler } from "../utils/index.js";
import { userRegister } from '../validation/auth.validation.js'

const register = asyncHandler(async (req, res) => {
    const { error } = userRegister.validate(req.body);
    
    if (error?.details?.[0]?.message)
        throw new AppError(httpStatus.BAD_REQUEST, `${error.details[0].message}`);

    res.status(httpStatus.CREATED).send('the incase');
});

export { register }