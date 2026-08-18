import Link from "next/link";

const InfoPage = async () => {
  // หน่วงเวลา 2 วินาที เพื่อจำลองการดึงข้อมูลจาก Server / Database
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const teamMembers = [
    { id: "1", name: "Keroro", role: "สิบโท / Chief Commander", img: "/image/keroro.png", badge: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "2", name: "Tamama", role: "พลทหาร / Category Manager", img: "/image/tamama.png", badge: "bg-amber-50 text-amber-600 border-amber-100" },
    { id: "3", name: "Giroro", role: "สิบเอก / System Security", img: "/image/giroro.png", badge: "bg-rose-50 text-rose-600 border-rose-100" },
    { id: "4", name: "Kururu", role: "จ่าสิบตรี / Lead Developer", img: "/image/kururu.png", badge: "bg-yellow-50 text-yellow-600 border-yellow-100" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            System Overview & Info
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight pt-1">
            เกี่ยวกับระบบ keroruayBook
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            ระบบคลังข้อมูลหนังสือและอนิเมะที่ถูกพัฒนาขึ้นเพื่อมอบประสบการณ์การอ่านที่เรียบง่าย สบายตา และมีประสิทธิภาพสูงสุด
          </p>
        </div>

        {/* Team Members Grid (พร้อม ลิงก์คลิกไปหน้า /info/[id]) */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-sm font-bold text-slate-900">ทีมงานเบื้องหลัง (Keroro Platoon)</h2>
            <p className="text-xs text-slate-400 mt-0.5">คลิกที่การ์ดเพื่อดูรายละเอียดข้อมูลเชิงลึกรายบุคคล</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/info/${member.id}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-emerald-200 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl p-2 border flex items-center justify-center ${member.badge}`}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1">
                  <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-md border ${member.badge}`}>
                    ID: {member.id}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors pt-0.5">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {member.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoPage;
