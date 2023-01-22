import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar'
import { TextField, Button, Stack } from '@mui/material';
import '../styles/CommoditiesData.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CommoditiesData() {
    const [details, setDetails] = useState({
        name: "",
        state: "",
        district: "",
    })

    const [table, setTable] = useState(false);

    const [warning, setWarning] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        })
    };

    console.log(details);

    const [commodities, setCommodities] = useState([]);
    let filter = "";
        details.name!=="" && (filter = filter + "&filters%5Bcommodity%5D=" + details.name) 
        details.state!=="" && (filter = filter + "&filters%5Bstate%5D=" + details.state) 
        details.district!=="" && (filter = filter + "&filters%5Bdistrict%5D=" + details.district) 
    
    const url = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
    const handleSeacrh = () => { 
        console.log(filter) 
        setWarning(false);
        axios.get(url + filter)
            .then(res => {
                console.log(res);
                setCommodities(res.data.records)
                res.data.records.length !== 0 ? setTable(true) : setTable(false);
            })
            .catch(err => { setWarning(true) })
        console.log(warning);
        console.log(commodities);
        console.log(table);
    };

    return (
        <div style={{marginTop:"60px"}}>
            <div className="registerForm" style={{ "border": "2px solid #A0A189", "borderRadius": "10px", textAlign: "center" }}>
                <form>
                    <h1 className="livemarketLarge">Search today's price of various crops</h1>
                    <Stack spacing={10} direction="row" justifyContent={"space-around"} alignItems={"center"}>
                        <div>
                            <p className="livemarketText">Name of the Crop</p>
                            <TextField name="name" onChange={handleChange} variant="filled" size="small" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                        </div>
                        <div>
                            <p className="livemarketText">State</p>
                            <TextField name="state" onChange={handleChange} variant="filled" size="small" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                        </div>
                        <div>
                            <p className="livemarketText">District</p>
                            <TextField name="district" onChange={handleChange} variant="filled" size="small" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                        </div>
                    </Stack>
                    <Button color="inherit" onClick={handleSeacrh} style={{ "backgroundColor": "#F0F5D1", "width": "60%", "margin": "20px", "border": "2px solid #A0A189", "borderRadius": "20px" }}><p className="livemarketText">Search</p></Button>
                </form>
            </div>
            {warning ? (
                <p class="livemarketLarge">Currently not available</p>
            ) : (
                table ? (
                    <div className="livemarketTable">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><p className="livemarketHead">Commodity</p> </TableCell>
                                    <TableCell align="center"><p className="livemarketHead">State</p></TableCell>
                                    <TableCell align="center"><p className="livemarketHead">District</p></TableCell>
                                    <TableCell align="center"><p className="livemarketHead">Avg Price(100kg)</p></TableCell>
                                    <TableCell align="center"><p className="livemarketHead">Arrival Date</p></TableCell>
                                    <TableCell align="center"><p className="livemarketHead">Variety</p></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {commodities.map((row) => (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center" component="th" scope="row">
                                            <p className="livemarketText">{row.commodity}</p>
                                        </TableCell>
                                        <TableCell align="center"><p className="livemarketText">{row.state}</p></TableCell>
                                        <TableCell align="center"><p className="livemarketText">{row.district}</p></TableCell>
                                        <TableCell align="center"><p className="livemarketText">{row.modal_price}</p></TableCell>
                                        <TableCell align="center"><p className="livemarketText">{row.arrival_date}</p></TableCell>
                                        <TableCell align="center"><p className="livemarketText">{row.variety}</p></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                ) : (<p className="livemarketLarge" style={{ padding: "10px", textAlign: "center" }}>Search to find live prices</p>)
            )}

        </div>
    )
}