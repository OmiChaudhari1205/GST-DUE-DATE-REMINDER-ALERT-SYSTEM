const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    console.log("verifyToken middleware called");
    const authHeader = req.headers.authorization;
    console.log(req.headers);
    console.log(req.headers.authorization);
    
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Access denied. Token missing."
        });
    }
    
   
    const token = authHeader.split(" ")[1];
    console.log(token)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }
};

module.exports = verifyToken;