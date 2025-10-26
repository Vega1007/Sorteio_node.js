const express = require('express');
const router = express.Router();
const Cadastro = require('../models/cadastro');


router.get('/', (req, res) => {
  res.render('home');
});


router.post('/', async (req, res) => {
  const {name, number} = req.body;

  if (!name || !number) {
    req.flash('error_msg', 'Preencha todos os campos!');
    return res.redirect('/');
  }

  try {
    await Cadastro.create({name, number});
    req.flash(
      'success_msg',
      `Parabéns, ${name}! Seu cadastro foi realizado com sucesso. Caso você seja o vencedor entraremos em contato pelo número ${number}`
    );
    res.redirect('/');
  } catch (err) {
    console.error(err);
    req.flash('error_msg', 'Erro ao se cadastrar, tente novamente.');
    res.redirect('/');
  }
});

router.get('/participantes', async (req, res) => {
  try {
    const participantes = await Cadastro.findAll({ raw: true });
    res.render('participantes', { participantes })
  } catch (err) {
    console.error(err);
    req.flash('error_msg', 'Erro ao buscar os participantes.');
    res.redirect('/');
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    await Cadastro.destroy({ where: { id: req.params.id } });
    req.flash('success_msg', 'Participante apagado com sucesso!');
    res.redirect('/participantes');
  } catch (err) {
    console.error(err);
    req.flash('error_msg', 'Erro ao apagar participante.');
    res.redirect('/participantes');
  }
});


router.all('/sorteio', async (req, res) => {
  try {
    const participantes = await Cadastro.findAll({ raw: true });

    if (participantes.length === 0) {
      req.flash('error_msg', 'Não há participantes cadastrados para o sorteio.');
      return res.redirect('/participantes');
    }

    const vencedor =
      participantes[Math.floor(Math.random() * participantes.length)];

    // Renderiza página do vencedor
    res.render('vencedor', {vencedor});
  } catch (err) {
    console.error(err);
    req.flash('error_msg', 'Erro ao realizar o sorteio.');
    res.redirect('/participantes');
  }
});

module.exports = router;
