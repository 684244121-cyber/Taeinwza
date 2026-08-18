import Link from "next/link";

export default function Home() {
  const featuredBooks = [
    {
      id: "1",
      title: "เคโรโระ ขบวนการอ๊บอ๊บป่วนโลก",
      category: "Sci-Fi / Comedy",
      rating: "4.9",
      img: "/image/keroro.png",
      tag: "ยอดนิยม",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: "2",
      title: "ทามามะ ทมิฬสะท้านภพ",
      category: "Action / Cute",
      rating: "4.8",
      img: "/image/tamama.png",
      tag: "มาใหม่",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      id: "3",
      title: "กีโรโระ ยอดนักสู้สมรภูมิรัก",
      category: "Military / Romance",
      rating: "4.7",
      img: "/image/giroro.png",
      tag: "แนะนำ",
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      id: "4",
      title: "คุรุรุ สิ่งประดิษฐ์เขย่าขวัญ",
      category: "Tech / Cyber",
      rating: "4.9",
      img: "/image/kururu.png",
      tag: "ฮิตฮอต",
      color: "bg-yellow-50 text-yellow-600 border-yellow-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6 antialiased">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Top Bar / Navigation Navigation */}
        <div className="flex items-center justify-between bg-white border border-slate-100 rounded-2xl px-6 py-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 p-1.5 flex items-center justify-center">
              <img src="/image/keroro.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-sm font-extrabold text-slate-900 tracking-tight">keroruayBook</h1>
              <p className="text-[11px] text-slate-400">คลังข้อมูลมังงะและอนิเมะ</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/info"
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Info
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 text-xs font-semibold bg-slate-900 hover:bg-emerald-600 text-white rounded-xl transition-all shadow-xs cursor-pointer"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 text-center">
          <div className="inline-block">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Welcome to Pekopon Library
            </span>
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              ค้นพบการ์ตูนและอนิเมะ <br />
              <span className="text-emerald-600">ที่คุณชื่นชอบได้ง่ายๆ ที่นี่</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              รวมคลังหนังสืออ่านสนุก ดีไซน์มินิมอลสบายตา โหลดรวดเร็วทันใจ พร้อมเสิร์ฟความบันเทิงตลอด 24 ชั่วโมง
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="ค้นหาชื่อหนังสือ, นักเขียน, หมวดหมู่..."
                className="w-full pl-4 pr-24 py-3 text-xs bg-slate-50/80 border border-slate-200/80 rounded-2xl focus:outline-hidden focus:border-emerald-500 focus:bg-white transition-all text-slate-800"
              />
              <button
                type="button"
                className="absolute right-1.5 px-4 py-2 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                ค้นหา
              </button>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">หนังสือแนะนำประจำสัปดาห์</h3>
              <p className="text-xs text-slate-400">คัดสรรโดยทีมงานสิบโท Keroro</p>
            </div>
            <Link href="/info" className="text-xs font-bold text-emerald-600 hover:underline">
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="group bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex items-center gap-4"
              >
                <div className={`w-20 h-20 shrink-0 rounded-2xl p-2 border flex items-center justify-center ${book.color}`}>
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${book.color}`}>
                      {book.tag}
                    </span>
                    <span className="text-[11px] font-bold text-amber-500 flex items-center gap-1">
                      ★ {book.rating}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-600 transition-colors">
                    {book.title}
                  </h4>

                  <p className="text-[11px] text-slate-400">
                    {book.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}