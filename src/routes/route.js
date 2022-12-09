const express = require('express')
const router = express.Router()


const lodash = require('lodash')
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')



router.get('/test-me', function (req, res) {
      res.send('My api!')
      logger.welcome('Sanhil Rai')
      helper.printDate()
      helper.printMonth()
      helper.getBatchInfo()
      formatter.trim("   Sanhil Rai   ")
      formatter.changeToLowerCase("EncYclOpEdiA")
      formatter.changeToUpperCase("harrier")

  //First_problem

      let arr = ['A','B','C','D','E','F','G','H','I','J','K','L']
      console.error(lodash.chunk(arr,3));

    //Second_problem

      let arr1 = [3,5,7,9,11,13,15,17,19,21]
      console.error((lodash.tail(arr1)));

   //Third_problem

      let a1 = [1,2,3,4,5,5,6,7]
      let a2 = [1,2,2,3,4,4,5,6,7]
      let a3 = [1,1,2,3,3,4,8]
      let a4 = [9,9,10,11,10]
      let a5 = [12,13,12,14,15]

      console.error(lodash.union([1,2,3,4,5,5,6,7],[1,2,2,3,4,4,5,6,7],[1,1,2,3,3,4,8],[9,9,10,11,10],[12,13,12,14,15]));

   // Fourth_problem

   let arr2 = [['horror','The Shining'],['drama','Titanic'],['thriller', 'ShutterIsland'],['fantasy','Pans Labyrinth']]

   console.error(lodash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller', 'ShutterIsland'],['fantasy','Pans Labyrinth']]));

})



module.exports = router

// node index.js