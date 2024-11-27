import { Router } from "express"
import * as rh from './requestHandler.js'

const router=Router()

router.route('/add').post(rh.adduser)
router.route('/get').get(rh.getUser)
router.route('/update/:id').put(rh.update)
router.route('/delete/:id').delete(rh.deleteUser)


export default router;