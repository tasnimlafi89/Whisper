import type {Request,Response,NextFunction} from "express";

export const errorHandler=(err:Error,_req:Request,res:Response,_next:NextFunction) =>{
    console.error("Error:", err);

    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    const isServerError = statusCode >= 500;
    const safeMessage =
        !isServerError || process.env.NODE_ENV === "development"
            ? (err instanceof Error ? err.message : String(err))
            : "Internal server error";

    res.status(statusCode).json({
        message: safeMessage,
        ...(process.env.NODE_ENV === "development" && {stack:err.stack}),

    });
    
}; 

//if status code is 200 and we still hit the error handler that means it is an internal error
//so we set the status code as 500