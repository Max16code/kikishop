// models/Product.js

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  sizes: [String],
  category: String, // E.g., "Blazers", "Dresses"
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
