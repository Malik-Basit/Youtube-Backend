class Apierror extends Error {
    constructor(message="Something went wrong",statuscode,stack="", errors=[]) {
        super(message);
        this.statuscode = statuscode;
        this.errors = errors;
        this.sucess = false;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export {Apierror}