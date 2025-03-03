import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input'
import { Loader2, LockKeyholeIcon, Mail } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { Link } from 'react-router-dom';
import { log } from 'console';
import { LoginInputState, loginSchema } from '@/schema/userSchema';
type Props = {}


const login = (props: Props) => {

	const[input,setInput] = useState<LoginInputState>({
		email : "",
		password : "",
	})
	const [error, setError] = useState<Partial<LoginInputState>>({});

	const changeHandler = (e : ChangeEvent <HTMLInputElement>) => {
	const {name,value} = e.target;
	setInput({...input,[name]:value});
	}

	const loginSumbitHandler = (e:FormEvent) => {
		e.preventDefault();

		const result = loginSchema.safeParse(input);
		if(!result.success){
			const fieldErrors = result.error.formErrors.fieldErrors;
			setError(fieldErrors as Partial <LoginInputState>);
			return;
		}
		console.log(input);
	}

	const loading = false;
  return (
    <div className='flex items-center justify-center min-h-screen text-center'>
	<form onSubmit={loginSumbitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
		<div className="mb-4">
		<h1 className="font-bold text-2xl justify-center text-center">Food & Pizza App </h1>
		</div>
		<div className='space-y-4'>
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
		<div className="mt-4">
            <Link
              to="/forgot-password"
              className="hover:text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
          </div>
		</div>
		<Separator  />
		<p className=" text-gray-500 mt-2">
			Dont't have an account? {""}
			<Link to='/Signup' className='text-blue-500'>Signup</Link>
		</p>
	</form>
    </div>
  )
}

export default login