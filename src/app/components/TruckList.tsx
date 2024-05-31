import Link from "next/link";
import Image from "next/image";
import FoodCart from "../../../public/food-cart.svg";
import FoodTruck from "../../../public/food-truck.svg";

export const dynamic = "force-dynamic";

// objectid, applicant, facilitytype, locationdescription, fooditems
async function getTruckList() {
  const response = await fetch(`https://data.sfgov.org/resource/rqzj-sfat.json?status=APPROVED`);

  return response.json();
}

function getRandomTruck(list) {
  const rand = Math.floor(Math.random() * (list.length - 0));
  return list[rand].objectid;
}

export default async function TruckList() {
  const trucks = await getTruckList();
  const randomTruck = await getRandomTruck(trucks);
  
  return (
    // Random Button
    <>
    <p className="text-xl">Feeling indecisive? Let us pick for you!</p>

    <Link className="py-2 px-5 bg-red-400 hover:bg-red-500 rounded-lg mb-10"href={`/details/${randomTruck}`}>Choose For Me!</Link>

    <table className="table-fixed p-2">
      <thead className="sticky top-0">
        <tr className="">
        <th className="text-left p-2 bg-slate-50 rounded-tl-lg">Truck Name</th>
        <th className="p-2 bg-slate-50">Truck/Cart</th>
        <th className="p-2 bg-slate-50 rounded-tr-lg">Location</th>
        </tr>
      </thead>
      <tbody className="overflow-y-scroll">
        {trucks.map((truck) => (
        <tr key={truck.objectid} className="border-collapse border-b-2 hover:bg-gray-50 hover:bg-opacity-30 border-slate-800">
          <td className="p-2">
            <Link className="font-bold hover:underline" href={`/details/${truck.objectid}`}>{truck.applicant}</Link>
          </td>
          <td className="p-2 flex items-center">
            {
              truck.facilitytype == "Push Cart"
              ? <Image 
                src={FoodCart}
                width={32}
                height={32}
                style={{ margin: '0 auto' }}
                alt="Push Cart" />
              : <Image 
                src={FoodTruck}
                width={32}
                height={32}
                style={{ margin: '0 auto' }}
                alt="Food Truck"
                />
            }
          </td>
          <td className="p-2 text-xs">{truck.locationdescription}</td>
        </tr>
    ))}
      </tbody>
    </table>
    </>
  );
}