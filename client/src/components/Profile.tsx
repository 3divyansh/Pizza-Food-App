import React, { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Loader2, LocateIcon, Mail, MapPin, MapPinnedIcon, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

type profileDataState = {
  fullname: string;
  profileImage: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  postalCode: string;
  about: string;
  city: string;
};
const Profile = () => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [profileData, setProfileData] = useState({
    fullname: "",
    profileImage: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    postalCode: "",
    about: "",
    city: "",
  });

  const loading = false;

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setSelectedImage(result);
        setProfileData((prevData) => ({
          ...prevData,
          profileImage: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateProfileHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profileData);

    //api call to update profile

    
  };

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
              <AvatarImage src={selectedImage} />
              <AvatarFallback>CN</AvatarFallback>

              <input
                ref={imageRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={fileChangeHandler}
              />
              <div
                className=" absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
                onClick={() => imageRef.current?.click()}
              >
                <Plus className="text-white w-8 h-8" />
              </div>
            </Avatar>
            <Input
              type="text"
		name="fullname"
              value={profileData.fullname}
              placeholder="Full Name"
              className="font-bold text-2xl outline-none border-2 focus-visible:ring-transparent"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="">
          <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-5">
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <Mail className="text-gray-500" />
              <div className="w-full ">
                <Label>Email</Label>
                <input
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                  name="email"
                  value={profileData.email}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-2">
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <LocateIcon className="text-gray-500" />
              <div className="w-full ">
                <Label>Address</Label>
                <input
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                  name="address"
                  value={profileData.address}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-5">
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <MapPin className="text-gray-500" />
              <div className="w-full ">
                <Label>City</Label>
                <input
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                  name="city"
                  value={profileData.city}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-5">
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <MapPinnedIcon className="text-gray-500" />
              <div className="w-full ">
                <Label>Country</Label>
                <input
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                  name="country"
                  value={profileData.country}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        {loading ? (
          <Button className="bg-orange hover:bg-hoverOrange " disabled>
           <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          </Button >
        ) : (
          <Button className="bg-orange hover:bg-hoverOrange " >
            Update Profile
          </Button>
        )}
      </div>
    </form>
  );
};

export default Profile;
