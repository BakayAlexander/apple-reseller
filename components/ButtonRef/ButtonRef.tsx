import React from 'react';

type ButtonRefProps = {
  link: string;
  title: string;
};

const ButtonRef: React.FC<ButtonRefProps> = ({ link, title }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='relative z-30 box-border inline-flex h-7 cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-3 text-white transition-all duration-300 focus:outline-none'
    >
      {title}
    </a>
  );
};
export default ButtonRef;
