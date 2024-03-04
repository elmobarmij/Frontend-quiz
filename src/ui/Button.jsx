function Button({ children, onClick }) {
  return (
    <button
      className="bg-[#a729f5] font-medium text-white p-6 md:p-10 rounded-2xl md:rounded-[2.2rem] lg:font-semibold inline-block text-[1.8rem] md:text-[2.5rem] w-full mt-12 hover:bg-[#a729f571] transition-all mb-10 duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
