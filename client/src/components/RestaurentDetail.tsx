import Image from "@/assets/hero_pizza.png";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";

const RestaurentDetail = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src={"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"}
            alt="image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
          <div className="flex flex-col md:flex-row justify-between">
            <div className="my-5">
              <h1 className="font-medium text-xl">{"Tandoori Tadka"}</h1>
              <div className="flex gap-2 my-2">
                {["Biryani", "Tandoori", "Chinese"].map(
                  (cusine: string, idx: number) => (
                    <Badge key={idx} className="bg-orange text-white">
                      {cusine}
                    </Badge>
                  )
                )}
              </div>
              <div className="flex md:flex-row flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                  <Timer size={20} className="w-5 h-5" />
                  <h1 className="flex items-center gap-2 font-medium">
                    Delivery Time : <span className="text-[#D19254]">
			35 mins
		      </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
	 
      </div>
    </div>
  );
};

export default RestaurentDetail;
