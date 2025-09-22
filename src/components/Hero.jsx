// Copyright 2025 Haridev
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import profilePic from '../assets/profilepic.png';
import avatar_img from '../assets/avatar.jpg';
import { ButtonPrimary , ButtonOutline } from './Button';

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div className="">
                <div className="flex items-center gap-3">
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img
                            src={avatar_img}
                            width={40}
                            height={40}
                            alt='icon profile'
                            className='image-cover'
                        >
                        </img>
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute w-2 h-2 rounded-full bg-emerald-400 inset-0 animate-ping'></span>
                        </span>
                        Avalable for work
                    </div>
                </div>
                <h2 className='headline_1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                    Passionate about creating simple, effective solutions for people and businesses.
                </h2>
                <div className="flex items-center gap-3">
                     <ButtonPrimary label="Download CV" icon="download"
                     />  
                     <ButtonOutline label="Scroll down" href='#about' icon='arrow_downward' />
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-20% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img
                        src={profilePic}
                        alt='profile pic'
                        width={656}
                        className='w-full'
                    >
                    </img>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero
