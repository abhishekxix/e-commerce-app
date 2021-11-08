const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, 'Please provide name.'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide price.'],
    },
    description: {
      type: String,
      required: [true, 'Please provide description.'],
      maxlength: 250,
      minlength: 5,
    },
    image: {
      type: String,
      required: [true, 'Please provide image.'],
    },
    category: {
      type: String,
      required: [true, 'Please provide category'],
      enum: {
        values: ['office', 'kitchen', 'bedroom'],
        message: '${VALUE} is not allowed.',
      },
    },
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      enum: {
        values: ['ikea', 'liddy', 'marcos'],
        message: '{VALUE} is not supported',
      },
    },
    colors: {
      type: [String],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
