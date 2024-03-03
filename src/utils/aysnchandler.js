const aysnchandler = (reqFunction)=>{

    (req,res,nex)=>{
 Promise.resolve(reqFunction(req,res)).catch(err=>{nex(err)})
    }

}