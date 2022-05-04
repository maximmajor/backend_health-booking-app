import { Router } from 'express';
const router = Router();
import { addHospitals, getListOfHospitals } from "../controller/hospital"


router.post('/add', addHospitals)
router.get('/list', getListOfHospitals)

export default router;