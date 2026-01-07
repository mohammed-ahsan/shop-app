export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
        <p className="text-brand-text-gray font-century-gothic text-lg">Loading...</p>
      </div>
    </div>
  );
}
