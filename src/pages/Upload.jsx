import React, { useState } from "react";
import { Typography, TextField, Stack, Button, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import IconButton from '@mui/material/IconButton';
import '../styles/Upload.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Upload({profile}) {
    const nav = useNavigate()
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState('')
    const [expire, setExpire] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    // const [details, setDetails] = useState('')

    const [image , setImage] = useState("");

    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
        console.log(image);
    }


    const submit = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo",image)
        formData.append("name",name);
        formData.append("type",type)
        formData.append("price",price)
        formData.append("expire",expire)
        formData.append("quantity",quantity)
        formData.append("category",category)
        formData.append("location",profile.location)
        formData.append("company",profile.company)
        formData.append("uid",profile.uid)
        formData.append("contact",profile.contact)

        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post('http://localhost:4000/products',formData,config);
        let deal = {
            fid:profile.uid,

        }
        // axios.put('http://localhost:4000/deals',)
       
        nav('/sales')
    }

    return (
        <div className="Upload" style={{marginBottom:"60px"}}>
            {/* <Navbar /> */}
            <div className="Message">
                <Typography variant="h2" className="largeHeading">Upload your Crop!</Typography>
                <Typography variant="p" className="mediumHeading" style={{marginLeft:"6px"}}>Upload your Crops here to get the best Buyers and Results</Typography>
            </div>
            <div className="uploadForm" style={{ "border": "2px solid #A0A189", "borderRadius": "10px" }}>
                <form>
                    <Stack spacing={15} direction="row" justifyContent={"center"} alignItems={"center"}>
                        <div>
                        <Stack alignItems="center" spacing={2} className="uploadImage">
                        <IconButton aria-label="upload picture" component="label" style={{"color":"#50734F"}}>
                        <input hidden onChange={handleImage} accept="image/*" type="file" name="photo"/>
                        <AddAPhotoIcon />
                        </IconButton>
                        <Button variant="contained" component="label" color="inherit" style={{"backgroundColor": "#F0F5D1","width": "60%","margin":"20px", "borderRadius":"20px"}}>
                        <p className='Navbar-text'>Image of your crop</p>
                        <input hidden onChange={handleImage} accept="image/*" multiple type="file" name="photo"/>
                    </Button>
                    </Stack>
                        </div>
                        <div>
                            <Stack spacing={5}>
                                <div>
                                    <p className="Navbar-text">Name</p>
                                    <TextField name="name" onChange={(e) => setName(e.target.value)} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 30px", "width": "90%" }} />
                                </div>
                                <div>
                                    <Stack spacing={5} direction="row">
                                        <div>
                                            <p className="Navbar-text">Category</p>
                                            {/* <TextField name="category" onChange={(e) => setCategory(Number(e.target.value))} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} /> */}
                                            <Select
                                                name="category"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={category}
                                                label="category"
                                                onChange={(e) => setCategory(e.target.value)}
                                                style={{width:"200px",marginLeft:"20px","border": "2px solid #A0A189", "borderRadius": "20px"}}
                                            >
                                                <MenuItem value={"rice"}>Rice</MenuItem>
                                                <MenuItem value={"pulses"}>Pulses</MenuItem>
                                                <MenuItem value={"wheat"}>Wheat</MenuItem>
                                                <MenuItem value={"fruits"}>Fruits</MenuItem>
                                                <MenuItem value={"vegetables"}>Vegetables</MenuItem>
                                            </Select>
                                        </div>
                                        <div>
                                            <p className="Navbar-text">Quantity(kg)</p>
                                            <TextField name="quantity" onChange={(e) => setQuantity(Number(e.target.value))} type="number" variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                        
                                    </Stack>
                                </div>
                                <div>
                                    <Stack spacing={5} direction="row">
                                        <div>
                                            <p className="Navbar-text">Expire</p>
                                            <TextField name="expire" onChange={(e) => setExpire(e.target.value)} type="date" variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                       
                                        <div>
                                            <p className="Navbar-text">Price(/kg)</p>
                                            <TextField name="price" onChange={(e) => setPrice(Number(e.target.value))} type="number" variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                    </Stack>
                                </div>
                                <FormControl>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormLabel id="demo-row-radio-buttons-group-label"><p className="Navbar-text">Select an option to sell</p></FormLabel>
                                        <div style={{"width":"30px"}}></div>
                                        <FormControlLabel onClick={(e) => setType(Number(e.target.value))} name="type" value="0" control={<Radio sx={{ "color": "#50734F", '&.Mui-checked': { "color": "#50734F" } }} />} label="Auction" />
                                        <FormControlLabel onClick={(e) => setType(Number(e.target.value))} name="type" value="1" control={<Radio sx={{ "color": "#50734F", '&.Mui-checked': { "color": "#50734F" } }} />} label="Direct Sell" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </div>
                    </Stack>
                    <Button color="inherit" onClick={submit}
                    style={{ "backgroundColor": "#F0F5D1", "width": "60%", "margin": "30px", "borderRadius": "20px" }}>
                        <p className="Navbar-text">Upload</p>
                    </Button>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Upload;