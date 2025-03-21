import { Link, useParams } from "react-router-dom";
import Filterpage from "./Filterpage";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Globe, MapPin, MapPinned, Pizza, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "../assets/hero_pizza.png";
import { Skeleton } from "./ui/skeleton";

const SearchPage = () => {
  const params = useParams();
  const [serachQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <Filterpage />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Input
              className=""
              type="text"
              value={serachQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by restaurent & cuisines"
            />
            <Button className="bg-orange hover:bg-hoverOrange">Search</Button>
          </div>
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
              <h1>(2) serach result foun</h1>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {["biryani", "Momos", "Burger"].map(
                  (selectedFilter: string, index: number) => (
                    <div
                      key={index}
                      className="relative inline-flex items-center max-w-full"
                    >
                      <Badge
                        className="text-[#D19B3D] bg-[#FFF3E0] rounded-full hover:cursor-pointer pr-5 w-20"
                        variant="outline"
                      >
                        {selectedFilter}
                      </Badge>
                      <X
                        size={16}
                        className="absolute text-[#D19254] right-1 hover:cursor-pointer"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 ">
            {["Pizza cafe", "durrani cafe", "Dominos"].map(
              (restaurent: string, index: number) => (
                <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
                  <div className="relative">
                    <AspectRatio ratio={16 / 6}>
                      <img
                        src={HeroImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg py-1 px-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {restaurent}
                    </h1>

                    <div className="mt-2 gap-1 flex items-center text-gray-600 darktext-gray-400">
                      <MapPin size={16} />
                      <p>
                        city :{" "}
                        <span className="text-sm font-medium">
                          {" "}
                          Delhi,India
                        </span>
                      </p>
                    </div>

                    <div className="mt-2 gap-1 flex items-center text-gray-600 darktext-gray-400">
                      <Globe size={16} />
                      <p>
                        Country :{" "}
                        <span className="text-sm font-medium"> India</span>
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {["Pizza", "Burger", "Momos"].map(
                        (cuisine: string, index: number) => (
                          <Badge key={index} className="bg-orange text-white">
                            {cuisine}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 border-t  dark:border-gray-700 border-t-gray-100 text-white flex justify-end">
                    <Link to={`/restaurant/${123}`}>
                      <Button className="bg-orange hover:bg-hoverOrange text-white font-semibold py-2 px-4 rounded-full shadow-md traansition-colors duration-300">
                        View Menus{" "}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

const SearchPageSkeleton = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden"
        >
          <div className="relative">
            <AspectRatio ratio={16 / 6}>
              <Skeleton className="w-full h-full" />
            </AspectRatio>
          </div>
          <CardContent className="p-4">
            <Skeleton className="h-8 w-3/4 mb-2" />
            <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="mt-2 flex gap-1 items-center text-gray-600 dark:text-gray-400">
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
          </CardContent>
          <CardFooter className="p-4  dark:bg-gray-900 flex justify-end">
            <Skeleton className="h-10 w-24 rounded-full" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

const NoResultFound = ({ searchText }: { searchText: string }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        No results found
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        We couldn't find any results for "{searchText}". <br /> Try searching
        with a different term.
      </p>
      <Link to="/">
        <Button className="mt-4 bg-orange hover:bg-orangeHover">
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
};
