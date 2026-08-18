import Counter from "@/components/Counter";
import Image from "next/image";

// ข้อมูล Ben 10
const animeList = [
  {
    id: 1,
    title: "Ben 10",
    thaiTitle: "เบ็นเท็น",
    genre: "Action / Sci-Fi",
    rating: "9.8",
  },
  {
    id: 2,
    title: "Ben 10: Alien Force",
    thaiTitle: "เบ็นเท็น: พลังเอเลี่ยน",
    genre: "Action / Adventure",
    rating: "9.7",
  },
  {
    id: 3,
    title: "Ben 10: Ultimate Alien",
    thaiTitle: "เบ็นเท็น: อัลติเมทเอเลี่ยน",
    genre: "Action / Sci-Fi",
    rating: "9.9",
  },
  {
    id: 4,
    title: "Ben 10: Omniverse",
    thaiTitle: "เบ็นเท็น: ออมนิเวิร์ส",
    genre: "Action / Comedy",
    rating: "9.6",
  },
  {
    id: 5,
    title: "Ben 10: Reboot",
    thaiTitle: "เบ็นเท็น ฉบับรีบูต",
    genre: "Action / Comedy",
    rating: "9.5",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] py-12 px-6 text-white">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header Section */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_25px_rgba(163,230,53,0.08)] space-y-3">

          <span className="text-[11px] font-bold uppercase tracking-wider text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/30">
            Welcome to Omnitrix Library
          </span>

          <h1 className="text-2xl font-black text-white tracking-tight pt-1">
            ยินดีต้อนรับสู่จักรวาลของ{" "}
            <span className="text-lime-400">BEN 10</span>
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            พื้นที่สำหรับแฟน ๆ ของ Ben 10
            ที่ต้องการสำรวจเรื่องราวของเบ็น เทนนีสัน
            Omnitrix และเหล่าเอเลี่ยนจากทั่วจักรวาล
          </p>

        </div>

        {/* Counter Section */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_25px_rgba(163,230,53,0.06)] space-y-4">

          <div className="space-y-1">

            <h2 className="text-sm font-bold text-white">
              OMNITRIX COUNTER
            </h2>

            <p className="text-xs text-gray-500">
              ทดลองกดปุ่มเพื่อเพิ่มจำนวนเอเลี่ยนที่คุณสนใจ
            </p>

          </div>

          <div className="p-4 bg-black border border-gray-800 rounded-2xl flex justify-center">
            <Counter />
          </div>

        </div>

        {/* Ben 10 Mascot Section */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_25px_rgba(163,230,53,0.06)] space-y-4">

          <div className="space-y-1">

            <h2 className="text-sm font-bold text-white">
              OMNITRIX
            </h2>

            <p className="text-xs text-gray-500">
              อุปกรณ์สุดล้ำที่ทำให้ Ben สามารถแปลงร่างเป็นเอเลี่ยนหลากหลายชนิด
            </p>

          </div>

          <div className="w-32 h-32 mx-auto overflow-hidden rounded-full bg-black p-3 border-2 border-lime-400 flex items-center justify-center shadow-[0_0_25px_rgba(163,230,53,0.35)]">

            <img
              src="/image/ben10.jpg"
              alt="Ben 10"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />

          </div>

        </div>

        {/* Ben 10 Collection */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_25px_rgba(163,230,53,0.06)] space-y-4">

          <div className="flex items-center justify-between border-b border-gray-800 pb-3">

            <div>

              <h2 className="text-sm font-bold text-white">
                BEN 10 COLLECTION
              </h2>

              <p className="text-xs text-gray-500">
                ซีรีส์ Ben 10 ที่แฟน ๆ ชื่นชอบ
              </p>

            </div>

            <span className="text-[10px] font-bold px-2.5 py-0.5 bg-lime-400/10 text-lime-400 rounded-full border border-lime-400/30">
              {animeList.length} เรื่อง
            </span>

          </div>

          <div className="space-y-3">

            {animeList.map((anime) => (

              <div
                key={anime.id}
                className="group flex items-center justify-between p-4 bg-black hover:bg-[#151515] border border-gray-800 hover:border-lime-400/40 rounded-2xl transition-all duration-200 shadow-sm"
              >

                <div className="flex items-center gap-3.5">

                  <span className="w-8 h-8 shrink-0 bg-[#101010] group-hover:bg-lime-400 group-hover:text-black text-gray-400 font-black text-xs rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-lime-400 transition-all duration-200">
                    {anime.id}
                  </span>

                  <div>

                    <p className="text-xs sm:text-sm text-white font-bold group-hover:text-lime-400 transition-colors">
                      {anime.thaiTitle}
                    </p>

                    <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                      {anime.title} •{" "}
                      <span className="text-gray-600">
                        {anime.genre}
                      </span>
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-1 bg-lime-400/10 border border-lime-400/20 px-2.5 py-1 rounded-xl shrink-0">

                  <span className="text-xs">★</span>

                  <span className="text-[11px] font-bold text-lime-400">
                    {anime.rating}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Alien Section */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_25px_rgba(163,230,53,0.06)] space-y-4 text-center">

          <div className="space-y-1 text-left">

            <h2 className="text-sm font-bold text-white">
              ALIEN DATABASE
            </h2>

            <p className="text-xs text-gray-500">
              ฐานข้อมูลเอเลี่ยนจาก Omnitrix
            </p>

          </div>

          <div className="flex justify-center overflow-hidden rounded-2xl pt-2">

            <Image
              src="/image/alienforce.jfif"
              alt="Ben 10 Alien"
              width={300}
              height={300}
              className="rounded-2xl object-contain hover:scale-105 transition-transform duration-300"
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;
