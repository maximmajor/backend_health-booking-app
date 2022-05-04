import { Router } from 'express';
const router = Router();
import { bookAppointment } from "../controller/user"
const upload = require("../utils/multer");


router.post('/book/appointment/:hospitalId', upload.single("photo"), bookAppointment)

export default router;
