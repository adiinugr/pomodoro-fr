import React from 'react';
import Image from 'next/image';

type Props = {};

const images = [
  { src: '/images/sidebar/image-1.jpg', alt: 'Grainy Gradient' },
  { src: '/images/sidebar/image-2.jpg', alt: 'Aura Gradient' },
  { src: '/images/sidebar/image-3.jpg', alt: 'Aura Heart Gradient' },
  { src: '/images/sidebar/image-4.jpg', alt: 'Light Purple Heart' },
  { src: '/images/sidebar/image-5.jpg', alt: 'Dark Purple Heart' },
  { src: '/images/sidebar/image-6.jpg', alt: 'Light Pink Heart' },
  { src: '/images/sidebar/image-7.jpg', alt: 'Minimalist Black' },
  { src: '/images/sidebar/image-8.jpg', alt: 'Minimalist White' },
  { src: '/images/sidebar/image-9.jpg', alt: 'Flare' },
  { src: '/images/sidebar/image-10.jpg', alt: 'Heat Map' },
  { src: '/images/sidebar/image-11.jpg', alt: 'Lava Lamp' },
  { src: '/images/sidebar/image-12.jpg', alt: 'Flocus Violet' },
  { src: '/images/sidebar/image-13.jpg', alt: 'Pastel Lofi' },
  { src: '/images/sidebar/image-14.jpg', alt: 'Sakura' },
];
const images2 = [
  { src: '/images/sidebar-2/image-1.jpg', alt: 'Lofi Clouds' },
  { src: '/images/sidebar-2/image-2.jpg', alt: 'Austrian Alps' },
  { src: '/images/sidebar-2/image-3.jpg', alt: 'Lofi Cafe' },
  { src: '/images/sidebar-2/image-4.jpg', alt: 'Toto Forest' },
  { src: '/images/sidebar-2/image-5.jpg', alt: 'Morning Sakura' },
  { src: '/images/sidebar-2/image-6.jpg', alt: 'Superbloom' },
  { src: '/images/sidebar-2/image-7.jpg', alt: 'Minimalist Desert' },
  { src: '/images/sidebar-2/image-8.jpg', alt: 'Fuji Convenience' },
  { src: '/images/sidebar-2/image-9.jpg', alt: 'Dune Night' },
  { src: '/images/sidebar-2/image-10.jpg', alt: 'Butterfly Conservatory' },
  { src: '/images/sidebar-2/image-11.jpg', alt: 'Tropical River' },
  { src: '/images/sidebar-2/image-12.jpg', alt: 'Cozy Kitchen' },
  { src: '/images/sidebar-2/image-13.jpg', alt: 'Levender Field' },
  { src: '/images/sidebar-2/image-14.jpg', alt: 'Western Town' },
  { src: '/images/sidebar-2/image-15.jpg', alt: 'Capri Summer' },
  { src: '/images/sidebar-2/image-16.jpg', alt: 'Golden Gate Fog' },
  { src: '/images/sidebar-2/image-17.jpg', alt: 'Tokyo Commute' },
  { src: '/images/sidebar-2/image-18.jpg', alt: 'Dune Sunrise' },
  { src: '/images/sidebar-2/image-19.jpg', alt: 'Eras' },
  { src: '/images/sidebar-2/image-20.jpg', alt: 'Outer Space' },
  { src: '/images/sidebar-2/image-21.jpg', alt: 'Arcade' },
  { src: '/images/sidebar-2/image-22.jpg', alt: 'Safari Sunset' },
  { src: '/images/sidebar-2/image-23.jpg', alt: 'Sakura Street' },
  { src: '/images/sidebar-2/image-24.jpg', alt: 'Beach Sunset' },
  { src: '/images/sidebar-2/image-25.jpg', alt: 'Cozy Cabin' },
  { src: '/images/sidebar-2/image-26.jpg', alt: 'Sakura Bedroom' },
  { src: '/images/sidebar-2/image-27.jpg', alt: 'Seoul Night Cafe' },
  { src: '/images/sidebar-2/image-28.jpg', alt: 'Dark Academy' },
  { src: '/images/sidebar-2/image-29.jpg', alt: 'Wisdom Forest' },
  { src: '/images/sidebar-2/image-30.jpg', alt: 'Rainy NYC Evening' },
  { src: '/images/sidebar-2/image-31.jpg', alt: 'Lofi Bedroom' },
  { src: '/images/sidebar-2/image-32.jpg', alt: 'Aquarium Tunnel' },
  { src: '/images/sidebar-2/image-33.jpg', alt: 'First Class' },
  { src: '/images/sidebar-2/image-34.jpg', alt: 'Sunshine Plaza' },
  { src: '/images/sidebar-2/image-35.jpg', alt: 'Coastal Breeze' },
  { src: '/images/sidebar-2/image-36.jpg', alt: 'Morning Library' },
  { src: '/images/sidebar-2/image-37.jpg', alt: 'Brooklyn Bridge' },
  { src: '/images/sidebar-2/image-38.jpg', alt: 'Lake Como Path' },
  { src: '/images/sidebar-2/image-39.jpg', alt: 'Cafe Jeneseis' },
  { src: '/images/sidebar-2/image-40.jpg', alt: 'Lush Bedroom' },
  { src: '/images/sidebar-2/image-41.jpg', alt: 'Drivers Seat' },
  { src: '/images/sidebar-2/image-42.jpg', alt: 'Holiday Street' },
  { src: '/images/sidebar-2/image-43.jpg', alt: 'Winter Cabin' },
  { src: '/images/sidebar-2/image-44.jpg', alt: 'Pumpkin Patch' },
  { src: '/images/sidebar-2/image-45.jpg', alt: 'Flocus Hollow' },
  { src: '/images/sidebar-2/image-46.jpg', alt: 'Fall Central Park' },
];

const Hometheme = (props: Props) => {
  return (
    <div className=''>
      <p className='text-[32px] font-semibold text-white mb-3'>
        Ambient Theme
      </p>
      <p className='text-[16px] mb-5 text-[#a0a0a0]'>
        Pick your theme to appear in Ambient Mode. To see a live preview, ensure your dashboard toggle is set to Ambient, then come back to this Settings tab.
      </p>
      <p className='text-[24px] font-semibold mb-5 text-white'>
        Gradients & Colors
      </p>
      <div className='grid grid-cols-3 gap-3 w-[550px] mb-10'>
        {images2.map((image, index) => (
          <div key={index} className=''>
            <Image
              src={image.src}
              className='rounded-lg mb-2'
              width={175}
              height={100}
              alt={image.alt}
            />
            <p className='text-center text-[16px] font-semibold text-white'>
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hometheme;
