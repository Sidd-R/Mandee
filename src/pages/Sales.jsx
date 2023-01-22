import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../styles/home.css";
import RSlider from "../components/Rslider";
import Slider from "../components/Slider";
import "../styles/sales.css";

import Footer from "../components/Footer";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sales({ setSearch, search }) {
  const nav = useNavigate();

  const handleClick = () => {
    console.log("I got clicked");
  };

  const searchQ = () => {};

  return (
      <div className="Models" >
        <div className="home sliderSales">
          <div className="content" >
            <p className="line-1">Special Offers Today on</p>
            <p className="line-1">Rice and Paddy</p>
            <p className="line-2">30% Flat Off</p>
            <p className="line-3">Buy fresh paddy produce from the farms</p>
          </div>
          <div className="searchField">
            {/* Find What you Need */}
            <div style={{ display: "flex",marginTop:"150px" }}>
              <TextField
                style={{
                  backgroundColor: "#rgba(255, 254, 240, 0.5);",
                  width: "60%",
                  margin: "20px",
                  borderRadius: "20px",
                  border: "2px solid white",
                  color: "white",
                  
                }}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button
                variant="contained"
                onClick={() => {
                  nav("/products");
                }}
                style={{
                  background: "green",
                  height: "50px",
                  marginTop: "20px",
                }}
              >
                search
              </Button>
            </div>
          </div>
        </div>
        <div className="sliderSales">
          <Slider
            products={[
              {
                name: "Fresh Spinach",
                image:
                  "https://s3-alpha-sig.figma.com/img/54fe/e853/1fc4779fe44246291f0202a66fd40a59?Expires=1675036800&Signature=Epx3P5X0gMWUWAqSaDhoVPeWz-B5wUNUPQDhPyhqDqjMJUf-2lB~oqVrZ8ZerHQ8XbFKItFD1-yBJVFj-Bce0Awt8dBEeRW4gRflDrFyMyvtzf5LInLpaGyzZm2zPjZKgpkjS2fRsVvMyxH0MteBaFNmqSzCDg1ZInndIRWmpN-r21jjQlIMJxsrwA~cvbPC90MK7pMs06OigFaS9aAUFB~5DS0DYcwT5MOSqLSRPzLc8tkCaZAaZELO7mTifNDVsdLbmZ3w8DvtOnF-RDJ2O-JB-XkgjNfRRBKQTtQ-sQ9ocL~lMVjXdzcl2zMrESNKxKrISJSZknZaKi6v2s4wMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Abhiram Farms",
                place: "Gujarat",
                price: "Rs. 500(10kg)",
                time: "4hrs ago",
              },
              {
                name: "Cauliflower",
                image:
                  "https://s3-alpha-sig.figma.com/img/53fb/8fc7/8ce265581022ba1b7adcf40ee64525f6?Expires=1675036800&Signature=jWkrz4EpeHEbFIKgZzo~ddR-Q4IWhlpBpmq1LnU8XFqXf1lfynxX0dDJQCcB6fPcloIV9TM45MbGjSwqMOOuLV4f0zBNJTco7LpFC8e991mD9xEgqSoaDrVA4Ht-RuAZVN6fHZGA6VPsjMDJKMvXK4MlLqmHLrKoM5K2puMA1D3KYvGEUDFmnLVams01sjVQy6oaMQjIs914tkIWqfJeNvKMt8zyr2Dsjf0Nx4XFRCWQl1T885vfU40rztPWbmC99SRNvRhAt~3CbDrPTgwusZKr3YwoKWX~WhZyxmANoVqIwepoK5p-MxiU-pcN7ZBr4vAinDIsY3zIJqOtywl9~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Shetty Farms",
                place: "Karnataka",
                price: "Rs. 673(8kg)",
                time: "3.5hrs ago",
              },
              {
                name: "Fresh Corn",
                image:
                  "https://s3-alpha-sig.figma.com/img/6820/82ca/a39bc36ea257b57b04c098d8c90836d5?Expires=1675036800&Signature=bKHWQGmW4yH8J2wTvo~8dsJXp9uiAAEPRb4nb~XzWc~UM3XTpO-JScJd8yMQ62Adm34EpavrVU2rOgWd6-VpBo1QydTSnqd~-SqvkGKNhUEFxO-yAJo0~nlkQ6w254OMwilelaMsiIQ6dkTpXvUtc1UdtguwM7IA31ODPxXE2SZgtJhON5s-ufVbaV0V~XfCuF~B6Brl2LsmeM6TKPL3e~VQcmlG6~lsjfFzOYPrM2ngxwgaYvx35ih94EXuGXDUjWwvaRD2vOaqhOHC1OJIsVpXSx9MgcAXkfBP4~U-QbySi0N4QJRzMGIAzMUfh4~8idqe~l3Ckt4H4LG4JuZkkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Harpal Farms",
                place: "Haryana",
                price: "Rs. 543(7kg)",
                time: "7hrs ago",
              },
              {
                name: "Rice",
                image:
                  "https://s3-alpha-sig.figma.com/img/f6e7/15d4/8e179833bc0c8f94bc2e95bb1771d8b3?Expires=1675036800&Signature=OQCtyz~H4g-so1wYdYaz4i5DJsXZ46eDbbqygxwSU~q0yD328k8Bo2yGnAMMdKa7RhgJSvvakLAGHCOoEVtFxa2wWxAKaUQ-aXoXCpi-aEsPS1t~bCQY3oMD9GxdstCg0MoR2ivB-3xEGVQ2zPSZUDu1jPc2QdeeDfUBA9yihz0WnSm7uoZgYxCf0m2bMVEg5YBGxpSsP-4nTR8y5EAYtytWTRyjfXRtS1BxEtIgvQd0E1wwPUfdAoeEAGWWWgERhtWLjh16~uYLCzTqKe7ykKcvbBCGs4~U9O1a8XpFeb35VzW~DNVsVHkPsef2dwA9D-Z4JhW0mz02NJ5zsWu3pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Sadhi Farms",
                place: "Punjab",
                price: "Rs. 265(2kg)",
                time: "1hrs ago",
              },
              { name: "Potato4" },
            ]}
            title={"Top Selling Products"}
          />
        </div>
        <div className="sliderSales">
          <Slider
            products={[
              {
                name: "Cabbage",
                image:
                  "https://s3-alpha-sig.figma.com/img/c733/ed82/6a5849217c8dc3168cdc99cb0bd6fbe8?Expires=1675036800&Signature=f7M7nkP8f2MGvFSFi-ENYf9bqEHVFnrOSRmf4ISmcZUCRhKYSbDI9UDoZ~xUHFN1H0SpUtjck5gbo68aaJFO66yVOvieUwEzagRyAoC-vdgfkYjNjnznzl992yGTeZC7QxOLxQDlFO-JGQczpLr3ThtSXqK8cu5xM6oupxfAn5uhnCX7hUuEqeNSEjVebBL0a8VPImw0brNhCbpNnfDaJvXIyIAimLlLBwqlY5y0wo5TvriCiXvO3sh8N0vPm1hKTu4VBy~eoeDbqds92z0MaYqcZsmzfaNxm33gwt~BC5W0tTVzmyHYtjD~cLoctLorF2AwaqthBz36p0onSG-tKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Ratna Farms",
                place: "Orissa",
                price: "Bid Now!",
                time: "3hrs Remaining",
              },
              {
                name: "Beans",
                image:
                  "https://s3-alpha-sig.figma.com/img/f558/71d4/86854f9b475c773b16ec782743342578?Expires=1675036800&Signature=YSkC6l8lS3M8R5O72EqS2I6Eu3~Jqs-C3PEzcgPWL~sECT6Snsr7k8F~oRm93MJskXAXNshB8vPyZpzNaLjYiloduIEm-7UxypXISW062w8GDdjKf8SzwsO0PXBvtkYYKHxRTFxw0qZqM2fzKWoa8dU59mkw6qo7XXy9Lyjc0wA7V4dVN-s~m1n7M8DfEOy-nF~PWDNp63bAiCGAJNoLpVVGR6stcXciWEGN6YYDKOL0nIeJgA7tEgVb7Bco7J6yEIRHqitfL8nUyfwIaGgoDrG17blVpf1KOJpPVOgQV8aDI5FRJI~qCYVvUeewM8n4xHL2UkDcsuPu7Kb5CB2bxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Gupta Farms",
                place: "U.P.",
                price: "Bid Now!",
                time: "6hrs Remaining",
              },
              {
                name: "Kidney Beans",
                image:
                  "https://s3-alpha-sig.figma.com/img/326f/f790/ceacca5f4a25a7fc6b5d92f311bc6d67?Expires=1675036800&Signature=MuYN13qdLoIczS1n0Wm4YJqDvuZiGGn5x3ArhsDlzCwtdP-G66ojdWwcjLm9LuD5k-zpoFtq4JaAkkhW-McI3dyf2D6M6oTCqpebnQFYMj~fddz40NMryksNG~185bJD7lOu6cw4HoYU4QAAs9Px9wvql6jLxpf~xVbBEg76IpnaOcRc6bFaS50PqiOMNZ2vNVVC6XM-c2ytL5-McbHXBNtF6H7uQ8j4BqhmCnYjjGlNmgQUyuQwzdr4lP3G7qL0XbXWjRcCotT5L8wT~6Y6Aw71uGUj-eJSmrJC2uZGcXqc5pwLo6dbMnysmE01XpJUvFBrjXy641zKt0bpng28DQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Dadiyal Farms",
                place: "Punjab",
                price: "Bid Now!",
                time: "1d Remaining",
              },
              {
                name: "Peas",
                image:
                  "https://s3-alpha-sig.figma.com/img/4ef1/b3e8/20be5cd8cbfcf94a9f669d5022f83b98?Expires=1675036800&Signature=cIFP1UQ6xD745m0cPlCcjLCrJCRHh~Q6yfzQik5aP~cKlQ5Xogn6S8TnYOg9M2EfUjq9iPzXoIGk8SXMN419bthGB7oJVVBnC8sk9x5slJ5RtR6FSSAUUYSdwGCcgCqdOEUe9tgRua2W2MEOoF8S1eDNJd4YAvFs2~4ERZuIavjhH6vcpQXjJmaiVvuLbuKeEds5fMyuI3lkeCfGcL~AtcQ473cdcxuG--dLUSleJSjptPDpfONNqPtlfzVqpaehEk-IfTckZMWwVC1P9sFVOoQac0lZwDNzgVz7JnSa6nqCjL0EiuSfIL~ZJ9oHEarOmnJbRwv4QFVXeWZ0qGI-Hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                desc: "Uploaded by Saathi Farms",
                place: "M.P.",
                price: "Bid Now!",
                time: "15 Mins Remaining",
              },
              { name: "Potato4" },
            ]}
            title={"Live Auctions Now"}
          />
        </div>
        <div className="sliderSales">
          <RSlider
            products={[
              {
                name: "Sanjay Abhiram",
                image:
                  "https://s3-alpha-sig.figma.com/img/aaa9/b1fd/d6bbe8727a56324b7b46644233f49cc0?Expires=1675036800&Signature=T~kAFqx9fUzuInS7zyYyvA05--aviTy~q-AxehZgsV-~6~oyz~Io6do0uQggtayiuRmj41jHSV2h-4PrDXlqZgcS7Hw~an8usTpJhaS8dGY1CKy6OeEgCP2Rpts2BDdJSmu8rTtX-Jiz2c8uvPUW-vf2QOjhuqM~Dk6yK8drjlczEr1YwyQOzs2jk5HM6WwUYZRWE5rTuTLhcNzAI1MuoRSfgyqxO7Ufd9mwDa0Ss~fVj621RzpJP9FrB1sGA2U5K1NG2Y2Yx1NAgra7i3xQ4xzwWLuCyP8NCszLTUZn9zkLBPMADtO2X~Dg4ZqXH3L32VBZx-75sJgxgFVTDq0-1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                info: "45 yrs Old, SirsaGanj, U.P.",
                desc: "AbhiramJi has been farming potatoes (aloo) for the last 25 yrs and knows how to get the best yield.",
                rating: "⭐⭐⭐",
              },
              {
                name: "Harpal Sodhi",
                image:
                  "https://s3-alpha-sig.figma.com/img/d5e0/954b/6a6d8bece660c8f722e3ad358ebf3996?Expires=1675036800&Signature=SsyfeRxiX6q6VaJ6NDi8aWI5LhPx-lePUt2Gkix-6Gd-WJIS6Vk8dGUjh9WptbOIUPSKYMfHJjESXsyxQqly3cgqrqnm3fczfTRHijy3mUpCrVdZtsQtMMIYeyFsJ-w8v5x1X6gcC1jokv~WC7XDGd5kewVpKdRSvC-PecbmaUd8OdKVwyB3f5FmMARUqBDzhCf~W~XNIKLKnU0eBjEIvTB7bQhxQLmi3onKJvDm4KwN7Xa3jzkDhHca38XfUCEowKI3LONjq~Lz8qF52QDfOVmkZLyGHaBoESP7~yrdqaFdPn9uFmC8gXE0aA8PjGC5bEmOmOaumYMDfBdp9ZTmYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                info: "62 yrs Old, Ludhiana, Punjab",
                desc: "Mr. Dadiyal Sir is an expert in growth of Rice with an experience of 50 years as he continues his family legacy",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Om Pilgaonkar",
                image:
                  "https://s3-alpha-sig.figma.com/img/0e6b/d43d/1a5b2af774c0aca7ca96daa31afdea4c?Expires=1675036800&Signature=RaqdggBVXuJhYkj8FDxf8u2EfGSIZBp9-vBtCw8NTJVQdOpHq2QLZVc600ejBFb-Gy1HYQ1P7cGWckILsPGkcAyDnoyU~xJGHyRAU5EHiEVbeYtTTkoPLr0CbNNrCEnWUUmWpq69zs4ejBUYDSF4kfmQ~neu8kWi9Vk8GD0~ePbaKQm1bn3~XYoAHIRpDMw6~pNenG-F7kIxCV29nYrAQJxgHEadnPnx88AaZWqHqlP-WVx0fsPLCxVNyb~8NnJsjTqLhPrC4HwlT-v7tE~oRruPPuMuxaCA2gviItAEFCqh0ZXro6TFfdIVd-jTIIeMd7aIlkujH47FJ8FzAnPxgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                info: "29 yrs Old, Nagpur, Maharashtra",
                desc: "Om Sir is a farmer who believes in modern technology for his farms and guarantees an excellent ORANGE produce",
                rating: "⭐⭐",
              },
              {
                name: "Harjot Singh",
                image:
                  "https://s3-alpha-sig.figma.com/img/2030/3f56/a8d0775227eda947d7067e236af2f28e?Expires=1675036800&Signature=Jm0Jr6gitUGLXVqJp04SKrsQ7jcKpLogP-C7iqkRPh-6BCwRheDlrgXcbBi88Cs-eA0sjukGZrg7YgjVkb~JcFhkseIK60RfzsJ~5bam-bQqANHbHcig9OS82YG4EfvO7KLKA96jXkOIq92~pUobBxiYeuMGnkUDOLRnQd6nskdXcA-GK8NU9wV7IFwJR2HX4ChHnenjsFqtbVIqESJmMifn3DHhGojmNSRUaNxazOb7d3qGXDc3~JBI5ErLwokI7ZLqaVAeWE14jP1l8OBquNDby9PPzItyv~CM4qGEH6ruaH97Nrp8k0hqS~BHQ2YzLe2oIrHTlb2CMwEjgDrPNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                info: "47 yrs Old, Sonpat, Haryana",
                desc: "Mr. Harjot Singh Sir is a ‘Kisann’ with the highest growth rate of WHEAT crops and is very acclaimed",
                rating: "⭐⭐⭐⭐",
              },
            ]}
            title={"Top Rated Farmers"}
          />
        </div>
      </div>
  );
}
