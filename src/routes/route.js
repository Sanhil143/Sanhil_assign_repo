const express = require("express")
const router = express.Router()
const Customers = require("../models/customerModel")
const Cards = require('../models/cardModel')


// Create new customer [POST]


router.post("/createCustomer", async (req,res)=>{
      let customerData = req.body
      let customerData1 = await Customers.create(customerData)
      res.status(200).send({store:customerData1})
})



// Get all customers List with status ACTIVE [GET]

router.get("/getCustomer", async (req,res)=> {
      let findCus = await Customers.find({status:{$eq:"Active"}})
      res.status(200).send({show:findCus})
})

// Delete customer. [DELETE]

router.delete("/delCustomer",async (req,res)=>{
      let accData =  await Customers.findOneAndRemove({status:{$eq:"Inactive"}})

      res.status(200).send({show:accData})
})

// Create new card [POST]

router.post("/createCard", async (req,res)=>{
      let cardData = req.body
      let cardData1 = await Cards.create(cardData)
      res.status(200).send({store:cardData1})
})



// Get all Card List[GET]

router.get("/cardList", async (req,res)=> {
      let cardList = await Cards.find()
      res.status(200).send({show:cardList})
})






module.exports = router


