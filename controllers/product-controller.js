const Product = require("../models/Product");

// Xem thông tin sản phẩm
exports.getProductInfo = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        res.status(200).json({
            status: "success",
            data: { product },
        });
    } catch (error) {
        res.json(error);
    }
};

// Điều chỉnh yêu thích đối với sản phẩm
exports.favouriteProduct = async (req, res, next) => {
    console.log("Chưa làm");
};

// Thêm sản phẩm vào giỏ
exports.addToCart = async (req, res, next) => {
    console.log("Chưa làm");
};
