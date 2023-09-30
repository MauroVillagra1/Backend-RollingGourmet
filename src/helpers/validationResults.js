import { validationResult } from "express-validator";

const valResult = (req, res, next) =>{
    
    const errorCount = validationResult(req);
    
        if (!errorCount.isEmpty()) {
          return res.status(400).json({
            errors: errorCount.array(),
          });
        }
        next();
}

export default valResult;