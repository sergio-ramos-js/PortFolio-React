import  { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    const newLang = isEnglish ? "es" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="lang">
    <span id="es" className="sp mr-2">
      Es
    </span>
    <input
      id="lang-check" // Atributo id
      name="language" // Atributo name
      className="check"
      type="checkbox"
      checked={isEnglish}
      onChange={toggleLanguage}
    />
    <span id="en" className="en ml-3">
      En
    </span>
  </div>
  
  );
};

export default LanguageSwitcher;
