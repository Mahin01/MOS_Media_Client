import "./Banner.css";

const Banner = () => {
    return (
        <>
           <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="./slider_img/slider-img1.jpg" className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle w-2">❮</a> 
                    <a href="#slide2" className="btn btn-circle w-2">❯</a>  

                </div> 
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="./slider_img/slider-img4.jpg" className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="./slider_img/slider-img3.jpg" className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div> 
        </>
    );
};

export default Banner;