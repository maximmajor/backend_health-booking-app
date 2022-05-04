import { Router } from 'express';
const router = Router();
import { addHospitals, getListOfHospitals, getMockListOfHospitals } from "../controller/hospital"


router.post('/add', addHospitals)
router.get('/list', getListOfHospitals)
router.get('/list/mock', getMockListOfHospitals)

export default router;