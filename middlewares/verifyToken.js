const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
    // Access Authorization from req header
    const Authorization = req.header('authorization');

    if (!Authorization) {
        
    }

    const token = Authorization.replace('Bearer ', '');

    switch (req.body.type) {
        case "customer":   
            const { customerId } = jwt.verify(token, process.env.APP_SECRET);
            req.customer = { customerId };
            break;
        case "bookstore" :
            const { bookstoreId } = jwt.verify(token, process.env.APP_SECRET);
            req.bookstore = { bookstoreId };
            break;
        case "admin" :
            const { adminId } = jwt.verify(token, process.env.APP_SECRET);
            req.admin = { adminId };
            break;
        default: 
            // Error Handle
            console.log("error");
    }
    next();
}