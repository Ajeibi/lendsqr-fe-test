import Image from 'next/image';
import React from 'react';

interface CardProps {
    image: string;
    title: string;
    subtitle: string;
    bgColor?: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, bgColor = "transparent" }) => {
    const backgroundColorWithOpacity = bgColor === '#DF18FF'
        ? 'rgba(223, 24, 255, 0.2)'
        : bgColor === '#5718FF'
            ? 'rgba(87, 24, 255, 0.2)'
            : bgColor === '#F55F44'
                ? 'rgba(245, 95, 68, 0.2)'
                : bgColor === '#FF3366'
                    ? 'rgba(255, 51, 102, 0.2)'
                    : bgColor;

    return (
        <div className="flex flex-col items-start bg-white p-5 w-full rounded-xl shadow-lg">
            <div
                style={{ backgroundColor: backgroundColorWithOpacity }}
                className='p-2 rounded-full'
            >
                <Image
                    src={image}
                    alt={title}
                    width={20}
                    height={20}
                />
            </div>
            <h2 className="text-sm font-semibold my-2">{title}</h2>
            <p className="text-xl font-bold">{subtitle}</p>
        </div>
    );
};

export default Card;
