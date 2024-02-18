const asyncHandler = (requestHandler) => {(req , res , next)=>{
  process.resolve(requestHandler(req , res , next)).catch((err)=> next(err))
}}

export {asyncHandler}