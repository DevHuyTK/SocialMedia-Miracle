import express from 'express'
import verify from '../AccountControllers/verifyToken.js'

const router = express.Router();

router.get('/',verify , (req,res) => {
    res.json({
        posts:{
            title: 'my fist post',
            description: 'hello cac ban'
        }
    })
})


export default router;