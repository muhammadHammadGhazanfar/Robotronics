const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for a product
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0, // Default stock is 0
    },
    images: [{
        type: String, // Array of image URLs
        required: true,
    }],
    brand: {
        type: String,
        required: true,
    },
    ratings: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }],
    averageRating: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
}, { timestamps: true }); // Automatically handles createdAt and updatedAt

// Pre-save middleware to calculate averageRating and numOfReviews
ProductSchema.pre('save', function (next) {
    if (this.isModified('ratings')) { // Only recalculate if 'ratings' is modified
        if (this.ratings.length > 0) {
            this.numOfReviews = this.ratings.length;
            this.averageRating = this.ratings.reduce((acc, rating) => acc + rating.rating, 0) / this.ratings.length;
        } else {
            this.numOfReviews = 0;
            this.averageRating = 0;
        }
    }
    next();
});

// Create and export the Product model
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
