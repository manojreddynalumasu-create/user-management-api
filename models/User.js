const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    age: {
      type: Number,
      min: [1, "Age must be at least 1"],
      max: [120, "Age cannot exceed 120"],
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin", "moderator"],
        message: "Role must be user, admin, or moderator",
      },
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);