//Index routes 
import { Router } from 'express';
import { helloWorld } from '../controllers/index.controller.server.js'

// Instanciating the router
const router = Router();

// add middleware to connect application
router.get('/', helloWorld);
router.get('/hello', helloWorld);

export default router;


// app.use('/json', helloJson);
// app.use('/html', helloHtml);
// app.use('/', helloPlein);