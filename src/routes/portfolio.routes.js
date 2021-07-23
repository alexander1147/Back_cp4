const portfolio = require('express').Router();
const { getAllImages, getOneImagesById, createOneImages, updateOneImages, deleteOneImages } = require('../controllers/portfolio.controller');

portfolio.get('/', getAllImages);
portfolio.get('/:id', getOneImagesById);
portfolio.post('/', createOneImages, getOneImagesById);
portfolio.put('/:id', updateOneImages, getOneImagesById);
portfolio.delete('/:id', deleteOneImages);

module.exports = portfolio;