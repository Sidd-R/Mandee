const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const multer = require("multer");

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
  const {name,type,location,quantity,uid,company,contact,expire,category,price} = req.body;
  const {filename} = req.file;

  console.log(req.body,filename);

  try {
      
      connection.query("INSERT INTO products SET ?",
        {
          name:name,
          location:location,
          company:company,
          contact:contact,
          mode:Number(type),
          picture:filename,
          status: 1,
          etime: new Date(expire).toUTCString(),
          utime: new Date().toUTCString(),
          fid:uid,
          quantity:quantity,
          category:category,
          price:price
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
router.get("/:category",(req,res)=>{
  try {
      console.log(req.params);
      const {category} = req.params
      connection.query(`SELECT * FROM products WHERE category="${category}"`,(err,result)=>{
          if(err){
              console.log("error")
          }else{
            console.log(result)
            res.status(201).json({data:{status:'success',info:result}})
          }
      })
      // res.send("received")
  } catch (error) {
    console.log(error);
      res.status(421).json({status:422,error})
  }
});

router.post("/qty",(req,res)=>{
  try {
      console.log(req.params);
      connection.query(`UPDATE products SET price=${req.body.price} WHERE pid="${req.body.pid}"`,(err,result)=>{
          if(err){
              console.log("error")
          }else{
            console.log(result)
            res.status(201).json({data:{status:'success',info:result}})
          }
      })
      // res.send("received")
  } catch (error) {
    console.log(error);
      res.status(421).json({status:422,error})
  }
});

router.get("/u/:id",(req,res)=>{
  try {
      console.log(req.params);
      const {id} = req.params
      connection.query(`SELECT * FROM products WHERE fid="${id}"`,(err,result)=>{
          if(err){
              console.log("error")
          }else{
            console.log(result)
            res.status(201).json({data:{status:'success',info:result}})
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