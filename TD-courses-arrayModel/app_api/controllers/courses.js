const { find, pullAllBy, pull, pullAll, orderBy } = require('lodash');
const { courses } = require('../models/courses');
const debug = require('debug')('app_api');

const coursesReadAll = (req, res) => {
    debug(`query= ${JSON.stringify(req.query)}`)
    res.json({ courses: orderBy(courses, req.query.orderBy, req.query.order)});
};



const coursesCreateOne = (req,res) =>{
    // debug(req.body);
    debug({...req.body});
    const course = {
        id: Math.ceil(Math.random()*1000),
        // name: req.body.name,
        // info: req.body.info,
        ...req.body
    }
    courses.push(course);
    res.json(course);
}

const coursesUpdateOne = (req,res) =>{
    debug(req.params.id);
    let course = find(courses, {'id': Number(req.params.id)});
    if(!course) res.status(404).send(`the course with id:${req.params.id} was not found`)
    course.name = req.body.name;
    res.json(course);
}

const coursesReadOne = (req,res)=>{
    debug(req.params.id);
    let courses = find(courses,{'id': Number(req.params.id)});
    if(!courses) res.status(404).send(`The course with id:${req.params.id}was not found`)
    res.send(course);
}

const coursesDeleteOne = (req,res)=>{
    debug(req.params.id);
    pullAllBy(courses,[{'id': Number(req.params.id)}], 'id');
    res.json(courses);
}

module.exports = {
    coursesReadAll,
    coursesCreateOne,
    coursesUpdateOne,
    coursesReadOne,
    coursesDeleteOne
};