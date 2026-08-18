import Form from "@/components/Form";
import { prisma } from "@/lib/prisma";

const BookPage = async () => {
  const books = await prisma.book.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-10">
        
        {/* Component ฟอร์ม */}
        <Form />

        {/* ส่วนแสดงรายการหนังสือ */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
              รายการหนังสือ
            </h1>
            <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
              {books.length} เล่ม
            </span>
          </div>

          {books.length === 0 ? (
            <div className="text-center py-12 text-gray-400 text-sm">
              ยังไม่มีหนังสือในระบบ
            </div>
          ) : (
            <ul className="divide-y divide-gray-50">
              {books.map((book) => (
                <li key={book.id} className="py-4 flex items-center justify-between first:pt-0 last:pb-0 hover:bg-gray-50/50 px-2 rounded-lg transition-colors">
                  <span className="font-medium text-gray-800 text-sm">
                    {book.title}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
                    ฿{book.price.toLocaleString("th-TH")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default BookPage;