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

router.get("/sol1",function(req,res){

    let arr = [1,2,3,5,6,7]
    let sum = arr.length+1
    let total = sum * ( sum + 1)/2
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];   
    }
    let missingNum = (total - temp)
    res.send("This is a missing number " + missingNum)
    
})
  
router.get("/sol2",function(req,res){        // n*(f1 + last)/2
    let arr1 = [33, 34, 35, 37, 38]
    let sum = arr1.length+1
    let s = sum * (arr1[0] + arr1[arr1.length-1])/2
    let a = 0  
    for(let i =0; i <arr1.length; i++){
        a += arr1[i]
    }  // console.error(s-a);    
    let missingNum1 = (s - a)
    res.send("This is a missing number " + missingNum1) 
})








module.exports = router;