import React from 'react';
import NotFount from '../img/404.png';
const bgGround = {
    display:'inline-block',
    height: '1000px',
    width:'100%',
    backgroundImage: 'url(' +NotFount + ')'//图片的路径
};
const notFound = () =>(
    <img src={NotFount}/>
)
export default notFound;