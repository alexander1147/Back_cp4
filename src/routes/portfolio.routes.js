const productsImages = require('express').Router();
const { getAllImages, getOneImagesById, createOneImages, updateOneImages, deleteOneImages } = require('../controllers/productsImages.controller');

productsImages.get('/', getAllImages);
productsImages.get('/:id', getOneImagesById);
productsImages.post('/', createOneImages, getOneImagesById);
productsImages.put('/:id', updateOneImages, getOneImagesById);
productsImages.delete('/:id', deleteOneImages);

module.exports = productsImages;