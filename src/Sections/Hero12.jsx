
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero12() {
    const testimonials = [
        {
            name: "Sara Willaims",
            role: "Web Developer",
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt iure aperiam minus recusandae aliquam quia, deleniti assumenda, omnis amet, quos cum. Nam illum sit minima.",
            img: "https://www.radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2023/06/test_2.png",
        },
        {
            name: "Robert Adison",
            role: "Designer",
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt iure aperiam minus recusandae aliquam quia, deleniti assumenda, omnis amet, quos cum. Nam illum sit minima.",
            img: "https://www.radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2023/06/test_3.png",
        },
        {
            name: "Jenefar Smith",
            role: "Entrepreneur",
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt iure aperiam minus recusandae aliquam quia, deleniti assumenda, omnis amet, quos cum. Nam illum sit minima.",
            img: "https://www.radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2023/06/test_1.png",
        },
        {
            name: "Sarah Smith",
            role: "Marketer",
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt iure aperiam minus recusandae aliquam quia, deleniti assumenda, omnis amet, quos cum. Nam illum sit minima.",
            img: "https://www.radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2023/06/test_3.png",
        },
        {
            name: "David Brown",
            role: "CEO",
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt iure aperiam minus recusandae aliquam quia, deleniti assumenda, omnis amet, quos cum. Nam illum sit minima.",
            img: "https://www.radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2023/06/test_1.png",
        },
    ];

    return (
        <div className="testimonial-wrapper">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView="auto"
                spaceBetween={15}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: "auto",
                        spaceBetween: 0,
                    },
                    500: {
                        slidesPerView:1,
                        spaceBetween: 10,
                    },
                    
                    640: {
                        slidesPerView: "auto",
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    
                }}
                
   
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        
                        <div className="testimonial-card">
                            <img src={item.img} alt="Profile" />

                            <div className="testimonial-content">
                                <h3>{item.name}</h3>
                                <p className="text">{item.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero12;
