export const CTAButton = ({ text }: { text: string }) => {
  return (
    <button className="m-4 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1">
      <span className="block rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-transparent hover:text-white">
        {text}
      </span>
    </button>
  );
};
