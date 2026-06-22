import { useTranslation } from "react-i18next";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState, useEffect } from "react";

function Port() {
  const { t } = useTranslation();
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [isSlider2Visible, setIsSlider2Visible] = useState(false);

  const toggleSlider = () => {
    setIsSliderVisible(!isSliderVisible);
  };
  const toggleSlider2 = () => {
    setIsSlider2Visible(!isSlider2Visible);
  };
  // Close slider when ESC is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isSliderVisible) {
        setIsSliderVisible(false);
      } else if (event.key === "Escape" && isSlider2Visible) {
        setIsSlider2Visible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on unmount or when slider visibility changes
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSliderVisible, isSlider2Visible]);
  
  const images = [
    { original: "/images/libro_slider1.png", thumbnail: "/images/libro_slider1.png" },
    { original: "/images/libro_slider2.1.png", thumbnail: "/images/libro_slider2.1.png" },
    { original: "/images/libro_slider2.2.png", thumbnail: "/images/libro_slider2.2.png" },
    { original: "/images/libro_slider3.png", thumbnail: "/images/libro_slider3.png" },
    { original: "/images/libro_slider4.png", thumbnail: "/images/libro_slider4.png" },
    { original: "/images/libro_slider5.png", thumbnail: "/images/libro_slider5.png" },
    { original: "/images/libro_slider6.1.png", thumbnail: "/images/libro_slider6.1.png" },
    { original: "/images/libro_slider6.2.png", thumbnail: "/images/libro_slider6.2.png" },
  ];
  const images2 = [
    { original: "/images/turnero1.png", thumbnail: "/images/turnero1.png" },
    { original: "/images/turnero2.png", thumbnail: "/images/turnero2.png" },
    { original: "/images/turnero3.png", thumbnail: "/images/turnero3.png" },
    { original: "/images/turnero4.png", thumbnail: "/images/turnero4.png" },
    { original: "/images/turnero5.png", thumbnail: "/images/turnero5.png" },
    { original: "/images/turnero6.png", thumbnail: "/images/turnero6.png" },
    { original: "/images/turnero7.png", thumbnail: "/images/turnero7.png" },
    { original: "/images/turnero8.png", thumbnail: "/images/turnero8.png" },
  ];
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        {t("latest")} <span>{t("project")}</span>
      </h2>
      <div className="portfolio-container">
        <div className="cursor-pointer " id="slot1" onClick={toggleSlider}>
          <div className="portfolio-box">
            <img src="images/libro3.png" alt="" />
            <p>{t("slot1")}</p>
          </div>
        </div>
        <a id="slot2" href="#" target="_blank">
          <div className="portfolio-box">
            <img src="images/upgrade3.png" alt="" />
            <p>{t("slot2")}</p>
          </div>
        </a>
        <div className="cursor-pointer" id="slot3" onClick={toggleSlider2}>
          <div className="portfolio-box">
            <img src="images/cap3.png" alt="" />
            <p>{t("slot3")}</p>
          </div>
        </div>
        <a id="slot4" href="#">
          <div className="portfolio-box">
            <img src="images/cap2copy.png" alt="" />
            <p>{t("slot4")}</p>
          </div>
        </a>
        <a
          id="slot5"
          href="https://thepathintoabysscom.netlify.app/pages/galeria"
          target="_blank"
        >
          <div className="portfolio-box">
            <img src="images/imagesPath.png" alt="" />
            <p>{t("slot5")}</p>
          </div>
        </a>
        <a id="slot6" href="#" target="_blank">
          <div className="portfolio-box">
            <img src="images/oldportfolio.png" alt="" />
            <p>{t("slot6")}</p>
          </div>
        </a>
      </div>
      {/* SLIDER 1 */}
      <div
        className={`w-full h-screen flex flex-col justify-center items-center fixed bg-black top-0 left-0 z-50 ${
          isSliderVisible ? "block" : "hidden"
        }`}
      >
        <div className="mt-14 lg:w-[60vw] md:w-[90vw] w-[95vw] h-auto text-[#00abf0] text-2xl text-center">
          <ImageGallery
          additionalClass="aver"
            items={images}
            autoPlay={false}
            showPlayButton={false}
            showFullscreenButton={false}
            renderLeftNav={(onClick, disabled) => (
              <button
                className="custom-left-nav"
                onClick={onClick}
                disabled={disabled}
                style={{
                  fontSize: "50px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#00abf0",
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  zIndex: "1000",
                  fontWeight: "900",
                }}
              >
                &lt;
              </button>
            )}
            renderRightNav={(onClick, disabled) => (
              <button
                className="custom-right-nav"
                onClick={onClick}
                disabled={disabled}
                style={{
                  fontSize: "50px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#00abf0",
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  zIndex: "1000",
                  fontWeight: "900",
                }}
              >
                &gt;
              </button>
            )}
          />
          {/* ENLACE */}
          <span>-&gt; </span>
          <a
            className="underline mx-auto pt-4 text-4xl"
            href="http://librodeguardia.com/login/"
            target="_blank"
          >
            http://librodeguardia.com/login/
          </a>
        </div>
        {/* BOTON CERRAR */}
        <button
          onClick={toggleSlider}
          className=" text-white bg-red-600 rounded-md px-3 pt-2 text-xl"
        >
          ✕
        </button>
      </div>
      {/* SLIDER 2 */}
      <div
        className={`w-full h-screen flex flex-col justify-center items-center fixed bg-black top-0 left-0 z-50 ${
          isSlider2Visible ? "block" : "hidden"
        }`}
      >
        <div className="mt-14 lg:w-[60vw] md:w-[90vw] w-[95vw] h-auto text-[#00abf0] text-2xl text-center">
          <ImageGallery
            items={images2}
            additionalClass="aver"
            autoPlay={false}
            showPlayButton={false}
            showFullscreenButton={false}
            renderLeftNav={(onClick, disabled) => (
              <button
                className="custom-left-nav"
                onClick={onClick}
                disabled={disabled}
                style={{
                  fontSize: "50px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#00abf0",
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  zIndex: "1000",
                  fontWeight: "900",
                }}
              >
                &lt;
              </button>
            )}
            renderRightNav={(onClick, disabled) => (
              <button
                className="custom-right-nav"
                onClick={onClick}
                disabled={disabled}
                style={{
                  fontSize: "50px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#00abf0",
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  zIndex: "1000",
                  fontWeight: "900",
                }}
              >
                &gt;
              </button>
            )}
          />
          {/* ENLACE */}
          <span>-&gt; </span>
          <a
            className="underline mx-auto pt-4 text-4xl"
            href="http://librodeguardia.com/login/"
            target="_blank"
          >
            http://librodeguardia.com/login/
          </a>
        </div>
        {/* BOTON CERRAR */}
        <button
          onClick={toggleSlider2}
          className=" text-white bg-red-600 rounded-md px-3 pt-2 text-xl"
        >
          ✕
        </button>
      </div>
    </section>
  );
}

export default Port;
