import Image from "next/image";
import Link from "next/link";
import FoodCart from "../../../../public/food-cart.svg";
import FoodTruck from "../../../../public/food-truck.svg";


async function getTruckDetails(objectid) {
  const response = await fetch(`https://data.sfgov.org/resource/rqzj-sfat.json?status=APPROVED&objectid=${objectid}`);
  return response.json();
}

export default async function TruckDetail({ params } : { 
  params: {
    id: string
  } 
}) {
  const details = await getTruckDetails(`${params.id}`);

  return (
    <>
      {details.map((truck:any) => (
        <main className="flex min-h-screen flex-col items-center text-center p-24" key={truck.objectid}>
          <div className="rounded-full bg-yellow-500 p-10 mb-10">
          {
            truck.facilitytype == "Push Cart"
            ? <Image 
              src={FoodCart}
              width={150}
              height={150}
              alt="Push Cart" />
            : <Image 
              src={FoodTruck}
              width={150}
              height={150}
              alt="Food Truck"
              />
          }
          </div>
          <h1 className="text-5xl text-slate-900 font-bold drop-shadow-md mb-7">{truck.applicant} ({truck.facilitytype})</h1>

          <h2 className="text-xl text-slate-900 font-bold drop-shadow-md mb-2">Operating Location</h2>
          <p>{truck.locationdescription}</p>
          <h2 className="text-xl text-slate-900 font-bold drop-shadow-md mt-4 mb-2">Serving</h2>
          <p>{truck.fooditems}</p>

          <Link className="p-2 px-5 bg-teal-200 rounded-lg hover:bg-teal-500 mt-10" href={"/"}>Back</Link>
        </main>
      ))}
    </>
  );
}