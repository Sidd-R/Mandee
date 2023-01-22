import '../styles/Products.css'
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Buy from './Buy';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffffff" ),
    backgroundColor: "#F0F5D1",
    '&:hover': {
        backgroundColor: "#A0A189",
        color:"#F0F5D1"
    },
    border: "none",
    borderRadius: "30px",
    color:"#5D885C",
    fontWeight:"bold",
    marginLeft:"20px",
marginRight:"20px",
    paddingLeft:"25px",
    paddingRight:"25px",
    fontSize: "17px"
}));


function ProductCard({name,company,picture,price,location,contact,type,details,profile,setProductlist,quantity}) {
    


    return (
        <div className='product-card'>
            {/* <div className=''> */}
                <img className='product-image' src={require(`../uploads/${picture}`)}  />
            {/* </div> */}
            <div className='product-detail'>
                <div className='product-title'>{name}, {company}</div> 
                <div className='product-info'>Rs. {price} per kg</div>
                <div className='product-info'>Quantity availaible: {quantity} kg</div>
                <div className='product-info'>{location}</div>
                <div className='product-info'>Contact No: {contact}</div>
                <div className='product-buttons'>
                {type == 1? 
                <>
                <Buy price={price} details={details} profile={profile} setProductlist={setProductlist}/>
                <ColorButton variant="contained" >Add to Cart</ColorButton>
                </>
                :
                <>
                <ColorButton variant="contained" >Edit</ColorButton>
                <ColorButton variant="contained" >Delete</ColorButton>
                </>
                }
                {/* <ColorButton variant="contained" >Connect</ColorButton> */}
                </div>
            </div>
        </div>
    );
}
                {/* <ColorButton variant="contained" >Connect</ColorButton> */}

export default ProductCard;