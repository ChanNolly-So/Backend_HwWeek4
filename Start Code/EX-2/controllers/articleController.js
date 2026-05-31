import { articles, journalists, categories } from "../models/data.js";

export const getArticle = (req, res) => {
    res.json(articles);
};

export const getArticleById = (req, res) => {
    const articlesId = parseInt(req.params.id, 10);
    const article = articles.find(a => a.id === articlesId);

    if (!article) {
        return res.status(404).json({ message: "article not found" });
    }

    res.json(article);
};

export const getJournalists = (req, res) => {
    res.json(journalists);
};

export const getCategories = (req, res) => {
    res.json(categories);
};