function SummaryInfo() {
  return (
    <div className="mb-10 md:mb-20">
      <p className="text-[4rem] md:text-[4.8rem] lg:text-[6.2rem] font-light text-slate-800 leading-none dark:text-slate-100">
        Quiz completed
      </p>
      <strong className="text-[4rem] md:text-[4.8rem] lg:text-[6.2rem] text-slate-800 font-medium leading-none dark:text-white">
        You scored...
      </strong>
    </div>
  );
}

export default SummaryInfo;
