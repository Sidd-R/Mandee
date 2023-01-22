const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const multer = require("multer");
const moment = require("moment")

// img storage confing
var imgconfig = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"../main/src/uploads");
  },
  filename:(req,file,callback)=>{
      callback(null,`image-${Date.now()}.${file.originalname}`)
  }
});


// img filter
const isImage = (req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(null,Error("only image is allowd"))
  }
}

var upload = multer({
  storage:imgconfig,
  fileFilter:isImage
})



// register userdata
router.route('/').post(upload.single("photo"),(req,res)=>{
  const {name,email,location,password,type,phone,company,} = req.body;
  const {filename} = req.file;

  console.log(req.body,filename);

  try {
      
      connection.query("INSERT INTO users SET ?",
        {
          name:name,
          location:location,
          company:company,
          password:password,
          contact:phone,
          profile:Number(type),
          email:email,
          rating:null,
          picture:filename
        },(err,result)=>{
          if(err){
              console.log(err)
          }else{
              console.log("data added")
              // res.status(201).json({status:201,data:req.body})
              res.send(result)
          }
      })
  } catch (error) {
    console.log(error,'kk');
      // res.status(422).json({status:422,error})
  }

  // res.json("registered")
});


// get user data
router.get("/:email/:password",(req,res)=>{
  try {
      console.log(req.params);
      const {email,password} = req.params
      connection.query(`SELECT * FROM users WHERE email="${email}"`,(err,result)=>{
          if(err){
              console.log("error")
          }else{
              console.log(result)
              if (result[0].password === password) {
                console.log(password,'nn',result[0].password)
                res.status(201).json({data:{status:'success',info:result[0]}})
              }
              else res.json({data:{status:'fail'}})
          }
      })
      // res.send("received")
  } catch (error) {
    console.log(error);
      res.status(421).json({status:422,error})
  }
});


// delete user
router.delete("/:id",(req,res)=>{
  const {id} = req.params;
 try {
  conn.query(`DELETE FROM usersdata WHERE id ='${id}'`,(err,result)=>{
      if(err){
          console.log("error")
      }else{
          console.log("data delete")
          res.status(201).json({status:201,data:result})
      }
  })
 } catch (error) {
  res.status(422).json({status:422,error})
 }
})


module.exports = router