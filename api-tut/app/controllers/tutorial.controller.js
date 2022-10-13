const db  = require('../models');
const Tutorial = db.tutorials;

exports.create = (req,res) => {
  if (!req.body.title) {
    res.status(400).send({message: 'Content can not be empty'});
    return;
  }
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the tutorial'
      });
    });
};

exports.findAll = (req,res) => {
 const title = req.query.title;
  var condition = title ? {title: {$regex: new RegExp(title), $options: 'i'}} : {};

  Tutorial.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retreiving tutorials'
      });
    });
};

exports.findOne = (req,res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then(data => {
      if(!data)
        res.status(404).send({ message: 'Not found with id ' + id})
      else res.send(data)
    });
};

exports.update = (req,res) => {

};

exports.delete = (req,res) => {

};

exports.deleteAll = (req,res) => {

};

exports.findAllPublished = (req,res) => {

};
