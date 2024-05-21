import style from '../styles/category.module.css';
import { useState, useEffect } from 'react';
import IndividualBlock from './individualBlock';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './nextButton';
import PrevArrow from './prevButton';

function convertString(str) {
    let newStr = str.toLowerCase();
    return newStr;
}

function Category(props){
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    return (

        <>
        <style jsx>{`
        .slick-next:before, .slick-prev:before {
          display: none !important;
        }
      `}</style>
        <h1 style={{marginLeft: "18px"}}>{props.category}</h1>
        <Slider {...settings}>
            {props.data.data.map((item, index) => {
                if(convertString(item.type) === convertString(props.category)){
                    return <IndividualBlock key = {index} data = {item} userdata = {props.userdata}/>
                }
            })}
        </Slider>
        </>
    )
}

export default Category;