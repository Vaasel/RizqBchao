const Food = require("../models/FoodModel");
const ErrorHandler = require("../utils/ErrorHandler");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

function foodController() {
    return {
        async createFood(req, res, next) {
            try {
                const { userId, pickup, food, quantity, prefTime, location } = req.body;
                const newFood = new Food({
                    userId,
                    pickup,
                    food,
                    quantity,
                    prefTime,
                    location,
                });

                // Check if an image is uploaded
                if (req.file) {
                    const { buffer, mimetype } = req.file;
                    newFood.image = {
                        data: buffer,
                        contentType: mimetype,
                    };
                }

                await newFood.save();
                res.status(201).json({ success: true, food: newFood });
            } catch (error) {
                next(error);
            }
        },

        async getFood(req, res, next) {
            try {
                const foods = await Food.find();
                res.status(200).json({ success: true, count: foods.length, foods });
            } catch (error) {
                next(error);
            }
        },

        async getFoodById(req, res, next) {
            try {
                const food = await Food.findById(req.params.id);
                if (!food) {
                    return next(new ErrorHandler("Food not found", 404));
                }
                res.status(200).json({ success: true, food });
            } catch (error) {
                next(error);
            }
        },

        async updateFood(req, res, next) {
            try {
                const { pickup, food, quantity, prefTime, location } = req.body;
                let foodToUpdate = await Food.findById(req.params.id);

                if (!foodToUpdate) {
                    return next(new ErrorHandler("Food not found", 404));
                }

                foodToUpdate.pickup = pickup;
                foodToUpdate.food = food;
                foodToUpdate.quantity = quantity;
                foodToUpdate.prefTime = prefTime;
                foodToUpdate.location = location;

                // Update image if a new one is provided
                if (req.file) {
                    const { buffer, mimetype } = req.file;
                    foodToUpdate.image = {
                        data: buffer,
                        contentType: mimetype,
                    };
                }

                await foodToUpdate.save();

                res.status(200).json({ success: true, food: foodToUpdate });
            } catch (error) {
                next(error);
            }
        },

        async deleteFood(req, res, next) {
            try {
                const foodToDelete = await Food.findByIdAndDelete(req.params.id);
                if (!foodToDelete) {
                    return next(new ErrorHandler("Food not found", 404));
                }
                res.status(200).json({ success: true, message: "Food deleted successfully" });
            } catch (error) {
                next(error);
            }
        },

        // Method to handle image upload using Multer
        uploadImage(req, res, next) {
            upload.single('image')(req, res, (err) => {
                if (err) {
                    return next(new ErrorHandler("Error uploading image", 400));
                }

                if (!req.file) {
                    return next(new ErrorHandler("Please upload an image", 400));
                }

                const { buffer, mimetype } = req.file;
                const image = {
                    data: buffer,
                    contentType: mimetype,
                };

                res.status(200).json({ success: true, image });
            });
        },
    };
}

module.exports = foodController;
