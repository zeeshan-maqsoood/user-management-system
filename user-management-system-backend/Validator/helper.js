const mongoose=require('mongoose')
module.exports={

     IsValidId:(id)=>{
    return mongoose.isValidObjectId(id)
    },
    isEmpty:(value)=>{
    const newValue=value||''
    return !newValue.length
    },
    isValidEmail:(email)=>{
        const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
        
    isMinLength:(value,length)=>{
    return value.length>=length
    }
}


// module.exports=IsIn=(value,array)=>{
// const newValue=value||''
// return array.find(v=>v==newValue)
// }