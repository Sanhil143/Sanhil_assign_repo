const jwt = require('jsonwebtoken')


const headerValidator = (req,res,next) => {
      try{
      let token = req.headers["x-auth-token"]
      
      if(!token){
            res.status(500).send({Error:"Header is must in this operation"})
      }
      else{
            let decodedToken = jwt.verify(token,"Sanhil-Authen")
            // console.error(decodedToken);
            if (!decodedToken) {
                  res.status(500).send({Error:"Token is not valid"})
            }
            else{
                  let userId = req.params.userId                
                  if(decodedToken.user != userId){
                        res.status(500).send({Error:"User is not exist"})
                  }
                  else{
                        next()
                  }
            }
      }
}
catch(err){
      res.status(500).send({msg:"Token is not valid", error:err.message})
}
}

module.exports.headerValidator = headerValidator