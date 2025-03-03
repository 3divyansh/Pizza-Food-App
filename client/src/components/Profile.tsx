import React, { useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Plus } from 'lucide-react'
import { Input } from './ui/input';


type profileDataState = {
	fullname : string,
	profileImage : string,
	email : string,
	phone : string,
	address : string,
	country : string,
	postalCode : string,
	about : string,
	city : string
}
const Profile = () => {
	const imageRef = useRef<HTMLInputElement | null>(null);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const[profileData , setProfileData] = useState({
		fullname : '',
		profileImage : '',
		email : '',
		phone : '',
		address : '',
		country : '',
		postalCode : '',
		about : '',
		city : ""
	});
	const fileChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if(file){
			const reader = new FileReader();
			reader.onload = ( ) => {
				const result  = reader.result as string;
				setSelectedImage(result);
			}		}
	}

  return (
    <form className='max-w-7xl mx-auto my-5'>
	<div className='flex items-center justify-between'>
		<div className='flex items-center gap-2'>
			<Avatar className='relative md:w-28 md:h-28 w-20 h-20'>
				<AvatarImage />
				<AvatarFallback>
					CN
				</AvatarFallback>
			
			<input ref={imageRef} type="file" className='hidden' accept='image/*' 
			onChange={fileChangeHandler}/>
			<div 
			className=' absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer' onClick={() => imageRef.current?.click()} >
				<Plus className='text-white w-8 h-8' />
				</div>
				</Avatar>
				<Input 
				type='text'
				name='fullname'
				placeholder='Full Name'
				className='font-bold text-2xl outline-none border-2 focus-visible:ring-transparent'
				/>
		</div>
	</div>
    </form>
  )
}

export default Profile