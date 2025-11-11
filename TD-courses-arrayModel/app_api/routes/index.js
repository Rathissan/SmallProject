const express = require('express');
const router = express.Router();

const ctrlCourses = require('../controllers/courses');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

router
    .route('/courses')
    .get(ctrlCourses.coursesReadAll)
    .patch(ctrlCourses.coursesUpdateOne)
    .post(ctrlCourses.coursesCreateOne);

router
    .route('/courses/:id')
    .get(ctrlCourses.coursesReadOne)
    .delete(ctrlCourses.coursesDeleteOne);

module.exports = router;