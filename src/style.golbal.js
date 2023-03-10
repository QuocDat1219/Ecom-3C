import { useMediaQuery } from "@chakra-ui/react";


// export const [isLargerThan] = useMediaQuery("(min-width: 768px)");
// export const [isSmallerThan] = useMediaQuery("(max-width: 767px)");


// /**
//  * Not use 
//  */
// export const [isMobile] = useMediaQuery("(max-width: 480px)");
// export const [isTablet] = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
// export const [isDesktop] = useMediaQuery("(min-width: 1025px)");


/**
 * Color 
 */
export const bgColorPr = "#eeeeee"
export const textColor = "#070707"
export const priceColor = "#ff0000"
export const fontWgolbal = "semibold"
export const colorHr = "#eee"
export const titleColor = "#333333"

export const bderRCard = 5



/** Font size Card */
export const fsCard = "14px"
export const fsCardTitle = "16px"
export const borderColor = "1px solid #eeeeee"

export const fCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

export const flexCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}


/** Conver long text */
export const longText = {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxW: "800px"
}


export const fsMobile = "12px"


/** Response columnsCard */
export const columnsCard = [
    "repeat(1, 1fr)",
    "repeat(2, 1fr)",
    "repeat(2, 1fr)",
    "repeat(4, 1fr)",
    "repeat(5, 1fr)"
]


/**Response Image */
export const rspImageH = ["200px", "200px", "200px", "150px"]
export const rspImageW = ["200px", "200px", "200px", "150px"]

/**Response Image Slider */
export const rspImageSlH = ["200px", "200px", "200px", "250px"]
export const rspImageSlW = ["200px", "200px", "200px", "250px"]

export const textLongMaxWidthSl = [100, 100, 100, 100, 200]


export const textLongMaxWidth = [200]


export const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 3000,
    speed: 500,
    initialSlide: 2,
    responsive: [

        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                dots: false,
            },
        },
        
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}




/**
 * With and Height Images
 */

// export const hImageCard = { [100, 100, 100, 100]}
// export const wImageCard = { [100, 100, 100, 100]}