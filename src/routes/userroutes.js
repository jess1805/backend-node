
import {Router} from 'express';
import {addUser, getAllUsers, getUserbyID, deleteUser, updateUser} from "../controllers/usercontrollers.js";

const router = Router()

router.route("/add").post(addUser)
router.route("/").get(getAllUsers)
router.route("/:id").get(getUserbyID)
router.route("/:id").delete(deleteUser)
router.route("/:id").put(updateUser);

export default router;
