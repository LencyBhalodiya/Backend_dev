import httpStatus from "http-status";
import { asyncHandler } from "../utils/index.js";
import { userRegister, userlogin } from '../validation/auth.validation.js'
import { authService, userService } from '../services/index.js'

/** @description user registration into DB */
const register = asyncHandler(async (req, res) => {
    authService.isValid(userRegister, req);
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send(user);
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    authService.isValid(userlogin, req);
    const user = await authService.checkUserDetails(email, password);
    res.status(httpStatus.CREATED).send(user);
})

export { register, login }