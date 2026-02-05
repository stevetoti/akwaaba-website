import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-extrabold text-deep-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-deep-blue mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="btn-outline-dark">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
