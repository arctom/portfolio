import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center">
        <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
          404
        </p>
        <h1 className="text-3xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-white/50 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-surface hover:bg-white/90 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
