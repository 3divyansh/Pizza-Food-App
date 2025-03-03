import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {}

const ForgotPassword = (props: Props) => {
	const [ email, setEmail ] = useState<string>('');
	const loading = false;
  return (
    <div className='flex items-center justify-center min-h-screen'>
	<form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
		<div className="text-center">
		<h1 className="font-extrabold mb-2 text-2xl">Forgot Password</h1>
		<p className="text-gray-600 text-sm">Enter your email to reset your password</p>
		</div>
		<div className="relative w-full">
		<Input
		className="border border-gray-400 p-2 rounded-lg pl-10"
		type="text"
		onChange={(e)=> setEmail(e.target.value)} 
		placeholder="Enter your email"
		/>
		<Mail 
		className="absolute inset-y-2 left-2 top-2 text-gray-500 pointer-events-none"
		/>
		</div>
		{
			  loading ? (
				<Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait</Button>
			   ) : (
				<Button className="bg-orange hover:bg-hoverOrange">Send Reset Link</Button>
			   )
		}
		<span className="text-center underline">
			Back to {" "}
			<Link to="/login" className="text-blue-500 hover:underline">Login
			</Link>
		</span>
	</form>
    </div>
  )
}

export default ForgotPassword