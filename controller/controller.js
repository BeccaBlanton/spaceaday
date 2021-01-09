require("dotenv").config()
const axios = require("axios");
const db = require("../models/index")
//match what you named your key in the .env file
const key = process.env.API_KEY;

module.exports = {
    findAllPost: function(req,res){
        db.Post.findAll({}).then(function(dbPost){
            res.json(dbPost).catch((err)=> res.status(422).json(err))
        })
    },
    createNewPost: function (req,res){
        db.Post.create({
            title:req.body.title,
            body:req.body.body,
            created_at: req.body.created_at
        }).then(function(dbPost){
            res.json(dbPost).catch((err)=> res.status(422).json(err))
        })
    },
    //api routes from nasa
    picOfTheDay: function(req,res){
        axios.get(`http://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then((res)=> res.json(res.data))
        .catch((err)=> res.status(422).json(err))

    }
}