import { Link } from "react-router-dom";

export function NotFoundSection() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Lost sparkle</p>
        <h1 className="mt-3 text-7xl font-display">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-navy mt-6 inline-flex">
          Go home
        </Link>
      </div>
    </div>
  );
}
