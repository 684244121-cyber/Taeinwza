export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm text-center space-y-6">
        
        {/* Avatar / Icon Loading Area */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          {/* Spinner Ring */}
          <div className="absolute inset-0 border-4 border-slate-100 border-t-emerald-500 rounded-full animate-spin"></div>
          
          {/* Mascot Image Inside */}
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-50 p-1 flex items-center justify-center">
            <img
              src="/image/keroro.png"
              alt="Loading..."
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 inline-block">
            System Loading
          </span>
          <h2 className="text-sm font-bold text-slate-800 pt-1">
            กำลังโหลดข้อมูลระบบ...
          </h2>
          <p className="text-xs text-slate-400">
            โปรดรอสักครู่ ระบบกำลังเชื่อมต่อข้อมูลจากเซิร์ฟเวอร์
          </p>
        </div>

        {/* Shimmer Bar Effect */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-1/2 rounded-full animate-[shimmer_1.5s_infinite] translate-x-[-100%] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        </div>

      </div>
    </div>
  );
}