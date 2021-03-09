import React from "react";
import "./Home.css";
import Product from "./Product";
import MovingImages from './MovingImages';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <MovingImages />
        

        <div className="home__row">
          <Product
            id="12321341"
            title="Washing Machine"
            price={501.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_372x232_2._SY116_CB414480869_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>


        <div className="home__row">
          <Product
            id="4903850"
            title="Headphones"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/31B5rJlF1nL.__AC_SY200_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/QC--Enabled-devices--brownie_1X._SY116_CB660147049_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <img 
            className="home__ban1" 
            src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            alt=""
            />
        </div>

        <div className="home__row">
          <Product
            id="90828332"
            title="Fancy Wifi Router"
            price={14.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/416wNR6LqcL._AC_SY200_.jpg"
          />
          <Product
            id="90827332"
            title="Cleaning items"
            price={109.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/41jzeJqlMhL._AC_SY200_.jpg"
          />
          <Product
            id="90826332"
            title="Cleaning Accessories"
            price={15.98}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg"
          />
          <Product
            id="90829332"
            title="king sized Bed sheet"
            price={19.98}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg"
          />
        </div>
        <div className="home__row">
          <img 
            className="home__ban" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
            alt=""
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
