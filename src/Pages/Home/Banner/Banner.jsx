import "./Banner.css";

const Banner = () => {
    return (
        <>
           

<div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
 
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="./slider_img/slider-img1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="./slider_img/slider-img2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="./slider_img/slider-img3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="./slider_img/slider-img4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>  

    </div>
    
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="carousel-pointer bg-slate-400 w-1 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="carousel-pointer bg-slate-400 w-1 h-3 rounded-full" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="carousel-pointer bg-slate-400 w-1 h-3 rounded-full" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="carousel-pointer bg-slate-400 w-1 h-3 rounded-full" aria-current="true" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    </div>

    <button type="button" className="prev-btn absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="next-btn absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

        </>
    );
};

export default Banner;