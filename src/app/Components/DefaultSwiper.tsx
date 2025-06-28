'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  {
    id: 1,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50f4f7ee-37f0-43c4-baef-c4330c0eba15.png',
    alt: 'Portrait of a confident woman with black dress and sunglasses in urban setting',
  },
  {
    id: 2,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f845aac0-adbc-45da-a740-695cdb4bb6b5.png',
    alt: 'Young woman with pink hair and purple sweater posing on a pink background',
  },
  {
    id: 3,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ba3cbccf-0f8d-4c93-8224-85a9480c704e.png',
    alt: 'Elegant woman in light brown dress and jacket posing indoors with confident pose',
  },
  {
    id: 4,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14c01286-cb0a-4096-bb71-b305a672b9c2.png',
    alt: 'Stylish young woman wearing sunglasses in a modern city street',
  },
  {
    id: 5,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18a9e852-3794-4aa4-a726-995ee6fbc4ee.png',
    alt: 'Portrait of fashionable woman with modern haircut and sunglasses',
  },
  {
    id: 6,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8600fe18-f1a7-455b-9b25-b4ebc637de11.png',
    alt: 'Woman in cozy sweater on pink background with stylish glasses',
  },
  {
    id: 7,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c8bf0b7a-9f09-464e-8c59-c13192150714.png',
    alt: 'Model wearing beige outfit posing elegantly indoors',
  },
  {
    id: 8,
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/162213bf-7281-44ed-8728-6c71f4e5d9db.png',
    alt: 'Young woman with curly dark hair, wearing beige dress with jacket draped on shoulder',
  },
];

export default function SwiperGallery() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6 space-y-6 text-white">
      <Swiper
        slidesPerView={3}
        spaceBetween={6}
        className="max-w-6xl w-full py-8"
        watchSlidesProgress={true}
        grabCursor={true}
      >
        {images.map(({ id, src, alt }) => (
          <SwiperSlide key={id} style={{ width: 'auto' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300">
              <img
                src={src}
                alt={alt}
                className="object-cover h-60 md:h-72 xl:h-80 w-auto select-none"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/735b500b-90a6-4331-9a89-2d5a129d50cb.png';
                }}
              />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-lg">
                Slide {id}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
