import React from 'react';

type Props = {};

const Profile = (props: Props) => {

  return (
    <div>
      <p className='text-[32px] font-semibold text-white mb-5'>
        Profile & Account
      </p>
    <p className='text-[18px] font-semibold text-white mb-3'>
        Not registered yet? Create an account.
    </p>
    <p className='text-[18px] font-semibold text-white mb-6 w-[448px]'>
        Log in or register to update your name, profile, save your dashboard settings, and more.
    </p>
    <p className='text-[18px] font-semibold text-white mb-3 w-[448px]'>
        Email
    </p>
    <div className='ml-1 mb-6'>
    <input
        type="text"
        placeholder="Enter your email"
        className="pl-2 p-2 py-2 rounded-md w-[448px] bg-transparent border-2 border-[#606060] text-white font-semibold"
    />
    </div>
    <p className='text-[18px] font-semibold text-white mb-3 w-[448px]'>
        Password
    </p>
    <div className='ml-1 mb-2'>
    <input
        type="text"
        placeholder="Enter your Password"
        className="pl-2 p-2 py-2 rounded-md w-[448px] bg-transparent border-2 border-[#606060] text-white font-semibold"
    />
    </div>
    <p className='text-[#adb5bd] mb-10 text-[14px] font-normal'>
        Forgot Password
    </p>
    <button className='p-2 py-3 px-6 bg-[#7432ff] hover:bg-[#5517d9] text-white rounded-2xl text-[18px] font-semibold mb-6'>
            Log in
        </button>
    </div>
  );
};

export default Profile;
