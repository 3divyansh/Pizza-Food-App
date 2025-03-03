import {z} from 'zod';



export const signupSchema = z.object({
	Fullname : z.string().min(5,"full name is required").max(28),
	email : z.string().email("invalid email"),
	password : z.string().min(6, "password must be atleast 6 characters"),
	contact : z.string().min(10,"contact number is required").max(12,"contact number is required")
});

export const loginSchema = z.object({
	email : z.string().email("invalid email"),
	password : z.string().min(6, "password must be atleast 6 characters"),
});


export type SignupInputState = z.infer<typeof signupSchema>;
export type LoginInputState = z.infer<typeof loginSchema>;