import { Router } from 'express';
import * as DahakniController from '../controllers/dahakni.controller';
const router = new Router();

// Get all Posts
router.route('/dahaknies').get(DahakniController.getDahaknies);

// Get one post by cuid
router.route('/dahaknies/:cuid').get(DahakniController.getDahakni);

// Add a new Post
router.route('/dahaknies').post(DahakniController.addDahakni);

// Delete a post by cuid
router.route('/dahaknies/:cuid').delete(DahakniController.deleteDahakni);

export default router;
