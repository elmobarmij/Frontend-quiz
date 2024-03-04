import { useDarkMode } from "../contexts/DarkModeContext";
import patternBackgroundDesktopLight from "../assets/patternBackgroundDesktopLight.svg";
import patternBackgroundDesktopDark from "../assets/patternBackgroundDesktopDark.svg";
import patternBackgroundTabletLight from "../assets/patternBackgroundTabletLight.svg";
import patternBackgroundTabletDark from "../assets/patternBackgroundTabletDark.svg";
import patternBackgroundMobileLight from "../assets/patternBackgroundMobileLight.svg";
import patternBackgroundMobileDark from "../assets/patternBackgroundMobileDark.svg";

function Container({ children }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      <img
        className="hidden lg:block absolute z-1"
        src={
          isDarkMode
            ? patternBackgroundDesktopDark
            : patternBackgroundDesktopLight
        }
        alt="pattern Background"
      />
      <img
        className="hidden md:block lg:hidden absolute z-1"
        src={
          isDarkMode
            ? patternBackgroundTabletDark
            : patternBackgroundTabletLight
        }
        alt="pattern Background"
      />
      <img
        className="block md:hidden absolute z-1"
        src={
          isDarkMode
            ? patternBackgroundMobileDark
            : patternBackgroundMobileLight
        }
        alt="pattern Background"
      />
      <div className="inset-0 w-full absolute z-10 min-h-screen lg:max-w-[130rem] mx-auto p-10 md:p-20 lg:p-25 max-w-screen-2xl">
        {children}
      </div>
    </div>
  );
}

export default Container;
