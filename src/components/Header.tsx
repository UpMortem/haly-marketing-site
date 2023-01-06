export const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 px-4 text-gray-600">
      <div className="flex items-center">
        <a href="#">
          <h1 className="text-2xl font-bold">Haly</h1>
        </a>
      </div>
      <nav className="flex justify-center">
        <a href="#" className="px-4 text-lg font-semibold leading-tight hover:text-gray-800 transition duration-150 ease-in-out">
          Home
        </a>
        <a href="#" className="px-4 text-lg font-semibold leading-tight hover:text-gray-800 transition duration-150 ease-in-out">
          Use Cases
        </a>
        <a href="#" className="text-lg font-semibold leading-tight hover:text-gray-800 transition duration-150 ease-in-out">
          Blog
        </a>
      </nav>
    </header>
  );
};
