const {isValidEmail, isEmpty,isValidId, isMinLength, } = require('./helper');
const requiredMessage=(value)=>`${value} is required`
const Passwordlength=6
const InvalidEmailMessage='please Enter a valid Email Address'
const InvalidPasswordMessage=`Must be Minimum ${Passwordlength} Characters `
module.exports={
    CreateUserValidator:(req,res,next)=>{
    const {body}=req
    if (isEmpty(body.name)) return next({status:422,msg:requiredMessage("Name")})
    if (isEmpty(body.role)) return next ({status:422,msg:requiredMessage("Role")})
    if (isEmpty(body.email)) return next ({status:422,msg:requiredMessage("email")})
    if (!isValidEmail(body.email)) return next({status:422,msg:InvalidEmailMessage})
    next();
},


deleteUserValidator:(req,res,next)=>{
    const {body}=req
    if (isEmpty(body.email)) return next({status:422,msg:requiredMessage("Email")})
    if (isEmpty(body.password)) return next({status:422,msg:requiredMessage("password")})
        
    next();
        
    
}
};