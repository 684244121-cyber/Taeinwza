export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6">

      <div className="max-w-sm w-full bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(163,230,53,0.12)] text-center space-y-6">

        {/* OMNITRIX */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">

          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-800 border-t-lime-400 border-b-lime-400 animate-spin shadow-[0_0_25px_rgba(163,230,53,0.3)]" />

          {/* Outer Omnitrix body */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-gray-800 to-black border-4 border-gray-600 shadow-[inset_0_0_15px_rgba(0,0,0,0.9),0_0_20px_rgba(163,230,53,0.25)] flex items-center justify-center">

            {/* Green outer ring */}
            <div className="w-20 h-20 rounded-full border-4 border-lime-400 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.6)]">

              {/* Omnitrix center */}
              <div className="relative w-14 h-14 rounded-full bg-lime-400 border-4 border-gray-900 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.8)]">

                {/* Black center */}
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">

                  {/* Alien symbol */}
                  <div className="relative w-5 h-5">

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 bg-lime-400 rounded-sm" />

                    <div className="absolute left-0 top-2 w-2 h-2 bg-lime-400 rounded-sm rotate-45" />

                    <div className="absolute right-0 top-2 w-2 h-2 bg-lime-400 rounded-sm -rotate-45" />

                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-2 h-2 bg-lime-400 rounded-sm" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SYSTEM STATUS */}
        <div className="space-y-2">

          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/30 inline-block">
            Omnitrix System
          </span>

          <h2 className="text-sm font-bold text-white pt-1">
            กำลังเปิดใช้งาน Omnitrix...
          </h2>

          <p className="text-xs text-gray-500">
            กรุณารอสักครู่ ระบบกำลังเชื่อมต่อฐานข้อมูลเอเลี่ยน
          </p>

        </div>

        {/* LOADING BAR */}
        <div className="w-full bg-black border border-gray-800 h-2 rounded-full overflow-hidden">

          <div className="h-full w-1/2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

        </div>

        {/* STATUS */}
        <div className="flex items-center justify-center gap-2">

          <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.9)]" />

          <span className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.15em]">
            Searching Alien DNA...
          </span>

        </div>

      </div>

    </div>
  );
}