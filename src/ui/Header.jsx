function Header({ children }) {
  return (
    <header className="flex items-center justify-between mt-10 mb-[5rem] lg:mb-40">
      {children}
    </header>
  );
}

export default Header;
