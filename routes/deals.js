const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

// register userdata
router.route('/').post((req,res)=>{
  const {revenue,picture,quantity,bid,fid,price,name,type} = req.body;

  console.log(req.body,'deal');

  try {
      
      connection.query("INSERT INTO deals SET ?",
        {
          picture:picture,
          price:price,
          quantity: quantity,
          date: new Date().toUTCString(),
          fid:fid,
          bid:bid,
          revenue:revenue,
          name:name,
          type:type
        },(err,result)=>{
          if(err){
              console.log(err)
          }else{
              console.log("deal done")
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

router.get("/u/:id",(req,res)=>{
  try {
    const {id} = req.params
    console.log('ll',id);
    connection.query(`SELECT * FROM deals WHERE fid=${id}`,(err,result)=>{
      if(err){
          console.log("error")
      }else{
        console.log(result)
        res.status(201).json({data:{status:'success',info:result}})
      }
    })
  } catch (error) {
    console.log(error);
      res.status(421).json({status:422,error})
  }
});

router.get("/b/:id",(req,res)=>{
  try {
    const {id} = req.params
    console.log('ll',id);
    connection.query(`SELECT * FROM deals WHERE bid=${id}`,(err,result)=>{
      if(err) console.log("error")
      else{
        console.log(result)
        res.status(201).json({data:{status:'success',info:result}})
      }
    })
  } catch (error) {
    console.log(error);
    res.status(421).json({status:422,error})
  }
});



module.exports = router