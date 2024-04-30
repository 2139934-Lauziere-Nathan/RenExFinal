import { Router } from 'express';
const router = Router();    
import controller from '../controlleur/controlleur';


//creation de la route pour tout afficher
router.get('/tous/:id', controller.getall);


export default router;