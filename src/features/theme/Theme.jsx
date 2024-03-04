import { useDarkMode } from "../../contexts/DarkModeContext";
import iconMoonLight from "../../assets/iconMoonLight.svg";
import iconSunLight from "../../assets/iconSunLight.svg";
import iconMoonDark from "../../assets/iconMoonDark.svg";
import iconSunDark from "../../assets/iconSunDark.svg";

function Theme() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleSwitch() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className="flex items-center gap-5">
      <img src={isDarkMode ? iconSunDark : iconSunLight} alt="Icon Sun" />
      <label className="switch">
        <input type="checkbox" onClick={handleSwitch} />
        <span className="slider"></span>
      </label>
      <img src={isDarkMode ? iconMoonDark : iconMoonLight} alt="Icon Moon" />
    </div>
  );
}

export default Theme;
