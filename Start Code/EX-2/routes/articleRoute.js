import express from 'express';
import { getArticle, getArticleById, getJournalists,getCategories } from '../controllers/articleController.js';

const router = express.Router();
router.get('/articles', getArticle);
router.get('/articles/:id', getArticleById);
router.get('/journalists', getJournalists);
router.get('/categories', getCategories);


export default router;