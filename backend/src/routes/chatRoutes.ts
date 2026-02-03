import { Router } from 'express' ;
import { protectRoute } from '../middleware/auth';
import { getChats, getOrCreateChat } from '../controllers/chatController';
const router = Router();

//instead of adding "protecteRoute" to each route like this < router.get("/",protectRoute,getChats); > we can

router.use(protectRoute);

router.get("/",getChats);
router.post("/with/:participantId",getOrCreateChat);

export default router;
