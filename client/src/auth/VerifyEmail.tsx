import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const VerifyEmail = (props: Props) => {
	const[otp , setOtp] = useState<string[]>(["","","","","",""]);
	const inputRef = useRef<any>([]);
	const navigate = useNavigate();
	const loading = false;

	const handleChanage = (idx:number, value:string) => {
		if(/^[a-zA-Z0-9]$/.test(value) || value === "") 
		{
			const newOtp = [...otp];
			newOtp[idx] = value;
			setOtp(newOtp);
		}
		if(value !== "" && idx < 5) {
			inputRef.current[idx+1].focus();
		}
	}

	const handleKeyDown = (index : number , e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Backspace" && !otp[index] && index > 0) {
			inputRef.current[index-1].focus();
		}
	}

  return (
	<div className="flex items-center justify-center h-screen w-full">
		   <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
		   <div className="text-center">
		   <h1 className="font-extrabold text-2xl">Verify your email</h1>
		   <p className="text-sm text-gray-600">
            Enter the 6 digit code sent to your email address
          </p>
			</div>
			<form>
				<div className='flex justify-between'>
				{
					otp.map((letter:string, idx:number)=> (
						<Input 
						key={idx}
						type='text'
						value={letter}
						maxLength={1}
						className='md:w-12 md:h-12 w-8 h-8 text-center text-sm font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-600'
						ref={(element) => (inputRef.current[idx] = element)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChanage(idx, e.target.value) }
						onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(idx, e)}
						/> 
					)) 
				}
				</div>
				{loading ? (
            <Button
              disabled
              className="bg-orange hover:bg-hoverOrange mt-6 w-full"
            >
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button className="bg-orange hover:bg-hoverOrange mt-6 w-full">
              Verify
            </Button>
          )}
			</form>
		</div>
	
    </div>
  )
}

export default VerifyEmail