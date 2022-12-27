const jwt = require("jsonwebtoken")



const headerValidator = (req,res,next) => {
      let token = req.headers["x-auth-token"]
      if(!token){
            res.status(500).send({Error:"Header-token is not present"})
      }
      else{
            next()
      }
}

const tokenValidater = async (req,res,next)=>{
      let userId = req.params.userId
     
      let token = req.headers["x-auth-token"]
      if(!token){
            res.status(500).send({Error:"Header-token is not present"})
      }
      else{
            let decodedToken = await jwt.verify(token,"Sanhil-Authen")
            if(!decodedToken){
                  return res.status(500).send({Error:"Invalid Token"})
            }
            else{
                  next() 
            }
      }
}





module.exports.headerValidator = headerValidator
module.exports.tokenValidater = tokenValidater




