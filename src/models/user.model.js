"use strict";

// EXPRESSJS -- BLOG API //

const mongoose = require("mongoose");

// Schema:

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      require: true,
    },

    firstName: String,

    lastName: String,
  },
  {
    collection: "user",
    timestamps: true,
  },
);

// module.exports = {
//     User: mongoose.model('User', UserSchema)
// }

module.exports = mongoose.model("User", userSchema);
