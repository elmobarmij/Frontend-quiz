import iconError from "../assets/iconError.svg";

function Warning() {
  return (
    <p className="flex items-center justify-center gap-8">
      <img src={iconError} alt="Icon Error" />
      <span className="text-[#EE5454] font-sm text-3xl md:text-4xl">
        Please select an answer
      </span>
    </p>
  );
}

export default Warning;
