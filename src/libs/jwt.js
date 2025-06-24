import jwt from 'jsonwebtoken'
export function createAccesToken(payload){
  return new Promise((resolve,reject)=>{
    jwt.sign(
        payload,
        process.env.SECRET_JWT_KEY,
        {expiresIn:86400},
        (err, token)=>{
            if(err) reject(err)
            resolve(token)
        })
   })
}