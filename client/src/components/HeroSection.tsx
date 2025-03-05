import React, { useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import Heroimage from '../assets/hero_pizza.png';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {

	const [searchText, setSearchText] = useState<string>("");
	const navigate = useNavigate();

  return (
    <div className='flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20 '>
	<div className='flex- flex-col gap-10 md:w-[40%] '>
		<div className='flex flex-col gap-5'>
			<h1 className='font-bold md:font-extrabold md:text-5xl text-3xl'>
				order your favourite food && anytime and any where
			</h1>
			<p className='text-gray-500'>
				Hey! Our Delicious Food is waiting for you. Order now and enjoy the taste of our delicious food.
			</p>
		</div>
		<div className='relative flex items-center gap-2 w-full mt-3'>
			
			<Input
			type='text'
			value={searchText}
			placeholder='Search for food...'
			onChange={(e) => setSearchText(e.target.value)}
			className='pl-10  shadow-lg'
			/>
			<Search className='text-gray-500 absolute inset-y-2 left-2 ' />
			
			<Button className='bg-orange hover:bg-hoverOrange' onClick={ () => navigate(`/search/${searchText}`)}>serach</Button>
		</div>

	</div>
	<div>
		<img src={Heroimage} alt='food' className='object-cover w-full max-h-[500px] max-w-[900px]' />
	</div>
    </div>
  )
}

export default HeroSection