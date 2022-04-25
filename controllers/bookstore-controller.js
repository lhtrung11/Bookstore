const Product = require("../models/Product");

// Lấy thông tin của Bookstore
exports.getBookstore = async (req, res, next) => {
    res.status(200).json({
        //
    });
};

// Cập nhật thông tin Bookstore
exports.updateBookstore = async (req, res, next) => {
    res.status(200).json({
        //
    });
};

// Tạo một sản phẩm mới
exports.createProduct = async (req, res, next) => {
    try {
        const { bookstoreId } = req.bookstore;
        const product = await Product.create({
            ...req.body,
            bookstoreId: bookstoreId,
        });

        res.status(200).json({
            status: "success",
            data: { product },
        });
    } catch (error) {
        res.json(error);
    }
};

// Cập nhật sản phẩm
exports.updateProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const { bookstoreId } = req.bookstore;
        console.log(bookstoreId);
        const product = await Product.findById(productId);
        if (bookstoreId === product.bookstoreId) {
            // const newProduct = await Product.updateOne(productId, {...req.body}, {new: true, runValidators: true} )
            // res.status(200).json({
            //     status: 'success',
            //     data: {newProduct}
            // })
            console.log("true");
        } else {
            console.log("false");
        }
    } catch (error) {
        res.json(error);
    }
};

// Xóa sản phẩm
exports.deleteProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;
        await Product.findByIdAndDelete(productId);
        res.status(200).json({
            status: "success",
            message: "product has been deleted",
        });
    } catch (error) {
        res.json(error);
    }
};

// Hiển thị lịch sử đơn hàng
exports.showHistory = async (req, res, next) => {
    console.log("Chưa làm");
};

// Lấy dữ liệu về đơn hàng đang được thực thi của Bookstore
exports.getDelivery = async (req, res, next) => {
    console.log("Chưa làm");
};

// Lấy dữ liệu về đơn hàng đang chờ của Bookstore
exports.getWaitingOrder = async (req, res, next) => {
    console.log("Chưa làm");
};

// Thao tác với đơn hàng đang chờ
exports.updateWaitingOrder = async (req, res, next) => {
    console.log("Chưa làm");
};
