import httpStatus from "http-status";
import { AppError, asyncHandler } from "../utils/index.js";
import { userRegister } from '../validation/auth.validation.js'
import { createUser } from '../services/auth.service.js'

const register = asyncHandler(async (req, res) => {
    const { error } = userRegister.validate(req.body);
    if (error?.details?.[0]?.message)
        throw new AppError(httpStatus.BAD_REQUEST, `${error.details[0].message}`);

    const user = await createUser(req.body);
    res.status(httpStatus.CREATED).send(user);
});

export { register }