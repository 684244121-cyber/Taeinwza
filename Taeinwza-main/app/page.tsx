import Link from "next/link";

export default function Home() {
  const featuredBooks = [
    {
      id: "1",
      title: "Ben 10: Classic Series",
      category: "Action / Sci-Fi",
      rating: "4.9",
      img: "/image/ben10.jpg",
      tag: "ยอดนิยม",
      color: "bg-lime-400/10 text-lime-400 border-lime-400/30",
    },
    {
      id: "2",
      title: "Alien Force",
      category: "Action / Adventure",
      rating: "4.8",
      img: "/image/alienforce.jfif",
      tag: "มาใหม่",
      color: "bg-green-400/10 text-green-400 border-green-400/30",
    },
    {
      id: "3",
      title: "Ultimate Alien",
      category: "Sci-Fi / Action",
      rating: "4.9",
      img: "/image/ultimatealien.jpg",
      tag: "แนะนำ",
      color: "bg-emerald-400/10 text-emerald-400 border-emerald-400/30",
    },
    {
      id: "4",
      title: "Omniverse",
      category: "Adventure / Comedy",
      rating: "4.7",
      img: "/image/omniverse.jfif",
      tag: "ฮิตฮอต",
      color: "bg-lime-300/10 text-lime-300 border-lime-300/30",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-6 antialiased text-white">

      <div className="max-w-4xl mx-auto space-y-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between bg-[#101010] border border-lime-400/20 rounded-2xl px-6 py-4 shadow-[0_0_25px_rgba(132,204,22,0.08)]">

          <div className="flex items-center gap-3">

            {/* OMNITRIX LOGO */}
            <div className="w-11 h-11 rounded-full bg-black border-2 border-lime-400 flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.5)]">

              <div className="w-7 h-7 rounded-full bg-lime-400 border-4 border-gray-900 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-black flex items-center justify-center">
                  <span className="text-[7px] font-black text-lime-400">
                    10
                  </span>
                </div>
              </div>

            </div>

            <div>
              <h1 className="text-sm font-black text-white tracking-tight">
                BEN <span className="text-lime-400">10</span>
              </h1>

              <p className="text-[11px] text-gray-500">
                Omnitrix Library
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2">

            <Link
              href="/info"
              className="px-3.5 py-2 text-xs font-semibold text-gray-400 hover:text-lime-400 transition-colors"
            >
              Info
            </Link>

            <Link
              href="/login"
              className="px-4 py-2 text-xs font-bold bg-lime-400 hover:bg-lime-300 text-black rounded-xl transition-all shadow-[0_0_12px_rgba(163,230,53,0.25)]"
            >
              เข้าสู่ระบบ
            </Link>

          </div>

        </div>

        {/* HERO SECTION */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 sm:p-10 shadow-[0_0_30px_rgba(132,204,22,0.06)] space-y-6 text-center">

          <div className="inline-block">

            <span className="text-[11px] font-bold uppercase tracking-wider text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/30">
              Welcome to Omnitrix Library
            </span>

          </div>

          <div className="space-y-3 max-w-lg mx-auto">

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">

              ค้นพบจักรวาลของ{" "}
              <span className="text-lime-400">
                BEN 10
              </span>

              <br />

              <span className="text-lime-400">
                และเหล่าเอเลี่ยนสุดเท่
              </span>

            </h2>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              รวมเรื่องราวของ Ben Tennyson, Omnitrix และเหล่าเอเลี่ยนจากทั่วจักรวาล
              พร้อมให้คุณสำรวจได้ตลอด 24 ชั่วโมง
            </p>

          </div>

          {/* SEARCH */}
          <div className="max-w-md mx-auto pt-2">

            <div className="relative flex items-center">

              <input
                type="text"
                placeholder="ค้นหา Ben 10, Alien, Omnitrix..."
                className="w-full pl-4 pr-24 py-3 text-xs bg-black border border-gray-800 rounded-2xl focus:outline-none focus:border-lime-400 focus:bg-[#080808] transition-all text-white placeholder:text-gray-600"
              />

              <button
                type="button"
                className="absolute right-1.5 px-4 py-2 bg-lime-400 hover:bg-lime-300 text-black text-xs font-black rounded-xl transition-colors cursor-pointer"
              >
                ค้นหา
              </button>

            </div>

          </div>

        </div>

        {/* FEATURED */}
        <div className="space-y-4">

          <div className="flex items-center justify-between px-2">

            <div>

              <h3 className="text-base font-black text-white">
                BEN 10 COLLECTION
              </h3>

              <p className="text-xs text-gray-500">
                รวมเรื่องราวและเหล่าเอเลี่ยนยอดนิยม
              </p>

            </div>

            <Link
              href="/info"
              className="text-xs font-bold text-lime-400 hover:text-lime-300 hover:underline"
            >
              ดูทั้งหมด →
            </Link>

          </div>

          {/* BOOK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {featuredBooks.map((book) => (

              <div
                key={book.id}
                className="group bg-[#101010] border border-gray-800 rounded-3xl p-5 shadow-sm hover:shadow-[0_0_25px_rgba(163,230,53,0.12)] hover:border-lime-400/40 transition-all duration-300 flex items-center gap-4"
              >

                <div
                  className={`w-20 h-20 shrink-0 rounded-2xl p-2 border flex items-center justify-center ${book.color}`}
                >

                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />

                </div>

                <div className="space-y-1.5 flex-1 min-w-0">

                  <div className="flex items-center justify-between gap-2">

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${book.color}`}
                    >
                      {book.tag}
                    </span>

                    <span className="text-[11px] font-bold text-lime-400 flex items-center gap-1">
                      ★ {book.rating}
                    </span>

                  </div>

                  <h4 className="text-xs font-bold text-white truncate group-hover:text-lime-400 transition-colors">
                    {book.title}
                  </h4>

                  <p className="text-[11px] text-gray-500">
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