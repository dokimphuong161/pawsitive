// slick slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// images
import { images } from '~/constants/images';

// icons
import { ArrowIcon } from '~/constants/svgIcons';

// hooks
import useGetData from '~/hooks/useGetData';

// components
import BannerRating from './BannerRating';
import DescSliderItem from './DescSliderItem';

// animations
import { motion } from 'framer-motion';
import { fadeToLeftVariants, hideAndShowVariants } from '~/animations/animations';

// Setting background
const backgroundImg = {
    backgroundImage: `url("${images.IMG_BANNER_BG}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const Banner = () => {
    //Setting for Slick Slider
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Get banner slider data
    const { data } = useGetData('bannerSlider');

    //Render Desc Item
    const renderDesSliderItem = data.map((item) => <DescSliderItem item={item} key={item.id} />);
    return (
        <section className="banner md:pt-32 pt-28" style={backgroundImg} id="home">
            <motion.div
                variants={fadeToLeftVariants}
                transition={{ delay: 0.2, duration: 0.4, type: 'tween' }}
                className="container mx-auto flex items-center justify-between"
            >
                <div className="banner-content w-full lg:w-[45%] lg:pr-5">
                    <h3 className="font-black text-5xl xl:text-7xl">
                        <span className="text-primary-900">Taking care</span> <br />
                        of your pets <br />
                    </h3>
                    <div className="banner-desc w-auto">
                        <Slider {...settings}>{renderDesSliderItem}</Slider>
                    </div>
                    <div className="banner-button mt-16 flex justify-start w-4/5 sm:w-3/5 md:mx-0 md:w-2/4 lg:w-4/5 relative">
                        <a href="#">
                            <img
                                alt="No image"
                                src={images.IMG_BOOK_BTN}
                                className="hover:rotate-12 transition duration-500 w-48 xl:w-auto"
                            />
                        </a>
                        <ArrowIcon className="w-20 absolute -top-8 animate-wiggle hidden xs:block right-0" />
                    </div>
                </div>
            </motion.div>

            <div className="banner-img relavive hidden lg:block">
                <motion.img
                    variants={hideAndShowVariants}
                    transition={{ delay: 0.1, duration: 0.3, type: 'tween' }}
                    alt="No image"
                    src={images.IMG_BANNER}
                    className=" absolute top-0 right-0 md:w-[55%] "
                ></motion.img>
                <BannerRating />
            </div>
        </section>
    );
};

Banner.propTypes = {};

export default Banner;
