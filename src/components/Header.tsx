export const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 text-gray-600">
      <div className="flex items-center">
        <h1 className="ml-2 text-2xl font-bold">Haly</h1>
      </div>
      <nav className="flex justify-center">
        <a href="#" className="px-4 text-xl font-semibold leading-tight">
          Home
        </a>
        <a href="#" className="px-4 text-xl font-semibold leading-tight">
          Use Cases
        </a>
        <a href="#" className="px-4 text-xl font-semibold leading-tight">
          Blog
        </a>
      </nav>
    </header>
  );
};
