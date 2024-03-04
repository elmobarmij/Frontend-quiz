export function QuizInfo() {
  return (
    <div>
      <div className="mb-10 md:mb-20">
        <p className="text-[4rem] md:text-[6.2rem] font-light dark:text-white text-slate-600 leading-none">
          Welcome to the
        </p>
        <strong className="text-[4.2rem] md:text-[6.4rem] dark:text-slate-100 text-slate-700 font-medium leading-none">
          Frontend Quiz!
        </strong>
      </div>
      <p className="text-3xl italic mb-7 md:mb-0 text-slate-500 dark:text-light-bluish">
        Pick a subject to get started.
      </p>
    </div>
  );
}
