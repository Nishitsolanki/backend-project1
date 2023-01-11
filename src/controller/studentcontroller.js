const { aggregate } = require('../model/studentmodel');
const studentmodel = require('../model/studentmodel')

const studentcreate= async function (req,res){

    let data = req.body

    let {name,age,mark1,mark2,mark3} = data

    if (Object.keys(data).length == 0) {
        return res.status(400).send({ status: false, message: "data is required" });
      }

    if(!name){
        return res.status(400).send({status:false,message:"name is required"})
    }

     if(!(/^[A-Z-a-z]{2,100}$/i.test)(name)){
        return res.status(400).send({status:false,message:"name should be alphabets"})
     }

     if(!(age)){
        return res.status(400).send({statu:false,message:"only number is required"})
     }

     if(!mark1){
        return res.status(400).send({status:false,msg:"mark1 is required"})
     }

     if(!(/^\S[0-9]{0,3}$/.test)(mark1)){
        return res.status(400).send({status:false,message:"enter the only number"})
     }

     if(!mark2){
        return res.status(400).send({status:false,msg:"mark2 is required"})
     }

     if(!(/^\S[0-9]{0,3}$/.test)(mark2)){
        return res.status(400).send({status:false,message:"enter the only number"})
     }

     if(!mark3){
        return res.status(400).send({status:false,msg:"mark3 is required"})
     }

     if(!(/^\S[0-9]{0,3}$/.test)(mark3)){
        return res.status(400).send({status:false,message:"enter the only number"})
     }

     if(!(/^\S[0-9]{0,3}$/.test)(age)){
        return res.status(400).send({status:false,message:""})
     }

     if(!(/^\S[0-9]{0,3}$/.test(mark1))){
        return res.status(400).send({status:false,message})
     }


    let create = await studentmodel.create(data)
        return res.status(201).send({status: true, message:create})
     
}

module.exports={studentcreate}