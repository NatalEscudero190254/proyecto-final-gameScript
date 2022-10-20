const { Router } = require('express');
const { postPayment } = require('../controllers/paymentController')
const{ postComment, getUserComments, getGameComments }=require('../controllers/Comments')
const { videogamePost, videogameByID, getGenres, updateVideogame, getAllGames } = require('../controllers/videogameControllers.js');
const axios = require('axios');
const { allDataUser, UserByID, UserPost, UserEliminated, UserUpdate, PostLogin } = require('../controllers/User.js');
const router = Router();

//Configuración de rutas

//Payment
router.post("/payment", postPayment)


//Comment
router.get("/user/comments",getUserComments)

router.get("/videogames/comments",getGameComments)

router.post("/comments",postComment)

//Videogame
router.get("/videogames/:id", videogameByID)

router.post("/videogames", videogamePost)

router.get("/videogames", getAllGames)

router.put('/videogames/:id',updateVideogame)

router.get("/genres",getGenres)

//User
router.get("/user", allDataUser);

router.get('/user/:id', UserByID);

router.delete('/user/:id', UserEliminated);

router.put('/user/:id', UserUpdate);

//sesion
router.post('/register', UserPost);

router.post('/login', PostLogin);



module.exports = router;
