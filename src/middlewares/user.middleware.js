import jwt from "jsonwebtoken";
const userAuth = async (req, res, next) => {
    //get cookies from req
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken || !refreshToken) {
        return res.status(401).json({
            success: false,
            message: "User not logged in",
        });
    }
    
    //verify token
    try{
        const decoded=jwt.verify(accessToken,process.env.JWT_SECRET_KEY);

        if(!decoded){
            //check with refresh token
            const decoded=jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET_KEY);
            if(!decoded){
                return res.status(401).json({
                    success:false,
                    message:"User not logged in"
                })
            }
            //create new access token
        }
    }catch(err){
        //error
        
    }
}
export { userAuth };