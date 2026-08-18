'use client'

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 antialiased">
        <div className="max-w-md w-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6 text-center">
          
          {/* Status Badge & Icon */}
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block">
              Global System Error
            </span>
            <div className="w-20 h-20 mx-auto overflow-hidden rounded-2xl bg-rose-50 p-3 border border-rose-100 flex items-center justify-center">
              <span className="text-3xl">💥</span>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-2">
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
              เกิดข้อผิดพลาดในระบบ
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              ขออภัยในความไม่สะดวก ระบบพบข้อผิดพลาดที่ไม่คาดคิด กรุณาลองใหม่อีกครั้ง
            </p>
            {error.digest && (
              <p className="text-[10px] text-slate-300 font-mono pt-1">
                Digest Code: {error.digest}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => reset()}
              className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              🔄 ลองใหม่อีกครั้ง
            </button>
            <Link
              href="/"
              className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all active:scale-95 text-center"
            >
              🏠 กลับหน้าหลัก
            </Link>
          </div>

        </div>
      </body>
    </html>
  );
}