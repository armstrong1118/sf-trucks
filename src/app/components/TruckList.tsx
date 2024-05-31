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
        <td className="p-2">{truck.applicant}</td>
        <td className="p-2">{truck.facilitytype}</td>
        <td className="p-2">{truck.fooditems}</td>
        <td className="p-2 text-xs">{truck.locationdescription}</td>
      </tr>
    ))}
    </tbody>
    </table>
    
  );
}