const Customer = require('../models/Customer');
const Bookstore = require('../models/Bookstore');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res, next) => {
    try {
        let account
        switch (req.params.type) {
            case 'bookstore': 
                account = await Bookstore.create(req.body);
                break;
            case 'customer':
                account = await Customer.create(req.body);
                break;
            default:
                console.log('error')
        }
        const token = jwt.sign({accountId: account._id}, process.env.APP_SECRET);
        res.status(200).json({
            status: 'success',
            data: { token, accountName: account.username, accountType: req.params.type }
        })
    } catch (error) {
        res.json(error);
    }
} 

exports.login = async (req, res, next) => {
    try {
        let account
        switch (req.body.type) {
            case 'customer':
                account = await Customer.findOne({username: req.body.username});
                break;
            case 'bookstore':
                account = await Bookstore.findOne({username: req.body.username});
                break;
            default:
                console.log('error');
        }
        if (!account) {
            res.status(400).json({
                status: 'error',
                message: 'username is not existed'
            })
        }
        if (bcrypt.compareSync(req.body.password, account.password)) {
            const token = jwt.sign({accountId: account._id}, process.env.APP_SECRET);
            res.status(200).json({
                status: 'success',
                data: {
                    token, 
                    AccountType: req.body.type, 
                    AccountUsername: account.username
                }
            })
        } else {
            res.status(400).json({
                status: 'error',
                message: 'incorrect password',
            })
        }
    } catch (error) {
        res.json(error);
    }
}
