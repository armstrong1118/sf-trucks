import Link from "next/link";
import Image from "next/image";
import FoodCart from "../../../public/food-cart.svg"
import FoodTruck from "../../../public/food-truck.svg"

// objectid, applicant, facilitytype, locationdescription, fooditems
async function getTruckList() {
  const response = await fetch(`https://data.sfgov.org/resource/rqzj-sfat.json?status=APPROVED`);

  return response.json();
}

export default async function TruckList() {
  const trucks = await getTruckList();
  
  return (
    // Random Button
    <table className="table-auto p-2">
      <thead className="sticky top-0">
        <tr className="">
        <th className="text-left p-2 bg-slate-50 rounded-tl-lg">Truck Name</th>
        <th className="p-2 bg-slate-50">Truck Type</th>
        <th className="p-2 bg-slate-50">Food Type</th>
        <th className="p-2 bg-slate-50 rounded-tr-lg">Location</th>
        </tr>
      </thead>
      <tbody className="overflow-y-scroll">
    {trucks.map((truck) => (
      <tr key={truck.objectid} className="border-collapse border-b-2 hover:bg-gray-50 hover:bg-opacity-30 border-slate-800">
        <td className="p-2">
          <Link className="font-bold" href={`/details/${truck.objectid}`}>{truck.applicant}</Link>
        </td>
        <td className="p-2">
          {
            truck.facilitytype == "Push Cart"
            ? <Image 
              src={FoodCart}
              width={32}
              height={32}
              alt="Push Cart" />
            : <Image 
              src={FoodTruck}
              width={32}
              height={32}
              alt="Food Truck"
              />
          }
        </td>
        <td className="p-2">{truck.fooditems}</td>
        <td className="p-2 text-xs">{truck.locationdescription}</td>
      </tr>
    ))}
    </tbody>
    </table>
    
  );
}