import {CarouselWrapper ,next} from "react-pretty-carousel";
import Ads from "../Ads/Ads";
import {useState}from "react";

function Carousel()
{
    const [photos, setPhotos]=useState([
        "https://mcdonalds.az/images/6b77cab55334552b38610f7e0d255944.jpg",
        "https://mcdonalds.az/images/392d23f9e55ac4056d2a56184b1d5213.jpg",
        "https://mcdonalds.az/images/f2064015a43b46299d9e5f19aba1a5d7.png",
        "https://mcdonalds.az/images/e5bbfd8fdc4c5c1f062b9abc25ed8088.png",
        "https://mcdonalds.az/images/03a4007b7f00206210556a251c94feee.png",
        "https://mcdonalds.az/images/4275451386c7c9991a0c5f11d80acf89.png",
        "https://mcdonalds.az/images/34df98bb11fa66c4091be801954d3917.jpg",
        "https://mcdonalds.az/images/4275451386c7c9991a0c5f11d80acf89.png",
        "https://mcdonalds.az/images/954f79cf35a4bdbfa2c11a47eb8e73bb.png",
        "https://mcdonalds.az/images/40b3007ef474215e514f44edc6a6eb45.png",
      ])
      setInterval(()=>
      {
        next()
      },5000)

    return(  <CarouselWrapper items={3} showControls={false} mode="gallery">
      {photos.map((photo,index)=>
      {
        return <Ads key={index} image={photo}/>
      })}
    </CarouselWrapper>
    )
}
export default Carousel;