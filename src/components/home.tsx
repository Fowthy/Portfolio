'use client'

import {useParallax} from "react-scroll-parallax";
import {useEffect, useRef, useState} from 'react';
// import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import ProfilePic from '@/images/profile.jpg'
import Image from 'next/image'



export default function HomePage(props : any) {
    return (
        <div
            id='portfoliogrid'
            className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'
            ref={props.ref}>
            <div className="flex flex-col items-center">
                <p>Text about me bla bla bla</p>
            </div>
            <div className='flex flex-col items-center'>
                {/* <MouseParallaxChild factorX={0.1} factorY={0.1}>
                    <Image
                        alt='da'
                        src={ProfilePic}
                        className='rounded-full w-80 h-80'
                        ref={props.ref}/>
                </MouseParallaxChild> */}
            </div>
        </div>

    )
}
