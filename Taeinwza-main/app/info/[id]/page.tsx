import Link from "next/link";

// ฐานข้อมูลจำลองตาม ID
const teamData: Record<
  string,
  { name: string; role: string; desc: string; img: string; badge: string }
> = {
  "1": {
    name: "Keroro",
    role: "สิบโท / Chief Commander",
    desc: "ผู้นำขบวนการ วางโครงสร้างและแนวทางคลังหนังสือประจำวัน ชื่นชอบการต่อพลาสติกโมเดลกันพลาเป็นชีวิตจิตใจ",
    img: "/image/keroro.png",
    badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  "2": {
    name: "Tamama",
    role: "พลทหาร / Category Manager",
    desc: "คัดสรรอนิเมะน่าอ่าน จัดหมวดหมู่ และดูแลมินิฟีเจอร์ มีสองบุคลิกที่พร้อมเปลี่ยนเป็นโหมดโหดได้ทุกเมื่อ",
    img: "/image/tamama.png",
    badge: "bg-amber-50 text-amber-600 border-amber-100",
  },
  "3": {
    name: "Giroro",
    role: "สิบเอก / System Security",
    desc: "ดูแลความปลอดภัย ป้องกันบั๊ก และดูแลระบบฐานข้อมูล ยอดนักรบสายลุยผู้ยึดมั่นในวินัยทหาร",
    img: "/image/giroro.png",
    badge: "bg-rose-50 text-rose-600 border-rose-100",
  },
  "4": {
    name: "Kururu",
    role: "จ่าสิบตรี / Lead Developer",
    desc: "สถาปนิก Next.js 15 ออกแบบ UI/UX และระบบเซิร์ฟเวอร์ อัจฉริยะด้านไอทีพร้อมเสียงหัวเราะอันเป็นเอกลักษณ์",
    img: "/image/kururu.png",
    badge: "bg-yellow-50 text-yellow-600 border-yellow-100",
  },
};

const InfoParamPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  
  // ค้นหาข้อมูลตาม id ถ้าไม่พบจะใช้ข้อมูล Default
  const member = teamData[id] || {
    name: `Member ID: ${id}`,
    role: "General Member",
    desc: "ข้อมูลรายละเอียดของรหัสรายการนี้ดึงมาจากระบบ Dynamic Route ของ Next.js 15",
    img: "/image/keroro.png",
    badge: "bg-slate-50 text-slate-600 border-slate-100",
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6 text-center">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            System Detail
          </span>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full">
            ID: {id}
          </span>
        </div>

        {/* Profile Image */}
        <div className="w-28 h-28 mx-auto overflow-hidden rounded-2xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-center">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info Detail */}
        <div className="space-y-2">
          <span className={`text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-md border ${member.badge}`}>
            {member.role}
          </span>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight pt-1">
            {member.name}
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed pt-1">
            {member.desc}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/info"
            className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-all shadow-xs active:scale-95"
          >
            ← กลับหน้า Info
          </Link>
        </div>

      </div>
    </div>
  );
};

export default InfoParamPage;