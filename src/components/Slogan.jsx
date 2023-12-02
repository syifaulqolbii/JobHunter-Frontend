import React from 'react';
import hero from '../assets/jobhunter_hero.webp';

const CareerSearchSection = ({ handleSearchSubmit }) => {
    return (
        <section className="text-center py-72 bg-cover bg-center mb-10" style={{ backgroundImage: `url(${hero})` }}>
            <h5 className="text-xl md:text-2xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
                Hunting <span className="text-blue-500">opportunities, </span> <br /> Finding <span className="text-blue-500">Careers</span>
            </h5>
        </section>
    );
};

export default CareerSearchSection;