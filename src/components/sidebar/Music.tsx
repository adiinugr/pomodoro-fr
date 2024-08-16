import React from 'react';
import Image from 'next/image';

type Props = {};

const images = [
  { src: '/images/music/music-1.jpg', alt: 'Lofi', desc: 'Easygoing beats for both focus and downtime.' },
  { src: '/images/music/music-2.jpg', alt: 'Rainy Day Lofi', desc: 'Drizzly beats for cozy reflections.' },
  { src: '/images/music/music-3.jpg', alt: 'Paris Café', desc: 'Charming sounds from streets of Paris.' },
  { src: '/images/music/music-4.jpg', alt: 'Flocus Picks', desc: 'A curated mix for both work and relaxation.' },
  { src: '/images/music/music-5.jpg', alt: 'Relaxing Piano', desc: 'Gentle piano pieces for a peaceful backdrop.' },
  { src: '/images/music/music-6.jpg', alt: 'Video Game Music', desc: 'Chill, nostalgic tracks from your favorite games.' },
  { src: '/images/music/music-7.jpg', alt: 'Jazzhop', desc: 'Smooth grooves no matter what your mood.' },
  { src: '/images/music/music-8.jpg', alt: 'Holiday Lofi', desc: 'Festive beats to get in the holiday spirit.' },
];

const Music = (props: Props) => {
  return (
    <div className=''>
        <div className='mb-3 flex items-center gap-4'>
            <p className='text-[32px] font-semibold text-white'>
                Music
            </p>
        </div>
      <p className='text-[16px] mb-5 text-[#a0a0a0]'>
        Make sure you&apos;re logged into your streaming service&apos;s web player in the same browser as Flocus. After logging in, hard refresh your Flocus tab (Cmd/Ctrl + Shift + R).
      </p>
      <div className='mb-3 flex items-center gap-4'>
            <p className='text-[24px] font-semibold text-white'>
                Custom Playlists
            </p>
            <Image
              src={"/images/plus.svg"}
              className='rounded-lg mt-1'
              width={60}
              height={100}
              alt=""
            />
        </div>
      <p className='text-[16px] mb-5 text-white'>
        Add your favorite playlist from Spotify, YouTube, Apple Music, SoundCloud, or Amazon Music.
      </p>
      <div className='flex items-center gap-4 w-[550px] mb-10'>
        <div className="relative ml-1">
            <input
            type="text"
            placeholder="Paste playlist or video URL here"
            className="pl-2 p-2 py-3 rounded-md w-full bg-transparent border-2 border-[#606060] text-white font-semibold px-[210px]"
            />
        </div>
        <button className='p-2 py-3 border-2 border-[#4b20a6] px-6 bg-[#4b20a6] text-[#a6a6a6] rounded-xl text-[18px] font-semibold'>
            Save
        </button>
        </div>
        <div className='mb-3 flex items-center gap-4'>
            <p className='text-[24px] font-semibold text-white'>
                Flocus Playlists
            </p>
        </div>
        <p className='text-[16px] mb-5 text-white'>
        Play any of our curated Spotify playlists for free.
      </p>
      <div className='grid grid-cols-3 gap-3 w-[550px] mb-10'>
        {images.map((image, index) => (
          <div key={index} className=''>
            <Image
              src={image.src}
              className='rounded-2xl mb-2'
              width={184}
              height={184}
              alt={image.alt}
            />
            <p className='text-center text-[16px] font-semibold text-white'>
              {image.alt}
            </p>
            <p className='text-center text-[12px] font-semibold text-white'>
              {image.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
