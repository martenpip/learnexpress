const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/articles', async (req, res) => {
    let articles = await prisma.article.findMany();
    res.render('articles.njk', {articles});
});

module.exports = router;