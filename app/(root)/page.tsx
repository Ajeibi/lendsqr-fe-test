import HomeTable from '@/components/columns/page';
import HomeCard from '@/components/HomeCard';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <div className="pb-10">
                <HomeCard />
            </div>
            <HomeTable />
        </div>
    );
};

export default Home;
