import ProductCard from '../components/ProductCard';
import'../styles/Dashboard.css'
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import SalesCard from '../components/SalesCard';
import axios from 'axios';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#ffffff" ),
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

function DashboardB({profile,setProfile}) {
  const [productlist, setProductlist] = useState(null)
  const [saleList, setSaleList] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:4000/deals/b/${profile.uid}`).then(res => {
                  console.log("hello",res);
        console.log(res.data.data.info,'ff');
        setSaleList(res.data.data.info)

    })

    
    }, [])

  const profilepic ={
    width: '200px',
    height: "200px",
    objectFit: "cover",
    borderRadius: "100px",
    margin: "10px 60px"
  }

    return (
      <div className='main-dashboard'>
        <div className='bold-text'>
          <h1>Dashboard</h1>
          <p style={{color:"rgba(93, 136, 92, 0.91)"}}>View your Uploads, Sales and Revenue Earned!</p>
        </div>

        <div className="profile">
          {profile.picture?<img src={require(`../uploads/${profile.picture}`)} className='profile-img' style={profilepic}/>:null}
          <div className="profile-details">
            <div className='profile-info'>Name: {profile.name}</div>
            <div className='profile-info'>Company Name: {profile.company}</div> 
            <div className='profile-info'>Contact No: {profile.contact}</div>
            <div className='profile-info'>Mail: {profile.email}</div>
            <div className='profile-info'>Current Rating: {profile.rating}</div>
            <ColorButton variant="outlined" >Edit</ColorButton>
          </div>
        </div>

        {/* <div className="uploads">
          <div className="bold-text"><h1> Uploads </h1></div>
           {productlist?productlist.map(e => {
            return <ProductCard name={e.name} price={e.price} company={e.company} contact={e.contact} picture={e.picture} type={2}/>
          }):<h3 style={{color:"green",marginLeft:"130px"}}> No Products Uploaded yet</h3>} 
        </div> */}

        <div className="bold-text"><h1> Items Purcheased </h1></div>
        <div className="sales">
          {saleList?saleList.map(e => {
              return e.type == 1 || e.type == null?  <SalesCard deal={e} profile={profile}/>:null
          }):<h3 style={{color:"green",marginLeft:"130px"}}> No Sales yet</h3>} 
          {/* <SalesCard/>
          <SalesCard/>
          <SalesCard/> */}

        </div>

        <div className="bold-text"><h1> Items Bid </h1></div>
        <div className="sales">
          {saleList?saleList.map(e => {
            console.log(saleList.type,"type",saleList)
              return e.type === 0 ?  <SalesCard deal={e} profile={profile}/>:null
          }):<h3 style={{color:"green",marginLeft:"130px"}}> No Bids yet</h3>} 
          {/* <SalesCard/>
          <SalesCard/>
          <SalesCard/> */}

        </div>
          
      </div>
    );
}

export default DashboardB;