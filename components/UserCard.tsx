import Image from 'next/image';
import React from 'react';
import './styles.scss';

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
        <div className="cardWrapper shadow-lg">
            <div
                style={{ backgroundColor: backgroundColorWithOpacity }}
                className='image'
            >
                <Image
                    src={image}
                    alt={title}
                    width={20}
                    height={20}
                />
            </div>
            <h2 className="">{title}</h2>
            <p className="">{subtitle}</p>
        </div>
    );
};

export default Card;
