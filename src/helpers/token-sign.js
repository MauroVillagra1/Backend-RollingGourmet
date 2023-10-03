import jwt  from "jsonwebtoken";
import "dotenv/config"

const generarJWT = (uid, name, role )=>{
    return new Promise( (resolve, reject)=>{
        const payload = {uid, name, role};
        jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn: '3h'
        },(err, token)=>{
            if(err){
                console.log(err);
                reject('token could not be found')
            }
            resolve(token);
        })
    })
}

export default generarJWT