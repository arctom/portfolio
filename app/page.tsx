import dynamic from "next/dynamic";

const ClientPage = dynamic(() => import("./ClientPage"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  ),
});

export default function Page() {
  return <ClientPage />;
}
