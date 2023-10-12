import express from "express";

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response)=>{
    return res.send('test route');
});

router.get('/test', (req: express.Request, res: express.Response)=>{
    return res.send('test/test route');
});

export default router;

