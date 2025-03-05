import React from 'react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

export interface FilterpageProps {
	id : string;
	label : string;
}

const filteroptions : FilterpageProps[] =  [
	{
	id : "burger",
	label : "Burger"	
	},

	{
		id : "thali",
		label : "thali"	
		},

		{
			id : "Biryani",
			label : "Biryani"	
			},

			{
				id : "Momos",
				label : "Momos"	
				},
]
const Filterpage = () => {

	const appliedHandler = (value:string) => {
		alert(value)
	}

	
  return (
    <div className='md:w-72 '>
	<div className='flex items-center justify-between'>
		<h1 className='font-medium text-lg'>Filter by cuisines </h1>
<Button variant={"link"}>
Reset
</Button>
	</div>
{
	filteroptions.map((Option) => (
		<div key={Option.id} className='flex items-center space-x-2 my-4'>
			<Checkbox
			id={Option.id}
			onClick={()=> appliedHandler(Option.label)}
			/>
			<Label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{Option.label}</Label>
			</div>
	))
}
    </div>
  )
}

export default Filterpage