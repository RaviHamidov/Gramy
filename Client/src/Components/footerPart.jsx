import React from "react";
function Footer() {
    return (
        <>
            <div className="flex justify-between pt-[6rem] px-[3rem] pb-[3rem] bg-[#141414]">
                <div className="flex flex-col space-y-8">
                    <h1 className="text-3xl font-semibold text-white">Gramy</h1>
                    <div className="flex space-x-4">
                        <img
                            src="https://cdn.wolt.com/app-store-badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                            className="w-[120px] h-[40px]"
                            alt="AppStore"
                        />
                        <img
                            src="https://cdn.wolt.com/app-store-badges/google-play-badge_en.png"
                            className="w-[120px] h-[40px]"
                            alt="GooglePlay"
                        />
                    </div>
                </div>

                <div className="flex justify-between w-2/3">
                    <div>
                        <h3 className="py-4 text-gray-400">Şirkət</h3>

                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Kuryerlər üçün
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Restoranlar üçün
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Mağazalar üçün
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Şirkətlər üçün
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Wolt drive
                        </a>
                    </div>
                    <div>
                        <h3 className="py-4 text-gray-400">Faydalı linklər</h3>

                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Haqqımızda
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            İşlər
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Məsuliyyət
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Təhlükəsizlik
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            İnvestorlar
                        </a>
                    </div>
                    <div>
                        <h3 className="py-4 text-gray-400">Bizi izləyin</h3>

                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Dəstək
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Media
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Əlaqə
                        </a>
                    </div>

                    <div>
                        <h3 className="py-4 text-gray-400">
                            Gəlin birlikdə edək
                        </h3>

                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Wolt blog
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Mühəndislik bloqu
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            İnstagram
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="block mb-2 text-white hover:opacity-80 hover:text-gray-400 hover:scale-x-105">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;
