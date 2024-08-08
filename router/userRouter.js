const express = require("express");

const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailbilityController,
  userAppointmentsController,
} = require("../controllers/userctrl");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

//routers
//ROUTER || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Get Notification Doctor || POST
router.post("/get-all-notification", authMiddleware, getNotificationController);

//Get Notification Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

// GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPONTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

// BOOKIN AVAILABILITY
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailbilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
