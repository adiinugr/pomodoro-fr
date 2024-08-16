import React from 'react';
import Image from 'next/image';

type Props = {};

const Suport = (props: Props) => {

  return (
    <div>
      <p className='text-[32px] font-semibold text-white mb-5'>
        Support & Feedback
      </p>
    <p className='text-[16px] font-medium text-white mb-3'>
        Thanks so much for checking out Flocus!
    </p>
    <ul className='ml-6 list-decimal text-white w-[424px] mb-5'>
        <li className='mb-3'>For feedback, suggestions, and theme or feature requests, fill out the quick feedback form below.</li>
        <li className='mb-3'>For bug reports or help requests, contact us below with issue details, system and browser info, and any screenshots, and we&apos;ll loop back as soon as possible.</li>
        <li className='mb-3'>Enjoying Flocus and got a minute? Leave a quick review to share the love!</li>
    </ul>
    <div className='w-[230px]'>
    <div className='p-2 py-2 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-2xl text-[18px] font-semibold mb-4'>
        💬  Leave Feedback
    </div>
    <div className='p-2 py-2 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-2xl text-[18px] font-semibold mb-4'>
        💌  Contact Support
    </div>
    <div className='p-2 py-2 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-2xl text-[18px] font-semibold mb-2'>
        ⭐️  Leave a Review
    </div>
    </div>
    <p className='text-[#adb5bd] mb-6 text-[14px] font-normal'>
        v1.2.6
    </p>
    <hr className='bg-[#606060] mb-5' />
    </div>
  );
};

export default Suport;
