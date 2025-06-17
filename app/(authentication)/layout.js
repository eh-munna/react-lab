export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-6">
      <h2 className="my-12 text-3xl">🔐 Auth Section</h2>

      {children}
    </div>
  );
}
