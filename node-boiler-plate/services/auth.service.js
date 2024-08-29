import httpStatus from "http-status";
import { AppError } from "../utils/index.js";
import { userService } from "./index.js";

/**
 * check invalid schema and throws error
 * @param {Object} schema
 * @returns {null}
 */
const isValid = (schema, req) => {
    const { error } = schema.validate(req.body);
    if (error?.details?.[0]?.message)
        throw new AppError(httpStatus.BAD_REQUEST, `${error.details[0].message}`);
}

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const checkUserDetails = async (email, password) => {
    const user = await userService.getUserByEmail(email, password);
    console.log(user, await user.isPasswordMatch(password));
    if (!user || !(await user.isPasswordMatch(password))) {
        throw new AppError(httpStatus.UNAUTHORIZED, `Invalid Credientials`);
    }
    return user;
}

export { isValid, checkUserDetails }