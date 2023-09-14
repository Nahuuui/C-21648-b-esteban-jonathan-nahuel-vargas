
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Ruta para mostrar todos los posts
router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.render('index', { posts });
});

// Ruta para mostrar el formulario de agregar post
router.get('/agregar', (req, res) => {
  res.render('agregar');
});

// Ruta para procesar el formulario de agregar post
router.post('/agregar', async (req, res) => {
  const { title, content, imageUrl } = req.body;
  await Post.create({ title, content, imageUrl });
  res.redirect('/');
});

// Ruta para mostrar el formulario de editar post
router.get('/editar/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.render('editar', { post });
});

// Ruta para actualizar un post
router.post('/editar/:id', async (req, res) => {
  const { title, content, imageUrl } = req.body;
  await Post.update({ title, content, imageUrl }, { where: { id: req.params.id } });
  res.redirect('/');
});

// Ruta para eliminar un post
router.post('/delete/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect('/');
});

module.exports = router;
