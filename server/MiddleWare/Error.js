const errfunc=(error,req,res,next)=>{
res.send(error.message);
}