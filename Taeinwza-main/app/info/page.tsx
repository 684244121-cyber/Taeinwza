import Link from "next/link";

const InfoPage = async () => {
  // จำลองการดึงข้อมูลจาก Server / Database
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const teamMembers = [
    {
      id: "1",
      name: "Ben Tennyson",
      role: "Omnitrix User / Hero",
      badge:
        "bg-lime-400/10 text-lime-400 border-lime-400/30",
    },
    {
      id: "2",
      name: "Gwen Tennyson",
      role: "Anodite / Magic User",
      badge:
        "bg-green-400/10 text-green-400 border-green-400/30",
    },
    {
      id: "3",
      name: "Kevin Levin",
      role: "Alien Hybrid / Combat",
      badge:
        "bg-emerald-400/10 text-emerald-400 border-emerald-400/30",
    },
    {
      id: "4",
      name: "Max Tennyson",
      role: "Plumber / Commander",
      badge:
        "bg-lime-300/10 text-lime-300 border-lime-300/30",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-6 text-white">

      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header Section */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(163,230,53,0.08)] space-y-3">

          <span className="text-[11px] font-bold uppercase tracking-wider text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/30">
            Omnitrix System Overview
          </span>

          <h1 className="text-2xl font-black text-white tracking-tight pt-1">
            เกี่ยวกับระบบ{" "}
            <span className="text-lime-400">
              BEN 10
            </span>
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            ฐานข้อมูลจักรวาล Ben 10
            รวมข้อมูลของ Ben Tennyson, Omnitrix,
            เหล่าเอเลี่ยน และทีมงานที่ร่วมต่อสู้เพื่อปกป้องโลก
          </p>

        </div>

        {/* Team Members */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(163,230,53,0.06)] space-y-6">

          <div className="border-b border-gray-800 pb-4">

            <h2 className="text-sm font-bold text-white">
              PLUMBERS DATABASE
            </h2>

            <p className="text-xs text-gray-500 mt-0.5">
              คลิกที่ตัวละครเพื่อดูรายละเอียดข้อมูลเชิงลึก
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {teamMembers.map((member) => (

              <Link
                key={member.id}
                href={`/info/${member.id}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-800 bg-black hover:bg-[#151515] hover:border-lime-400/40 transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(163,230,53,0.1)] cursor-pointer"
              >

                {/* Omnitrix Avatar */}
                <div
                  className={`w-14 h-14 shrink-0 rounded-full p-2 border-2 flex items-center justify-center ${member.badge}`}
                >

                  <div className="w-full h-full rounded-full bg-black border-2 border-current flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">

                    <div className="w-6 h-6 rounded-full bg-lime-400 border-2 border-gray-900 flex items-center justify-center">

                      <div className="w-2.5 h-2.5 rounded-full bg-black" />

                    </div>

                  </div>

                </div>

                <div className="space-y-1">

                  <span
                    className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-md border ${member.badge}`}
                  >
                    ID: {member.id}
                  </span>

                  <h3 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors pt-0.5">
                    {member.name}
                  </h3>

                  <p className="text-[11px] text-gray-500 font-medium">
                    {member.role}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

        {/* System Status */}
        <div className="bg-[#101010] border border-lime-400/20 rounded-3xl p-6 shadow-[0_0_25px_rgba(163,230,53,0.06)]">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">

                <div className="w-4 h-4 rounded-full bg-lime-400 animate-pulse shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

              </div>

              <div>

                <h3 className="text-xs font-bold text-white">
                  OMNITRIX STATUS
                </h3>

                <p className="text-[10px] text-gray-600">
                  Alien database online
                </p>

              </div>

            </div>

            <span className="text-[10px] font-black text-lime-400 uppercase tracking-wider">
              ONLINE
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default InfoPage;