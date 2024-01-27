import * as React from "react"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { StaticImage } from "gatsby-plugin-image"


const ImageGallery = () => {

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]

  const images = [
    'image-0.jpg', 'image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg',
    'image-5.jpg', 'image-6.jpg', 'image-8.jpg', 'image-9.jpg',
    'image-10.jpg', 'image-11.jpg', 'image-12.jpg', 'image-13.jpg', 'image-14.jpg',
    'image-15.jpg', 'image-16.jpg', 'image-17.jpg'
  ];

  return (
    <div className="w-full overflow-hidden h-[400px]">
      <Slide slidesToScroll={1} slidesToShow={3} autoplay={true} responsive={responsiveSettings}>
        {
          images.map((image, i) => (
            <div className="rounded-xl mx-2 md:mx-5 overflow-hidden">
              <img className="w-full h-full" src={`/gallery/${image}`} alt="image" key={i}/>
            </div>
          ))
        }

      </Slide>
    </div>
  );
}
export default ImageGallery;