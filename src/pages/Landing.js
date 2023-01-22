import React from "react";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="Models" >
      <div className="home1 section">
        {/* <h1>Hello</h1>  */}
        <div className="home1-content" >
          <p className="m1" style={{marginTop:"-330px"}}>Where they Decide,Sell and Share</p>
          <h1 className="m2" style={{marginTop:"0px"}}>A platfrom for the 'Kisaan'</h1>
        </div>
      </div >
      <div className="land section" >
        <h2 className="title">A Community of 2000+ Farmers</h2>
        <p className="aim">
          Removing Middlemen and getting the best profits for farmers is our aim
        </p>
        <div className="land-content">
          <img
            src="https://s3-alpha-sig.figma.com/img/9f61/2000/64659fef02669d02321983634df8bb28?Expires=1675036800&Signature=AfbCqTU6fygbMHf4s3OgGX3NSn~tBtiNzGvLxR22yrABgH0mc-4xwwXW9OILfgFbeFClVar6t0mwmcX2k0KA-lulteuYIWlwgEooHuuJ6Lfc4ZoVgAOG4puxCZhYImWQ8k34LKTeggRWwpwjU07Whk0I0Fp0IJ6VVpVJsQAR3GdPxN158ew8TDSGf1o-3mBztL-D7O9KXKSYpX8Y4sRLsHAs27-ZDxm-s14hgA7qF-o7gF9oGSWx3An8OzTbZ~UP5gWPFhHUFz71MQYNjl0Lzto-oE~v0Kt8nZm7lw6kdoZzR2fgdUblMSyrL3mzG3jaBJlmlI5zR7vkxw3ZdBcUew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            srcset=""
          />
          <p className="content">
            The farmers upload their crops, and have an option of selling their
            crops through Auction. This allows them to get the highest BID and
            Earn Maximum Profit. They Can decide whom they want to sell their
            purchase too. Hence this is a WIN-WIN situation for farmers as they
            get to earn and decide and retailers who get fresh produce at a
            reasonable price
          </p>
        </div>
      </div>
      <div className="land section">
        <h2 className="title">Why this Cause?</h2>
        <div className="land-content">
          <p className="content">
            FOR SEVERAL YEARS, FARMERS IN INDIA HAVE HAD A LITTLE LIBERTY IN
            CHOOSING MARKETS AND PURCHASERS FOR THEIR PRODUCE. THEY ARE OFTEN
            EXPLOITED BY MEDIATORS CAUSING THEM TO LOSE ALL THE PROFITS.
            ACCORDING TO RESEARCH, MEDIATORS HAVE BECOME DOMINATING BUYERS OF
            THE AGRICULTURAL MARKET, RESULTING IN THEM TAKING CONTROL OVER THE
            PLIGHT OF THE FARMERS AND GULPING ALL THE PROFITS. THE FARMERS WORK
            DAY AND NIGHT EXPECTING A GOOD YIELD. THEY USE A LOT OF FINANCIAL
            RESOURCES ON LOANS AND BUYING FERTILIZERS, SEEDS ETC. SO, THEY HAVE
            THE RIGHT TO ENJOY EVERY RUPEE GAINED ON THEIR CORP
          </p>
          <img
            src="https://s3-alpha-sig.figma.com/img/6851/ae7e/048d41da1d20dcb90fec59f49258c3b5?Expires=1675036800&Signature=IFe9iZtFai-8lbafS00pm6bbs4T~zNLX07hKzz4GtwIswDJI~4-8nnxrYozqHR9BcgoJObC-P9uPuxHLk7rAWt2cibXYJesXP37r6IUU8tB~ZoIjrWTAgWgXvbjBc6zVwyuAghUTsL68vcADsTvyl9gPwXgQQuEOxQ29S50YJIoDcuviUoRLGu4YAPBXyZ~jdRbyRvDUwMsEzwjAb2l5gXvrSBAcDEZC95a8O5S8RMDLgmUt648FWVqJGfg1-podLDtHCkUDpBTG20O2CHYS7HP1H2LvjQ3xnEb5MMv3W4DZ9OkjWibemTsVPVj-YslCKBuDQtFYUdFyjdJ~zg-10A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="home2 section">
        <h2 className="title">Technology Drive in Farmers</h2>
        <div className="home2-content">
          <img
            style={{ width: "80%" }}
            src="https://s3-alpha-sig.figma.com/img/edd0/deea/184a95e0f6ba86437c5a3b573e6cee8e?Expires=1675036800&Signature=m0-O6cd4iD2b~4lggkSsYLOJROjSioy9yd5L~zyckU-rQmFnrmaYeJi0qb5pnPeYxhgs~30HOx68eqHLz22jlwze4pbGzjkZwIVINGMxumzK2dyKcO9wm9pm5W8Q9Ez5rZkBKUxBZb2Z5e2QvtK1KDbwL5JrqFImq0f5Wj38Nhp~1s15AD7PGfmX3DI021dYuSRTDv21mtCbVJm4KrQDIcfEtM8uNH1rdeknunxKUGscDZLgSadya61KhqN7kBeT9gI6jLTSSEWuSs-s6IuJz5hoUvoFes6vj8nKe1N0Zrcm-G4oCi~ykq76fqaErOzTaU35wArzR8A1c6ED0qjJxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            srcset=""
          />
          <img src="../../Images/services.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
