import "./Banner.css";

const Banner = () => {
    return (
            <>
                <div className="p-10 min-h-6" style={{ backgroundImage: "url('cover.jpg')",  backgroundRepeat: "no-repeat" }}>
                <div className="hero-overlay"></div>
                <h1 className="banner-heading text-5xl font-bold mb-5">Learn The Art of Photography On The Go!</h1>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                        src="./banner-img.jpg"
                        className="w-2/3 rounded-lg h-80 shadow-2xl mask mask-diamond" />
                        <div>
                        <p className="mb-5">You can get mentored by qualified instructors for both novices and experts in our Photography Course.</p>

                            <div className="offerings">
                                <h3 className="font-bold">What you can get in our course:</h3>
                                <ul className="list-disc px-6 py-2">
                                    <li>In-depth photography dive</li>
                                    <li>Free photography materials</li>
                                    <li>15+ certified instructors</li>
                                    <li>20+ personalized classes</li>
                                </ul>
                                <a href="./register"><button className="register-btn rounded-2xl mt-5">Register Now!</button></a>
                            </div>
                        </div>
                        </div>
                    </div>
            </>
    );
};

export default Banner;