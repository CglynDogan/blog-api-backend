"use strict";

/* BLOG API Models */

const mongoose = require("mongoose");

// BLOG CATEGORY:
const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCaterogy",
    timestamps: true,
  },
);

// BLOG POST:
const blogPostSchema = new mongoose.Schema(
  {
    blogCategoryId: {
      type: mongoose.Schema.Types.ObjectId, // ForeignKey, RelationalID
      ref: "BlogCategory",
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    //  createdAt,
    //  updatedAt
  },
  {
    collection: "BlogPost",
    timestamps: true,
  },
);

// mongoose.model('model ismi', 'hangi semadan')
// const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);
//module.exports = {BlogPost: BlogPostModel,};

module.exports = {
  BlogCategory: mongoose.model("Blogcategory", blogCategorySchema),
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};

//const nameSchema= new mongoose.Schema({fields},{tablo adi})

/*
const nameSchema = new mongoose.Schema(
  {
    // _id: // auto created and increment
    // fieldName: Type // short form
    // fieldName: String,
    // fieldName2: BigInt

    fieldName: {
      type: String,
      default: null,
      trim: true, // default oposite
      unique: true, // default oposite
      select: false, // default oposite
      index: false, // default oposite
      required: [true, "error message"],
      enum: [[1, 2, 3], "error message"], // belirli bir patterne gore veri girisi
      validate: [
        function (data) {
          return true;
        },
        "error message",
      ], // veriyi fonksiyon ile dogrulama
      get: function (data) {
        return true;
      }, // veriyi cagirirken calisacak fonksiyon
      set: function (data) {
        return true;
      }, // veriyi kayit ederken calisacak fonksiyon
    },
  },
  {
    collection: "collectionName", // tablo ismi
    timestamps: true, // createDate, updateDate
  },
);
*/
