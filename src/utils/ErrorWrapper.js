const ErrorWrapper = function (cb) {
    return async function (req, res, next) {
        try{
            await cb(req, res, next);
        }
        catch(error){
            res.status(error.statusCode || 500).json({
                status: error.statusCode || 500,
                message: error.message,
                success: false
            })
        }
    }
}


export default ErrorWrapper;