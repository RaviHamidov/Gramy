import React from "react";
import Footer from "../Components/FooterPart";
import Header from "../Components/HeaderPart";
import NavBar from "../Components/NavbarSection";
import PrimaryCard from "../Components/PrimaryCard";
function RestaurantsPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <span>reataurants</span>
      <PrimaryCard title="Lunch Time ⏰" data={primaryData} />
      <PrimaryCard title="Fastest delivery" data={primaryData} />
      <PrimaryCard title="Shopping on Wolt 💸" data={primaryData} />
      <PrimaryCard title="Popular right now" data={primaryData} />
      <PrimaryCard title="Lunch near you" data={primaryData} />
      <Footer />
    </div>
  );
}
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


export default RestaurantsPage;
