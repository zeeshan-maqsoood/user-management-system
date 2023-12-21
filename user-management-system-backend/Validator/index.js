const {body} =require("express-validator")
const mongoose=require("mongoose")


const requiredField=(name)=>body(name).notEmpty().withMessage(`${name} must required`)
const isEmail=(email)=>body(email).isEmail().withMessage(`${email} is required`)
const isLength=(name,min)=>body(name).isLength({min}).withMessage(`${name} must be minimun ${min} Characters`)

const isId=(id)=>body(id).custom(value=>this.isValidId(value)).withMessage(`${id} is invalide`)


exports.isValidId=(id)=>{
return mongoose.isValidObjectId(id)
}
exports.roleValidatator=[
    requiredField("name"),
    requiredField("email")
]