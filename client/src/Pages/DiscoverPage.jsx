import React from "react";
import Header from "../Components/HeaderPart";
import NavBar from "../Components/NavbarSection";
import ComboMenuCard from "../Components/ComboMenuCard";
import Footer from "../Components/FooterPart";
import OpeningPeriod from "../Components/OpeningPeriod";
import Advertisement from "../Components/AdvertisementCard";
import PrimaryCard from "../Components/PrimaryCard";
import CategoriesCard from "../Components/CategoriesCard";
import MoreThanFood from "../Components/MoreThanFood";
import QuickLink from "../Components/QuickLink";
import Modal from "react-modal";
import reactStringReplace from "react-string-replace"
import ii from "../Public/image/product/1661319530996-699202338.jpg"


import { useState ,useEffect} from "react";
Modal.setAppElement(document.getElementById("root"));

function DiscoverPage() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    const fetchAll=async()=>{
      const allData= await fetch("http://localhost:5000/product/all");
      const allJson= await allData.json()
      console.log(allJson)
     setProducts(()=> allJson.map((json) => {
      return {
        id: json._id,
        image:json.image,
        created_at:json.created_at,
      };
    }))
    }
     fetchAll()
  },[])

 
  return (
    <div>
     
      {
        products.map((prod,index)=>{
          return(<img key={index} src={`/${prod.image}`} alt={`${prod.image}`}></img>)
        })
      
      }
      <img src={ii} alt="dmskl"></img>
      <Header />
      <NavBar />
      <OpeningPeriod />
      <Advertisement title="Lunch Time ⏰" data={primaryData} />
      <PrimaryCard title="Lunch Time ⏰" data={primaryData} />
      <PrimaryCard title="Fastest delivery" data={primaryData} />
      <PrimaryCard title="Shopping on Wolt 💸" data={primaryData} />
      <PrimaryCard title="Popular right now" data={primaryData} />
      <PrimaryCard title="Lunch near you" data={primaryData} />
       
      <ComboMenuCard title="Combo Menus 🍱" data={primaryData} />
      {/* Discounts 😍  => bu hisse ucun comboMenuCard componentinden
           istifade eledim optimal fikrim var o formada edecem heleki bele qalsin, 
           Umumen gerek calisaq maksimum derecede az component yazib cox netice cxaraq */}
      <ComboMenuCard title="Discounts 😍" data={primaryData} />
      <ComboMenuCard title="Combo Menus 🍱" data={primaryData} />
      <PrimaryCard title="Free delivery" data={primaryData} />
      <CategoriesCard title={"Categories"} data={categoriesData} />
      <PrimaryCard title="Top-rated" data={primaryData} />
      <PrimaryCard title="Value meals" data={primaryData} />
      <PrimaryCard title="New restaurants on Wolt" data={primaryData} />
      <MoreThanFood title="#MoreThanFood 🛒" data={categoriesData} />
      <QuickLink title="Quick Links" data={quickLinkData} />
      <Footer />
    </div>
  );
}
/*=========================================
  Asagidaki bu datalari seliqeli sekilde 
  Json'a yigdim birazdan ora fetch atib 
  ordan cekecem melumatlari
=========================================*/
/*=========================================
  Example datas for Proeject
=========================================*/
const primaryData = [
  {
    url: "https://imageproxy.wolt.com/venue/6202744911b300c13900eae8/0677aeb6-8b03-11ec-91a1-9e597431527f_img_5314.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/61a0d8c035e391954dbff165/cd99ee22-511b-11ec-ba36-16e708a9c552_cd4ab08c_edc6_11ea_a00b_3e37981ab180_110615391_2702547209982043_7096807757951689820_o.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/6303802d2100db634aa323ac/8e277bd8-221c-11ed-b57d-eedea8cab316_group.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5dcc1ce1f870d7d8fa35a444/21664590204babcf7e32aa82ef741faa?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5eb00ab1a4197a0216ab45cf/e3f2ca52-c1f8-11eb-a56b-c2b559981751_group2.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/6307711e56fe5f45f5d3a641/bd8255ee-2486-11ed-904a-72861e282e93_texas_burger.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5d400a43b7d976e5caaaafc2/02defcba6e219e666eccf23d94a5d2bb?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5fe5a38e8d50551ec53c21a2/dde96548-5255-11eb-af4f-b25435160aac__48.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/6202744911b300c13900eae8/0677aeb6-8b03-11ec-91a1-9e597431527f_img_5314.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/61a0d8c035e391954dbff165/cd99ee22-511b-11ec-ba36-16e708a9c552_cd4ab08c_edc6_11ea_a00b_3e37981ab180_110615391_2702547209982043_7096807757951689820_o.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/6303802d2100db634aa323ac/8e277bd8-221c-11ed-b57d-eedea8cab316_group.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5dcc1ce1f870d7d8fa35a444/21664590204babcf7e32aa82ef741faa?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5eb00ab1a4197a0216ab45cf/e3f2ca52-c1f8-11eb-a56b-c2b559981751_group2.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/6307711e56fe5f45f5d3a641/bd8255ee-2486-11ed-904a-72861e282e93_texas_burger.jpg?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5d400a43b7d976e5caaaafc2/02defcba6e219e666eccf23d94a5d2bb?w=600",
  },
  {
    url: "https://imageproxy.wolt.com/venue/5fe5a38e8d50551ec53c21a2/dde96548-5255-11eb-af4f-b25435160aac__48.jpg?w=600",
  },
];

const quickLinkData = [
  {
    link: "Send a gift",
  },
  {
    link: "Request Question",
  },
  {
    link: "About Us",
  },
  {
    link: "Testimonials",
  },
];

const categoriesData = [
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "American",
    categoriesCountPlaces: "3",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Salad",
    categoriesCountPlaces: "8",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Meat",
    categoriesCountPlaces: "1",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Chicken",
    categoriesCountPlaces: "7",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Dessert",
    categoriesCountPlaces: "3",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Wraps",
    categoriesCountPlaces: "2",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "American",
    categoriesCountPlaces: "3",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Salad",
    categoriesCountPlaces: "8",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Meat",
    categoriesCountPlaces: "1",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Chicken",
    categoriesCountPlaces: "7",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Dessert",
    categoriesCountPlaces: "3",
  },
  {
    categoriesImageUrl:
      "https://imageproxy.wolt.com/wolt-frontpage-images/categories/0a824832-c5b0-11ea-8a94-b2000c51ab5c_4b9cac02_a445_4de3_acf2_94398063345e.jpg-md?w=300",
    categoriesTitle: "Wraps",
    categoriesCountPlaces: "2",
  },
];
export default DiscoverPage;
