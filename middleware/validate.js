const { body, validationResult } = require("express-validator");

const validateCreateUser = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 2, max: 50 }).withMessage("Name must be between 2 and 50 characters")
    .trim(),
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("age")
    .optional()
    .isInt({ min: 1, max: 120 }).withMessage("Age must be between 1 and 120"),
  body("role")
    .optional()
    .isIn(["user", "admin", "moderator"]).withMessage("Role must be user, admin, or moderator"),
];

const validateUpdateUser = [
  body("name")
    .optional()
    .isLength({ min: 2, max: 50 }).withMessage("Name must be between 2 and 50 characters")
    .trim(),
  body("email")
    .optional()
    .isEmail().withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("age")
    .optional()
    .isInt({ min: 1, max: 120 }).withMessage("Age must be between 1 and 120"),
  body("role")
    .optional()
    .isIn(["user", "admin", "moderator"]).withMessage("Role must be user, admin, or moderator"),
];

const checkValidation = function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map(function(err) {
        return { field: err.path, message: err.msg };
      }),
    });
  }
  next();
};

module.exports = { validateCreateUser, validateUpdateUser, checkValidation };