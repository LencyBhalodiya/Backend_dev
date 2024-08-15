class ApiResponseHandler {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

function ApiResponse(res, statusCode, data, message = "Success") {
    return res.status(statusCode).json(new ApiResponseHandler(statusCode, data, message))
}

export { ApiResponse }