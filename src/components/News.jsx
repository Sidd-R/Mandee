import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/News.css";

export default function MediaCard() {
  return (
    <Stack direction="row" justifyContent="space-evenly" alignItems="center">
      <div className="newsBox">
        <Card style={{ height: "450px" }}>
          <CardMedia
            sx={{ height: 150, backgroundPosition: "top" }}
            image="https://kj1bcdn.b-cdn.net/media/84512/kuldeep-singh-dhaliwal.jpg?width=450"
            title="green iguana"
          />
          <CardContent style={{padding: "10px 15px", textAlign: "left"}} >
            <Typography
              gutterBottom
              style={{ color: "#50734F" }}
              variant="h5"
              component="div"
            >
              New Agriculture Policy in Punjab by March 31: Kuldeep Singh
              Dhaliwal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dr. Sukhpal Singh claimed that the Punjab government has been
              making constant efforts to improve farmer welfare & the state's
              agriculture industry Ayushi Sikarwar Published on 18 January, 2023
              5:49 PM IST
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://krishijagran.com/news/new-agriculture-policy-in-punjab-by-march-31-kuldeep-singh-dhaliwal/"
              type="button"
              className="newsLink"
            >
              Learn More
            </a>
          </CardActions>
        </Card>
      </div>
      <div className="newsBox">
        <Card style={{ height: "450px" }}>
          <CardMedia
            sx={{ height: 150, backgroundPosition: "top" }}
            image="https://kj1bcdn.b-cdn.net/media/84497/fertilizer-subsidy.jpg?width=450"
            title="green iguana"
          />
          <CardContent  style={{padding: "10px 15px", textAlign: "left"}}>
            <Typography
              gutterBottom
              style={{ color: "#50734F" }}
              variant="h5"
              component="div"
            >
              Fertilizer Ministry Requests Additional Rs 30,000 crore Subsidy
              for Final Quarter
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Russia-Ukraine war and rise in commodity prices, notably for
              feedstocks like natural gas and fertilizers, led to a major
              overestimation of the subsidy needs.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://krishijagran.com/news/fertilizer-ministry-requests-additional-rs-30-000-crore-fertiliser-subsidy-for-final-quarter/"
              type="button"
              className="newsLink"
            >
              Learn More
            </a>
          </CardActions>
        </Card>
      </div>
      <div className="newsBox">
        <Card style={{ height: "450px" }}>
          <CardMedia
            sx={{ height: 150, backgroundPosition: "top" }}
            image="https://kj1bcdn.b-cdn.net/media/84486/organic-foods.jpg?width=450"
            title="green iguana"
          />
          <CardContent  style={{padding: "10px 15px" ,textAlign: "left"}}>
            <Typography 
              gutterBottom
              style={{ color: "#50734F" }}
              variant="h5"
              component="div"
            >
              Govt Plans to Market Organic Farm Products Under One Roof Through
              Cooperatives
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Individual marketing of agricultural products by growers is in
              general inefficient, and the government believes cooperatives can
              play a critical role in assisting farmers in obtaining
              remunerative prices, according to Gyanesh Kumar, secretary to the
              ministry of cooperation.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://krishijagran.com/news/govt-plans-to-market-organic-farm-products-under-one-roof-through-cooperatives/"
              type="button"
              className="newsLink"
            >
              Learn More
            </a>
          </CardActions>
        </Card>
      </div>
    </Stack>
  );
}
