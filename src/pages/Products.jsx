// import React from 'react'
import Search from '../components/Search'
import '../styles/Products.css'
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ProductCard from '../components/ProductCard';
import Auction from '../components/Auction';
import Sort from '../components/Sort';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ColorButton = styled(Button)(() => ({
  // color: theme.palette.getContrastText("#ffffff" ),
  backgroundColor: "#fffffg",
  '&:hover': {
    backgroundColor: "#A0A189",
    color:"#F0F5D1"

  },
  border: "1px solid #A0A189",
  borderRadius: "30px",
  color:"#5D885C",
  fontWeight:"bold",
  marginLeft:"20px",
  marginRight:"20px",
  paddingLeft:"25px",
  paddingRight:"25px"
}));

const Products = ({search,setSearch,profile}) => {
  const [productlist, setProductlist] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:4000/products/${search}/`).then(res => {
                  console.log("hello",res);
        console.log(res.data.data.info);
        setProductlist(res.data.data.info)
    })
    
  }, [productlist])

  const submit = () => {
    axios.get(`http://localhost:4000/products/${search}/`).then(res => {
                  console.log("hello",res);
        console.log(res.data.data.info);
        setProductlist(res.data.data.info)

    })
  }
  
 

  return (
    <div className='main'>
        <div className='text-above-search'>Find what you Need!</div>
        <div style={{display:"flex"}}>
        <div className='search' style={{border:"none"}}>
          <Search setSearch={setSearch}/>
          </div>

          <div className="buttton-group" style={{display:"flex","marginTop":"25px"}}>
            {/* <ColorButton variant="outlined" >Category</ColorButton>
            <ColorButton variant="outlined" >Location</ColorButton> */}
            <ColorButton variant="outlined" onClick={submit} style={{width:"100px","height":"42px"}}>Submit</ColorButton>
            <Sort/>
          </div>
          </div>
        <div className='product-list'>
          {/* <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/> */}
          {productlist? productlist.map(e => {
            let x = null
            if (e.mode == 0) x = <Auction name={e.name} price={e.price} company={e.company} contact={e.contact} picture={e.picture} type={1} details={e} profile={profile} setProductlist={setProductlist} quantity={e.quantity}/>
            else x = <ProductCard name={e.name} price={e.price} company={e.company} contact={e.contact} picture={e.picture} type={1} details={e} profile={profile} setProductlist={setProductlist} quantity={e.quantity}/>
            if (e.quantity > 0)
              return (x)
          }):null}
        </div>


    </div>
  )
}

export default Products