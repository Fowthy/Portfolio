'use client'

import ProfilePic from '@/profile.jpg'

import Sidebar from '@/app/sidebar'
import Image from 'next/image'
import {useParallax} from "react-scroll-parallax";
import {useEffect, useRef, useState} from 'react';
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";



export default function Home() {
    const target = useRef(null);

    useEffect(() => {

        const root = document.documentElement;

        document.addEventListener('mousemove', evt => {
            let x = evt.clientX / innerWidth;
            let y = evt.clientY / innerHeight;

            root
                .style
                .setProperty('--mouse-x', x);
            root
                .style
                .setProperty('--mouse-y', y);
        });
    });

    const train = useParallax({
        speed: -10,
        rotate: [
            -20, 20, "easeInQuad"
        ],
        scale: [
            1.5, 1.1, "easeInQuad"
        ],
        targetElement: target.current
    })

    const cloud = useParallax({
        speed: 30,
        scale: [
            1.5, 1, "easeInQuad"
        ],
        targetElement: target.current
    })

    return (
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <main
            id='home'
            className="flex min-h-screen flex-col items-center justify-between">
            <div className='hidden w-11/12 h-screen sm:flex absolute'><Sidebar/></div>
            <div className='flex w-full h-full'>
                <div className='grid grid-cols-1 gap-4 w-full p-4 mt-11 sm:mt-48'>
                    <div id='portfoliogrid' className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full' ref={target}>
                        <div className="flex flex-col items-center">
                            <p>Text about me bla bla bla</p>
                        </div>
                        <div className='flex flex-col items-center'>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <Image
                                alt='da'
                                src={ProfilePic}
                                className='rounded-full w-80 h-80'
                                ref={train.ref}/>
                                </MouseParallaxChild>
                        </div>
                    </div>
                    <div id='projects' className='grid grid-cols-2 gap-2 w-full'>
                        <div className='flex flex-col items-center mt-48'>
                            <Image
                                alt='da'
                                src={ProfilePic}
                                className='rounded-full w-80 h-80'
                                ref={cloud.ref}/>

                        </div>
                        <div className='flex flex-col items-center mt-48'>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                        </div>
                    </div>
                    <div id='CV' className='grid grid-cols-2 gap-2 w-full'>
                        <div className='flex flex-col items-center mt-80'>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                            <p>Proekti po koito sum rabotil tn tn tn</p>
                        </div>
                        <div className='flex flex-col'></div>
                    </div>
                </div>
            </div>
        </main>
        </MouseParallaxContainer>
    )
}
