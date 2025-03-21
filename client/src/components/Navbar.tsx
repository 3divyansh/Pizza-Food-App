import React from "react";
import { Link } from "react-router-dom";
import { Menubar } from "./ui/menubar";
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { HandPlatter, Loader2, MenuIcon, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, Utensils, UtensilsCrossed } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const Navbar = () => {

	const admin = true;
	const loading = false;

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">
            Food & pizaa app
          </h1>
	   </Link>
          <div className="hidden md:flex items-center gap-10">
            <div className="hidden md:flex items-center gap-6">
              <Link className="font-semibold" to="/">Home</Link>
              <Link className="font-semibold" to="/profile">Profile</Link>
              <Link className="font-semibold" to="/order">Order</Link>
            
{
	
		admin &&  (
			<Menubar>
				<MenubarMenu>
				<MenubarTrigger>
					Dashboard
				</MenubarTrigger>
				<MenubarContent>
					<Link to="/admin/restaurent">
					<MenubarItem>
						Restaurent</MenubarItem></Link>
					<Link to="/admin/menu">
					<MenubarItem>
					menu
					</MenubarItem>
					</Link>
					<Link to="/admin/orders">
					<MenubarItem>
					order
					</MenubarItem>
					</Link>
				</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	
}

          </div>
	   <div className="flex items-center gap-6">
		<div>
		<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem >
          Dark
        </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>
		</div>
		<Link to="/cart" className="relative cursor-pointer"> 
		<ShoppingCart />
		<Button size={"icon"} className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-400">1</Button>
		</Link>
		<div className="text-black">
			<Avatar>
				<AvatarImage />
					<AvatarFallback>
						CN
					</AvatarFallback>
				
			</Avatar>
		</div>
		<div>
			{
				loading ? (
					<Button className="bg-orange bg-hoverOrange ">
				<Loader2 className="mr-2 h-4 w-4 animate-spin " />
				please wait
			</Button>
				) : (
					<Button className="bg-orange bg-hoverOrange ">
						Logout
						</Button>
				)
			}
		</div>
	   </div>
	   </div>
	   <div className="md:hidden "> 
		{/* mobile respsonsive */}
<MobileNavbar />

	   </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
	
	return (
		<div>
			 <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} className="rounded-full bg-gray-200 text-black hover:bg-gray-300" variant="outline">
		<MenuIcon size={"18"} />
	 </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle className="font-medium text-lg">Food & Pizza </SheetTitle>

	   <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem >
          Dark
        </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>

        </SheetHeader>
	 <Separator className="my-2 " />

<SheetDescription className="flex-1 ">
	<Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium text-lg">
	<User />
	<span>Profile</span>
	</Link>
	<Link to="/order" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium text-lg">
	<HandPlatter />
	<span>Order</span>
	</Link>
	<Link to="/Cart" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium text-lg">
	<ShoppingCart />
	<span>Cart(0)</span>
	</Link>
	<Link to="/Menu" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium text-lg">
	<SquareMenu />
	<span>Menu</span>
	</Link>
	<Link to="/restaurent" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium text-lg">
	<UtensilsCrossed />
	<span>Restaurent</span>
	</Link>
	<Link to="/restaurent-orders" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium text-lg">
	<PackageCheck />
	<span>Restaurent Orders</span>
	</Link>
	
</SheetDescription>
       
        <SheetFooter>

		<>
		<div className="flex flex-row items-center gap-2">
			<Avatar>
				<AvatarImage />
					<AvatarFallback>
						CN
					</AvatarFallback>
				
			</Avatar>
			<h1 className="font-medium text-lg">
				DIVYANSH_
			</h1>
			</div>	
		</>
	
        </SheetFooter>
	 <SheetClose asChild>
		<Button type="submit" className="bg-orange hover:bg-hoverOrange">Logout</Button>
	     </SheetClose>
      </SheetContent>
    </Sheet>
		</div>
	)
}

