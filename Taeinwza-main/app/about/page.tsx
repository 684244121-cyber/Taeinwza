import Counter from "@/components/Counter";
import Image from "next/image";

// ข้อมูลอนิเมะจริง 5 หัวข้อ เปลี่ยนจากคำอ่านภาษาละตินเดิม
const animeList = [
  {
    id: 1,
    title: "Demon Slayer: Kimetsu no Yaiba",
    thaiTitle: "ดาบพิฆาตอสูร",
    genre: "Action / Fantasy",
    rating: "9.8",
  },
  {
    id: 2,
    title: "Detective Conan",
    thaiTitle: "ยอดนักสืบจิ๋วโคนัน",
    genre: "Mystery / Investigation",
    rating: "9.5",
  },
  {
    id: 3,
    title: "Attack on Titan (Shingeki no Kyojin)",
    thaiTitle: "ผ่าพิภพไททัน",
    genre: "Dark Fantasy / Action",
    rating: "9.9",
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    thaiTitle: "มหาเวทย์ผนึกมาร",
    genre: "Action / Supernatural",
    rating: "9.6",
  },
  {
    id: 5,
    title: "Sgt. Frog (Keroro Gunsou)",
    thaiTitle: "เคโรโระ ขบวนการอ๊บอ๊บ",
    genre: "Comedy / Sci-Fi",
    rating: "9.7",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Welcome Readers
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight pt-1">
            ยินดีต้อนรับสู่พื้นที่อ่านหนังสือของเรา
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            สวัสดีผู้อ่านทุกท่าน! พื้นที่ตรงนี้ถูกสร้างขึ้นมาเพื่อให้ทุกคนได้เข้ามาสำรวจ แลกเปลี่ยนความคิด และเพลิดเพลินไปกับคลังหนังสือและมินิฟีเจอร์ที่เราตั้งใจพัฒนาขึ้นมาครับ
          </p>
        </div>

        {/* Counter Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4">
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-slate-900">ลองมีปฏิสัมพันธ์กับเว็บ</h2>
            <p className="text-xs text-slate-400">
              ทดลองกดปุ่มด้านล่างเพื่อปรับเปลี่ยนตัวเลขจำนวนเล่มหนังสือที่คุณสนใจ
            </p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex justify-center">
            <Counter />
          </div>
        </div>

        {/* Public Image Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4">
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-slate-900">มาสคอตประจำเว็บไซต์</h2>
            <p className="text-xs text-slate-400">
              พบน้อง Keroro ตัวแทนความสนุกที่จะอยู่เป็นเพื่อนคุณในทุกหน้าอ่านหนังสือ
            </p>
          </div>
          <div className="w-28 h-28 mx-auto overflow-hidden rounded-2xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-center">
            <img
              src="/image/keroro.png"
              alt="Keroro Mascot"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* รายการน่าอ่านประจำวัน (แปลงเป็นชื่ออนิเมะจริง 5 หัวข้อ) */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">รายการน่าอ่านประจำวัน</h2>
              <p className="text-xs text-slate-400">หัวข้อแนะนำที่เราดึงมาจากระบบสำหรับผู้อ่านทุกท่าน</p>
            </div>
            <span className="text-[10px] font-semibold px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
              {animeList.length} หัวข้อ
            </span>
          </div>

          <div className="space-y-3">
            {animeList.map((anime) => (
              <div
                key={anime.id}
                className="group flex items-center justify-between p-4 bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-8 h-8 shrink-0 bg-white group-hover:bg-emerald-500 group-hover:text-white text-slate-600 font-extrabold text-xs rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-emerald-500 transition-all duration-200">
                    {anime.id}
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-900 font-bold group-hover:text-emerald-600 transition-colors">
                      {anime.thaiTitle}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                      {anime.title} • <span className="text-slate-400">{anime.genre}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-xl shrink-0">
                  <span className="text-xs">⭐</span>
                  <span className="text-[11px] font-bold text-amber-700">{anime.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Image Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4 text-center">
          <div className="space-y-1 text-left">
            <h2 className="text-sm font-bold text-slate-900">มุมพักสายตา</h2>
            <p className="text-xs text-slate-400">ภาพบรรยากาศธรรมชาติสำหรับผ่อนคลายระหว่างการอ่าน</p>
          </div>
          <div className="flex justify-center overflow-hidden rounded-2xl pt-2">
            <Image
              src="https://fastly.picsum.photos/id/791/200/300.jpg?grayscale&hmac=BeWMtmO0FemRpbDovWA5h-t58FbjhFvJjotU2VC9Bl0"
              alt="ภูเขา"
              width={300}
              height={300}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;