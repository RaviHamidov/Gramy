// Import Jsx Components
import React, { Component } from "react";
import Bar from "./components/bar";
import Nav from "./components/navigation";
import Ads from "./components/advertisement";
import Card from "./components/carousel";
import Footer from "./components/footer";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataForBackPacking = [
    { url: "https://www.wanderon.in/triplist/bir-billing/wanderon-bir-1.jpg" },
    {
        url:
            "https://www.wanderon.in/triplist/manali-lahaul/wanderon-manali-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/kasol-kheerganga/wanderon-kasol-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/tirthan-valley/wanderon-tirthan-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/chopta-tungnath/wanderon-chopta-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/mcleodganj-bir-billing/wanderon-bir-1.jpg",
    },
];

const dataTop = [
    {
        url:
            "https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg",
    },
    {
        url:
            "https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg",
    },
];

export default class App extends Component {
    render() {
        return (
            <>
                <Nav />
                <Bar />
                <Ads />
                <Card title="Trending Trips" data={dataTop} />
                <Card title="Weekend Trips" data={dataForBackPacking} />
                <Card title="Himalayan Escapades" data={dataTop} />
                <Card title="Adventure Courses" data={dataForBackPacking} />
                <Footer />
            </>
        );
    }
}
