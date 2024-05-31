import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl text-slate-900 font-bold drop-shadow-md mb-7">Lets Eat San Francisco!</h1>
      <p className="text-center mb-6">Your food truck is in another location - please return to the list and make another selection.</p>
      <Link className="p-2 px-5 bg-teal-200 rounded-lg hover:bg-teal-500" href={"/"}>Back</Link>
    </main>
  );
}
