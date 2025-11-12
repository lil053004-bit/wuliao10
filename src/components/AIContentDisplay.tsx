export default function AIContentDisplay() {
  return (
    <div className="relative mx-4 my-8">
      <div className="relative bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 p-6 sm:p-8">
          <div className="space-y-2">
            <div className="bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-blue-400/30">
              <span className="text-white font-bold text-sm">テクニカル分析</span>
            </div>

            <div className="bg-gradient-to-r from-green-600/80 to-emerald-600/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-green-400/30">
              <span className="text-white font-bold text-sm">株価分析</span>
            </div>

            <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-purple-400/30">
              <span className="text-white font-bold text-sm">過去シミュレーション</span>
            </div>

            <div className="bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-orange-400/30">
              <span className="text-white font-bold text-sm">財務分析</span>
            </div>

            <div className="bg-gradient-to-r from-indigo-600/80 to-violet-600/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-indigo-400/30">
              <span className="text-white font-bold text-sm">チャート分析</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/assets/AI.png"
              alt="AI Analysis"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
