import React from 'react';
import homeLogo from '../../assets/swift.png';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="bg-pink-300 flex justify-center py-10 px-500">
            <div className='container grid grid-cols-2 text-red-700'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>Boas Vindas!</h2>
                    <p className='text-xl'>Fique por dentro de tudo que acontece na The Eras Tour!</p>
                    <div className="flex justify-around gap-4">
                        <button className='rounded bg-white text-pink-800 py-2 px-4'>Ver postagens</button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={homeLogo} alt="Logo" className='w-2/3' />
                </div>
            </div>
        </div>
    );
}

export default Home;