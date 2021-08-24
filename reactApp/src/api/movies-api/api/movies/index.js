import express from 'express';
import {
  getMovieReviews, getGenres, getUpcoming, getPopular, getTopRated,
} from 'src/api/tmdb-api';
import movieModel from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

 router.get('/genres', (req, res,next) => {
  getGenres().then(genres => res.status(200).send(genres))
  .catch((error) => next(error));
}); 

router.get('/upcoming', (req, res,next) => {
  getUpcoming().then(upcoming => res.status(200).send(upcoming))
  .catch((error) => next(error));
});

router.get('/popular', (req, res,next) => {
  getPopular().then(popular => res.status(200).send(popular))
  .catch((error) => next(error));
});

router.get('/toprated', (req, res,next) => {
  getTopRated().then(topRated => res.status(200).send(topRated))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
  });

export default router;
