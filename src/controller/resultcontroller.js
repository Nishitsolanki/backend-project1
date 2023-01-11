const resultmodel = require("../model/resultmodel");

const result = async function (req, res) {
  let data = req.body;
  let { totalmarks, studentid, resultstatus } = data;

  if(!(/^[0-9]+$/.test(totalmarks))){
    return res.status(400).send({status:false,message:"totalmarks is required"})
  }

  if (!studentid) {
    return res.status(400).send({ status: false, message: "studentid is required" });
  }

  if(!(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(studentid))){
    return res.status(400).send({status:false,message:"objectid isrequired"})
  }

  if (!resultstatus) {
    return res
      .status(400).send({ status: false, message: "resultstatus is required" });
  }

  if (Object.keys(data).length == 0) {
    return res.status(400).send({ status: false, message: "data is required" });
  }

  const resultcreate = await resultmodel.create(data);
  return res.status(201).send({ status: true, message: resultcreate });
};

const get = async function (req, res) {
  let studentid = req.params.studentid;

  

  let student = await resultmodel.find({ studentid: studentid });
  return res.status(200).send({ status: true, message: student });
};

const query = async function (req, res) {
  let queryw = req.query;

  let { resultstatus, studentid } = queryw;
  //console.log(resultstatus);


  let drone = await resultmodel.find({ studentid: studentid, ...queryw });
  return res.status(200).send({ status: true, message: drone });
};

module.exports = { result, get, query };
