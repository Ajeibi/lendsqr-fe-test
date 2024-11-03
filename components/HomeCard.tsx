import React from 'react'
import Card from './UserCard'

const HomeCard = () => {
    return (
        <section className='text-black-1'>
            <h1 className="text-2xl font-semibold mb-5">Users</h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
                <Card
                    image="/icons/card1.png"
                    title="USERS"
                    subtitle="2,453"
                    bgColor='#DF18FF'
                />

                <Card
                    image="/icons/card2.png"
                    title="ACTIVE USERS"
                    subtitle="2,453"
                    bgColor='#5718FF'
                />

                <Card
                    image="/icons/card3.png"
                    title="USERS WITH LOANS"
                    subtitle="12,452"
                    bgColor='#F55F44'
                />

                <Card
                    image="/icons/card4.png"
                    title="USERS WITH SAVINGS"
                    subtitle="102,453"
                    bgColor='#FF3366'
                />
            </div>
        </section>
    )
}

export default HomeCard
