import "./App.css";
import React from "react";
import Ads from "./components/advertisement/advertisement";
import Nav from "./components/nav/navigation";
import Bar from "./components/bar/bar";
import Carousel from "./components/carousel/carousel";
import Footer from "./components/footer/footer";
import Section from "./components/sections/section";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        title: "Super discounts in stores!",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        title: "Super discounts in stores!",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        title: "Super discounts in stores!",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        title: "Super discounts in stores!",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        title: "Super discounts in stores!",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        title: "Super discounts in stores!",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
];

const dataBanner = [
    {
        title: "Grocery Specials",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        title: "Grocery Specials",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        title: "Grocery Specials",
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
];

const dataForBackPacking = [
    { url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png" },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
];

const dataTop = [
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
    {
        url: "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
    },
];

function App() {
    return (
        <>
            <Nav />
            <Bar />
            <Ads />
            <Carousel title="Super discounts in stores!" data={dataTop} />
            <Carousel title="Super Discounts! 🍔😍" data={dataForBackPacking} />
            <Carousel title="Grocery Specials 🛒💙" data={dataTop} />
            <Carousel title="Fastest delivery" data={dataForBackPacking} />
            <Carousel title="Popular right now" data={dataForBackPacking} />
            <Section
                header={"Ən yeni məhsullar"}
                name={"Baxım məhsulları"}
                description={"Almaniyadan gətirilmiş təbii baxım məhsulları"}
                price={12}
            />
            <Footer />
            <p className="text-center">Created by Wolf Team :</p>
        </>
    );
}

export default App;
