import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input'
import { Loader2, LockKeyholeIcon, Mail, PhoneOutgoing, User } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { Link } from 'react-router-dom';
import { SignupInputState, signupSchema } from '@/schema/userSchema';

type Props = {}

// interface SignupInputState {
// 	Fullname : string;
// 	email : string;
// 	password : string;
// 	contact : number;
// }


const signup = (props: Props) => {

	const[input,setInput] = useState<SignupInputState>({
		Fullname : "",
		email : "",
		password : "",
		contact : "",
	})
	const[error , setError] = useState<Partial<SignupInputState>>({});

	const changeHandler = (e : ChangeEvent <HTMLInputElement>) => {
	const {name,value} = e.target;
	setInput({...input,[name]:value});
	}

	const loginSumbitHandler = async (e:FormEvent) => {
		e.preventDefault();

		const result = signupSchema.safeParse(input);
		if(!result.success){
			const fieldErrors = await result.error.formErrors.fieldErrors;
			setError(fieldErrors as Partial <SignupInputState>);
			return;
		}
		console.log(input);
	}

	const loading = false;
  return (
    <div className='flex items-center justify-center min-h-screen'>
	<form onSubmit={loginSumbitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
		<div className="mb-4">
		<h1 className="font-bold text-2xl justify-center text-center">Food & Pizza App</h1>
		</div>
		<div className='space-y-4'>
		<div className='relative'>
		<Input
		className='pl-10'
		type='text'
		name='Fullname'
		placeholder='Enter your Fullname'
		value={input.Fullname}
		onChange={changeHandler}
		/>
		<User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
		{
			error.Fullname && <p className='text-red-500 text-sm'>{error.Fullname}</p>
		}
		</div>
		<div className='relative'>
		<Input
		className='pl-10'
		type='email'
		name='email'
		placeholder='Enter your email'
		value={input.email}
		onChange={changeHandler}
		/>
	 <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
	 {
			error.Fullname && <p className='text-red-500 text-sm'>{error.email}</p>
		}
		</div>
		<div className='relative'>
		<Input 
		className='pl-10'
		type='password'
		name='password'
		placeholder='Enter your password'
		value={input.password}
		onChange={changeHandler}
		/>
		<LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
		{
			error.Fullname && <p className='text-red-500 text-sm'>{error.password}</p>
		}
		</div>
		<div className='relative'>
		<Input 
		className='pl-10'
		type='text'
		name='contact'
		placeholder='Enter your Number'
		value={input.contact}
		onChange={changeHandler}
		/>
		<PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
		{
			error.Fullname && <p className='text-red-500 text-sm'>{error.contact}</p>
		}
		</div>
		<div className='mb-6 '>
			{
				loading ? (<Button disabled className='w-full bg-orange hover:bg-hoverOrange text-lg font-medium'>
					<Loader2 className='mr-2 h-4 w-4 animate-spin'/>
				please wait
			</Button>) : 
			(<Button className='w-full bg-orange hover:bg-hoverOrange text-lg font-medium'>
				Login
			</Button>)
			}
		</div>
		</div>
		<Separator  />
		<p className=" text-gray-500 mt-2">
			Dont't have an account? {""}
			<Link to='/login' className='text-blue-500'>Login</Link>
		</p>
	</form>
    </div>
  )
}

export default signup