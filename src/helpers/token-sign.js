import jwt  from "jsonwebtoken";
import "dotenv/config"

const generarJWT = (uid, name, role )=>{
    return new Promise( (resolve, reject)=>{
        //agregar los datos al payload
        const payload = {uid, name, role};
        //aqui firmamos el token
        jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn: '3h'
        },(err, token)=>{
            if(err){
                console.log(err);
                reject('token could not be found')
            }
            //si esta todo correcto
            resolve(token);
        })
    })
}

export default generarJWT