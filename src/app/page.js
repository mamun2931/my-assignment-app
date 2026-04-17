
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
export const dynamic = 'force-dynamic'; 

export default async function Home() {
     const res = await fetch("https://my-assignment-app-tau.vercel.app/data.json");
    const posts = await res.json()
    
    const total = posts.length;
const onTrack = posts.filter(p => p.status === "on_track").length;
const needAttention = posts.filter(
  p => p.status === "overdue" || p.status === "almost_due"
).length;
  return (  
    <div className="md:w-7xl mx-auto pb-20">
        <div className="pt-20">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
            <p className="text-[#64748B] mt-4 mb-8">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the
              relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] font-semibold text-[#FFFFFF]"><FaPlus /> Add a Friend</button>
          </div>

          <div className="grid gid-cols-2 md:grid-cols-4 gap-4 py-10">
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-[#244D3F] text-2xl">{total}</h2>
                      <p className="text-[#64748B] textarea-lg">Total Friends</p>
                    </div>
                  </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-[#244D3F] text-2xl">{onTrack}</h2>
                      <p className="text-[#64748B] textarea-lg">On Track</p>
                    </div>
                  </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-[#244D3F] text-2xl">{needAttention}</h2>
                      <p className="text-[#64748B] textarea-lg">Need Attention</p>
                    </div>
                  </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-[#244D3F] text-2xl">12</h2>
                      <p className="text-[#64748B] textarea-lg">Interactions This Month</p>
                    </div>
                  </div>
          </div>

        </div>

          <div className="border-t border-[#E9E9E9] pb-10"></div>

          <div>

              <div>
                    {
          <div className="pb-10">
            <h2 className="text-2xl font-bold mb-5">Your Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                <Link href={`/${post.id}`}
                  key={post.id}
                  className="bg-white rounded-xl shadow shadow-gray-300 hover:scale-105 hover:cursor-pointer p-5 text-center"
                >
                  <img
                    src={post.picture}
                    alt={post.name}
                    className="w-20 h-20 rounded-full mx-auto"
                  />

                  <h3 className="text-lg font-semibold mt-3">{post.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {post.days_since_contact}d ago
                  </p>

                  <div className="flex justify-center gap-2 mt-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        post.status === "overdue"
                          ? "bg-red-500 text-white"
                          : post.status === "almost_due"
                          ? "bg-yellow-400 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
                    }
              </div>
          </div>
    </div>

  );
}
