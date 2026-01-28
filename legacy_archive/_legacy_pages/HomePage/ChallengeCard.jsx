import React from 'react';

function ChallengeCard({ title, image, fullWidth = false }) {
  const cardClasses = `flex overflow-hidden flex-col items-center lg:text-xl md:text-[10px] sm:text-[6px] font-bold text-center text-white rounded-md bg-white-400 bg-opacity-50 ${
    fullWidth ? 'w-full' : 'w-full'
  }`;

  const containerClasses = fullWidth
    ? 'flex relative flex-col px-12 pt-96 pb-7 min-h-[300px] lg:text-[27px] md:text-[10px] sm:text-[6px]  text-center max-md:px-5 max-md:pt-24 max-md:max-w-full'
    : 'flex relative flex-col px-8 pt-40 pb-1.5 w-full text-center aspect-square max-md:px-5 max-md:pt-24';

  return (
    <div className={cardClasses}>
      <div className={containerClasses}>
        <img loading="lazy" src={image} alt={title} className="object-cover absolute inset-0 size-full" />
        <div className="relative z-10"
        style={{
          background: 'rgba(245, 245, 250, 1)',
          boxShadow: 'inset 0 4px 6px rgba(170, 170, 204, 0.5), inset 0 -4px 6px rgba(255, 255, 255, 1), inset 4px 0 6px rgba(170, 170, 204, 0.5), inset -4px 0 6px rgba(255, 255, 255, 0.5)',
        }}
        >{title}</div>
      </div>
    </div>
  );
}

export default ChallengeCard;
