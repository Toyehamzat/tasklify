import { Medal } from "lucide-react";
export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex flex-row items-center border shadow-sm p-4 rounded-full bg-amber-100 text-amber-700 uppercase ">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task mangement
        </div>
        <div className=""></div>
      </div>
    </main>
  );
}
