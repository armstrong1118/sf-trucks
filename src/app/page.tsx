import TruckList from "./components/truckList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl text-slate-900 font-bold drop-shadow-md mb-7">Lets Eat San Francisco!</h1>
      <p className="text-center mb-6">Welcome, below you will find a list of active food trucks available around the San Francisco area. Each truck is listed individually, so a company running multiple trucks will appear as many times.</p>
      <TruckList />
    </main>
  );
}
