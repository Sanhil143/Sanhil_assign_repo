const express = require('express');
const router = express.Router();
const _ = require('underscore')



//Api assignment




router.get("/movies", function(req,res){
    const moviesData = ['Herapheri','Golmaal','Dhol','Dhoom','Bahubali']
    console.error("Movies");
    res.send(moviesData)
    
})


router.get("/movies/:indexNumber", function(req,res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    if(req.params.indexNumber < 0 || req.params.indexNumber > movies.length-1){
        res.send("Please type valid number")
    }
    else{
        res.send(movies[req.params.indexNumber])
    }
    

})

router.get("/films", function(req,res){
    
    const moviesArr = [ {
        id: 1,
        name: 'The Shining'
        }, {
        id: 2,
        name: 'Incendies'
        }, {
        id: 3,
        name: 'Rang de Basanti'
        }, {
        id: 4,
        name: 'Finding Nemo'
        }]
    res.send(moviesArr)
    console.error("Films");
})

router.get("/films/:filmsId",function(req,res){
    let moviesArr1 = [ {
        id: 1,
        name: 'The Shining'
        }, {
        id: 2,
        name: 'Incendies'
        }, {
        id: 3,
        name: 'Rang de Basanti'
        }, {
        id: 4,
        name: 'Finding Nemo'
        }]



        let filmReq = req.params.filmsId
        let temp 
        

        for(let i=0; i<moviesArr1.length; i++){
           if(moviesArr1[i].id == filmReq){
            temp = (moviesArr1[i].name)
            
        }
        }

        if(filmReq >= moviesArr1.length){
            res.send('no movie exists with this id') 
           
        }
        else{
            res.send(temp)     
        }
        

})







module.exports = router;