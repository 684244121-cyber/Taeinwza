import Link from "next/link";

// ฐานข้อมูลจำลองตาม ID
const teamData: Record<
  string,
  { name: string; role: string; desc: string; badge: string }
> = {
  "1": {
    name: "Ben Tennyson",
    role: "Omnitrix User / Hero",
    desc: "เด็กหนุ่มผู้ได้รับ Omnitrix และใช้พลังของเหล่าเอเลี่ยนเพื่อปกป้องโลกและช่วยเหลือผู้คน",
    badge: "bg-lime-400/10 text-lime-400 border-lime-400/30",
  },

  "2": {
    name: "Gwen Tennyson",
    role: "Anodite / Magic User",
    desc: "ลูกพี่ลูกน้องของ Ben ผู้มีพลังเวทมนตร์และความสามารถในการควบคุมพลังงานจาก Anodite",
    badge: "bg-green-400/10 text-green-400 border-green-400/30",
  },

  "3": {
    name: "Kevin Levin",
    role: "Alien Hybrid / Combat",
    desc: "นักสู้ผู้สามารถดูดซับพลังงานและคุณสมบัติของสิ่งต่าง ๆ พร้อมร่วมทีมกับ Ben ในการต่อสู้",
    badge: "bg-emerald-400/10 text-emerald-400 border-emerald-400/30",
  },

  "4": {
    name: "Max Tennyson",
    role: "Plumber / Commander",
    desc: "อดีต Plumber ผู้มีประสบการณ์ต่อสู้กับภัยคุกคามจากต่างดาว และเป็นคุณปู่ของ Ben และ Gwen",
    badge: "bg-lime-300/10 text-lime-300 border-lime-300/30",
  },
};

const InfoParamPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  // ค้นหาข้อมูลตาม ID
  const member = teamData[id] || {
    name: `Member ID: ${id}`,
    role: "General Member",
    desc: "ไม่พบข้อมูลตัวละครในฐานข้อมูล Omnitrix",
    badge: "bg-gray-800 text-gray-400 border-gray-700",
  };

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-6 flex items-center justify-center">

      <div className="max-w-md w-full bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_35px_rgba(163,230,53,0.12)] space-y-6 text-center">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">

          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
            Omnitrix Database
          </span>

          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 bg-lime-400/10 text-lime-400 border border-lime-400/20 rounded-full">
            ID: {id}
          </span>

        </div>

        {/* Omnitrix */}
        <div className="relative w-32 h-32 mx-auto flex items-center justify-center">

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-800 border-t-lime-400 border-b-lime-400 animate-spin shadow-[0_0_25px_rgba(163,230,53,0.3)]" />

          {/* Outer Body */}
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-b from-gray-800 to-black border-4 border-gray-600 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">

            {/* Green Ring */}
            <div className="w-22 h-22 rounded-full border-4 border-lime-400 bg-black flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.5)]">

              {/* Green Core */}
              <div className="w-14 h-14 rounded-full bg-lime-400 border-4 border-gray-900 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.8)]">

                {/* Center */}
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">

                  <span className="text-[8px] font-black text-lime-400">
                    10
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Character Info */}
        <div className="space-y-2">

          <span
            className={`text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-md border ${member.badge}`}
          >
            {member.role}
          </span>

          <h1 className="text-xl font-black text-white tracking-tight pt-1">
            {member.name}
          </h1>

          <p className="text-xs text-gray-500 leading-relaxed pt-1">
            {member.desc}
          </p>

        </div>

        {/* DNA Status */}
        <div className="bg-black border border-gray-800 rounded-2xl p-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <div className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Alien DNA
              </span>

            </div>

            <span className="text-[10px] font-black text-lime-400">
              VERIFIED
            </span>

          </div>

        </div>

        {/* Back Button */}
        <div className="pt-2">

          <Link
            href="/info"
            className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-lime-400 hover:bg-lime-300 text-black text-xs font-black rounded-xl transition-all shadow-[0_0_15px_rgba(163,230,53,0.2)] hover:shadow-[0_0_25px_rgba(163,230,53,0.4)] active:scale-95"
          >
            ← กลับหน้า Info
          </Link>

        </div>

      </div>

    </div>
  );
};

export default InfoParamPage;