import React, { useState, useEffect } from "react";
import { FaUniversalAccess, FaWheelchair, FaRedo, FaTimes, FaPlus, FaMinus, FaTextHeight, FaArrowsAlt, FaCompressArrowsAlt, FaPalette, FaAdjust, FaUnderline, FaGripLines, FaPause, FaFont } from 'react-icons/fa';

const AccessibilityButton = ({ Options }) => {
  const initOptions = {
    labels: {
      resetTitle: "איפוס",
      closeTitle: "סגור",
      menuTitle: "תפריט נגישות",
      increaseText: "הגדלת גודל טקסט",
      decreaseText: "הקטנת גודל טקסט",
      increaseLineHeight: "הגדלת גובה שורה",
      decreaseLineHeight: "הקטנת גובה שורה",
      increaseTextSpacing: "הגדלת מרווח טקסט",
      decreaseTextSpacing: "הקטנת מרווח טקסט",
      invertColors: "היפוך צבעים",
      grayHues: "גווני אפור",
      underlineLinks: "הדגשת קישורים",
      bigCursor: "סמן גדול",
      readingGuide: "מדריך קריאה",
      disableAnimations: "ביטול אנימציות",
      readableFont: "גופן קריא",
    },
    modules: {
      increaseText: true,
      decreaseText: true,
      increaseLineHeight: true,
      decreaseLineHeight: true,
      increaseTextSpacing: true,
      decreaseTextSpacing: true,
      invertColors: true,
      grayHues: true,
      underlineLinks: true,
      bigCursor: true,
      readingGuide: true,
      disableAnimations: true,
      readableFont: true,
    },
    style: {
      mode: "light",
      icon: "access",
      shape: "circle",
      position: {
        bottom: { size: 50 },
        left: { size: 20 },
        toRight: true,
      },
    },
  };
  const [options, setOptions] = useState(Options || initOptions);
  const [menuVisible, setMenuVisible] = useState(false);
  const [textSize, setTextSize] = useState(
    parseInt(localStorage.getItem("textSize")) || 16
  );
  const [lineHeight, setLineHeight] = useState(
    parseFloat(localStorage.getItem("lineHeight")) || 1.2
  );
  const [textSpacing, setTextSpacing] = useState(
    parseFloat(localStorage.getItem("textSpacing")) || 0
  );
  const [readingGuideActive, setReadingGuideActive] = useState(
    JSON.parse(localStorage.getItem("readingGuideActive")) || false
  );
  const [invertColorsActive, setInvertColorsActive] = useState(
    JSON.parse(localStorage.getItem("invertColorsActive")) || false
  );
  const [grayHuesActive, setGrayHuesActive] = useState(
    JSON.parse(localStorage.getItem("grayHuesActive")) || false
  );
  const [underlineLinksActive, setUnderlineLinksActive] = useState(
    JSON.parse(localStorage.getItem("underlineLinksActive")) || false
  );
  const [suppressAnimationsActive, setSuppressAnimationsActive] = useState(
    JSON.parse(localStorage.getItem("suppressAnimationsActive")) || false
  );
  const [readableFontActive, setReadableFontActive] = useState(
    JSON.parse(localStorage.getItem("readableFontActive")) || false
  );

  useEffect(() => {
    document.body.style.letterSpacing = `${textSpacing}em`;
  }, []);

  useEffect(() => {
    setOptions((prevOptions) =>
      mergeOptionsWithInitOptions(prevOptions, initOptions)
    );
  }, [Options]);

  useEffect(() => {
    localStorage.setItem("textSize", textSize);
    localStorage.setItem("lineHeight", lineHeight);
    localStorage.setItem("textSpacing", textSpacing);
    localStorage.setItem("readingGuideActive", readingGuideActive);
  }, [textSize, lineHeight, textSpacing, readingGuideActive]);

  useEffect(() => {
    // Update classList based on state
    document.documentElement.classList.toggle(
      "invert-colors",
      invertColorsActive
    );
    document.documentElement.classList.toggle("gray-hues", grayHuesActive);
    document.documentElement.classList.toggle(
      "underline-links",
      underlineLinksActive
    );
    document.documentElement.classList.toggle(
      "suppress-animations",
      suppressAnimationsActive
    );

    // Save settings to localStorage
    localStorage.setItem("invertColorsActive", invertColorsActive);
    localStorage.setItem("grayHuesActive", grayHuesActive);
    localStorage.setItem("underlineLinksActive", underlineLinksActive);
    localStorage.setItem("suppressAnimationsActive", suppressAnimationsActive);
    localStorage.setItem("readableFontActive", readableFontActive);
  }, [
    invertColorsActive,
    grayHuesActive,
    underlineLinksActive,
    suppressAnimationsActive,
    readableFontActive,
  ]);

  useEffect(() => {
    if (readingGuideActive) {
      window.addEventListener("mousemove", updateReadingGuidePosition);
    } else {
      window.removeEventListener("mousemove", updateReadingGuidePosition);
    }
    return () => {
      window.removeEventListener("mousemove", updateReadingGuidePosition);
    };
  }, [readingGuideActive]);

  const mergeOptionsWithInitOptions = (opts, initOpts) => {
    let updatedOptions = { ...opts };
    Object.keys(initOpts).forEach((key) => {
      if (
        initOpts[key] !== null &&
        typeof initOpts[key] === "object" &&
        !Array.isArray(initOpts[key])
      ) {
        updatedOptions[key] = mergeOptionsWithInitOptions(
          opts[key] || {},
          initOpts[key]
        );
      } else if (opts[key] === null || opts[key] === undefined) {
        updatedOptions[key] = initOpts[key];
      }
    });
    return updatedOptions;
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const increaseTextSize = () => {
    setTextSize((prevSize) => {
      const newSize = prevSize + 2;
      document.documentElement.style.fontSize = `${newSize}px`;
      return newSize;
    });
    const elements = document.querySelectorAll(
      ".accessibility-menu, .accessibility-menu *"
    );
    elements.forEach((element) => {
      element.style.fontSize = "16px";
    });
  };

  const decreaseTextSize = () => {
    setTextSize((prevSize) => {
      const newSize = prevSize - 2;
      document.documentElement.style.fontSize = `${newSize}px`;
      return newSize;
    });
    const elements = document.querySelectorAll(
      ".accessibility-menu, .accessibility-menu *"
    );
    elements.forEach((element) => {
      element.style.fontSize = "16px";
    });
  };

  const increaseLineHeight = () => {
    setLineHeight((prevHeight) => {
      const newHeight = prevHeight + 0.2;
      const textElements = filterOutAccessibilityOptions(document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, td, th, span, a, label, input, textarea, button"
      ));
      textElements.forEach((element) => {
        element.style.lineHeight = `${newHeight}`;
      });
      return newHeight;
    });
  };

  const decreaseLineHeight = () => {
    setLineHeight((prevHeight) => {
      const newHeight = prevHeight - 0.2;
      const textElements = filterOutAccessibilityOptions(document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, td, th, span, a, label, input, textarea, button"
      ));
      textElements.forEach((element) => {
        element.style.lineHeight = `${newHeight}`;
      });
      return newHeight;
    });
  };

  const increaseTextSpacing = () => {
    setTextSpacing((prevSpacing) => {
      const newSpacing = prevSpacing + 0.1;
      const textElements = filterOutAccessibilityOptions(document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, td, th, span, a, label, input, textarea, button"
      ));
      textElements.forEach((element) => {
        element.style.letterSpacing = `${newSpacing}em`;
      });
      return newSpacing;
    });
  };

  const decreaseTextSpacing = () => {
    setTextSpacing((prevSpacing) => {
      const newSpacing = prevSpacing - 0.1;
      const textElements = filterOutAccessibilityOptions(document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, td, th, span, a, label, input, textarea, button"
      ));
      textElements.forEach((element) => {
        element.style.letterSpacing = `${newSpacing}em`;
      });
      return newSpacing;
    });
  };


  const invertColors = () => {
    setInvertColorsActive((prevState) => !prevState);
    document.documentElement.classList.toggle("invert-colors");
  };

  const grayHues = () => {
    setGrayHuesActive((prevState) => !prevState);
    document.documentElement.classList.toggle("gray-hues");
  };

  const underlineLinks = () => {
    setUnderlineLinksActive((prevState) => !prevState);
    document.documentElement.classList.toggle("underline-links");
  };

  const suppressAnimations = () => {
    setSuppressAnimationsActive((prevState) => !prevState);
    document.documentElement.classList.toggle("suppress-animations");
  };

  const toggleReadingGuide = () => {
    setReadingGuideActive((prevState) => !prevState);
  };

  const updateReadingGuidePosition = (e) => {
    const guide = document.getElementById("reading-guide");
    if (guide) {
      guide.style.top = `${e.clientY - 10}px`;
    }
  };

  const readableFont = () => {
    setReadableFontActive((prevState) => !prevState);
    const newFontFamily = "Arial";
    const textElements = Array.from(document.querySelectorAll("*")).filter(
      (element) => {
        return element.tagName.toLowerCase() !== "i";
      }
    );

    if (readableFontActive) {
      textElements.forEach((element) => {
        element.style.fontFamily = newFontFamily;
      });
    } else {
      textElements.forEach((element) => {
        element.style.fontFamily = "";
      });
    }
  };

  const resetToDefault = () => {
    setTextSize(16);
    setLineHeight(1.2);
    setReadingGuideActive(false);
    setTextSpacing(0);
    setInvertColorsActive(false);
    setGrayHuesActive(false);
    setUnderlineLinksActive(false);
    document.documentElement.style.fontSize = "16px";
    document
      .querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, td, th, span, a, label, input, textarea, button"
      )
      .forEach((element) => {
        element.style.lineHeight = 1.2;
      });
    document
      .querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, td, th, span, a, label, input, textarea, button"
      )
      .forEach((element) => {
        element.style.letterSpacing = `0em`;
      });
    document.documentElement.classList.remove(
      "invert-colors",
      "gray-hues",
      "underline-links",
      "reading-guide",
      "suppress-animations"
    );
    localStorage.clear();
  };

  function filterOutAccessibilityOptions(elements) {
    return [...elements].filter((el) => {
      let currentElement = el;
      while (currentElement) {
        if (currentElement.classList.contains("accessibility-options")) {
          return false; // Exclude this element
        }
        currentElement = currentElement.parentElement;
      }
      return true;
    });
  }

  const sizeBottom =
    options?.style?.position?.bottom?.size == null
      ? 50
      : options?.style?.position?.bottom?.size;

  const side = options.style.position.toRight ? "right" : "left";

  const cssStyle = `
  .accessibility-menu {
    bottom: ${sizeBottom}px;
    ${side}: ${options.style.position.left.size}px;
    position: fixed;
    z-index: 1000;
    direction: rtl;
  }
  
  .accessibility-options {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      position: fixed;
      padding-right: 5px;
      padding-left: 5px;
      border: #007bff 2px solid;
      border-radius: 25px;
      bottom: ${sizeBottom}px;
      ${side}: ${options.style.position.left.size}px;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      z-index: 999;
      width: 300px;
      padding: 0 5px;
      direction: rtl;
  }
  
  .accessibility-button {
      background-color: #05a6ed;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
  }
  
  .rectangle{
      border-radius: 0px !important;
  }
  
  .dark{
      background-color: #555555 !important; 
      color: #fff !important;
  }
  
  .exit-reset-buttons{
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;
      direction: rtl;
  }
  
  .button-container button {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      font-size: 14px; 
      padding: 0;  
      line-height: 1;  
  }
  
  .button-container button i {
      transition: transform 0.3s ease;
  }
  
  .button-container button:hover i {
      transform: rotate(180deg);
  }
  
  .button-container button:not(:hover) i {
      transform: rotate(0deg);
  }
  
  .accessibility-options-title{
      margin-top: -20px;
      width: 100%;
      text-align: center;
      font-weight: 700;
      font-size: 24px !important;
      direction: rtl;
  }
  
  .accessibility-options.open {
      display: block;
  }
  
  .exit-reset-buttons .button-container{
      width: 60px;
  }
  
  .accessibility-options button {
      margin: 5px;
      width: calc(100% - 10px);
      white-space: normal;
      height: 50px;
      text-align: center; 
      overflow: hidden; 
      white-space: nowrap; 
      text-overflow: clip;
      padding: 0 5px;
      white-space: normal;
      direction: rtl;
  }
  
  .accessibility-options-buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 10px;
      direction: rtl;
  }  
  
  .options-i{
      margin-left: 10px;
  }
  
  .invert-colors {
      filter: invert(1);
      background: black;
  }
    
  .gray-hues {
      filter: grayscale(1);
  }
      
  .underline-links a {
      text-decoration: underline !important;
  }
      
  .suppress-animations * {
      animation: none !important;
      transition: none !important;
  }
  
  .reading-guide-line {
      position: fixed;
      top: 0; /* Adjust this value based on your requirements */
      left: 0;
      right: 0;
      height: 5px;
      background-color: red;
      z-index: 10000;
      direction: rtl;
  }
  `;

  return (
    <div className={`accessibility-menu`} dir="rtl">
      <style>{cssStyle}</style>
      <button
        className={`accessibility-button ${options.style.shape === "rectangle" ? "rectangle" : ""
          }`}
        onClick={toggleMenu}
      >
        {options.style.icon === "wheelchair" ? (
          "🌐" // Wheelchair emoji
        ) : (
          "♿" // Universal access emoji or any other appropriate emoji
        )}
      </button>

      {menuVisible && (
        <div
          className={`accessibility-options ${menuVisible ? "visible" : ""} ${options.style.mode === "dark" ? "dark" : ""
            }`}
        >
          <div className="exit-reset-buttons">
            <div className="button-container">
              <button
                title={
                  options.labels.resetTitle != null
                    ? options.labels.resetTitle
                    : "איפוס להגדרות ברירת מחדל"
                }
                className="btn btn-success"
                onClick={resetToDefault}
              >
                <FaRedo />
              </button>
            </div>
            <div className="button-container">
              <button
                title={
                  options.labels.closeTitle != null
                    ? options.labels.closeTitle
                    : "יציאה"
                }
                className="btn btn-danger"
                onClick={toggleMenu}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <h2 className="accessibility-options-title">
            {options.labels.menuTitle != null
              ? options.labels.menuTitle
              : "תפריט נגישות"}
          </h2>
          <div className="row  accessibility-options-buttons">
            {(options.modules.increaseText == null ||
              options.modules.increaseText === true) && (
                <div className="col-6">
                  <button className="btn btn-primary" onClick={increaseTextSize}>
                    <FaPlus className="options-i" />
                    {options.labels.increaseText != null
                      ? options.labels.increaseText
                      : "הגדלת גודל הטקסט"}
                  </button>
                </div>
              )}
            {(options.modules.decreaseText == null ||
              options.modules.decreaseText === true) && (
                <div className="col-6">
                  <button className="btn btn-primary" onClick={decreaseTextSize}>
                    <FaMinus className="options-i" />
                    {options.labels.decreaseText != null
                      ? options.labels.decreaseText
                      : "הקטנת גודל הטקסט"}
                  </button>
                </div>
              )}
            {(options.modules.increaseText == null ||
              options.modules.increaseText === true) && (
                <div className="col-6">
                  <button className="btn btn-primary" onClick={increaseLineHeight}>
                    <FaTextHeight className="options-i" />
                    {options.labels.increaseLineHeight != null
                      ? options.labels.increaseLineHeight
                      : "הגדלת מרווח בין שורות"}
                  </button>
                </div>
              )}
            {(options.modules.decreaseText == null ||
              options.modules.decreaseText === true) && (
                <div className="col-6">
                  <button className="btn btn-primary" onClick={decreaseLineHeight}>
                    <FaTextHeight className="options-i" />
                    {options.labels.decreaseLineHeight != null
                      ? options.labels.decreaseLineHeight
                      : "הקטנת מרווח בין שורות"}
                  </button>
                </div>
              )}
            {(options.modules.increaseText == null ||
              options.modules.increaseText === true) && (
                <div className="col-6">
                  <button className="btn btn-primary" onClick={increaseTextSpacing}>
                    <FaArrowsAlt className="options-i" />
                    {options.labels.increaseTextSpacing != null
                      ? options.labels.increaseTextSpacing
                      : "הגדלת מרווח בין אותיות"}
                  </button>
                </div>
              )}
            {(options.modules.decreaseText == null ||
              options.modules.decreaseText === true) && (
                <div className="col-6">
                  <button className="btn btn-primary" onClick={decreaseTextSpacing}>
                    <FaCompressArrowsAlt className="options-i" />
                    {options.labels.decreaseTextSpacing != null
                      ? options.labels.decreaseTextSpacing
                      : "הקטנת מרווח בין אותיות"}
                  </button>
                </div>
              )}
            {(options.modules.invertColors == null ||
              options.modules.invertColors === true) && (
                <div className="col-6">
                  <button
                    className={`btn ${invertColorsActive == true
                        ? "btn-info active"
                        : "btn-primary"
                      }`}
                    onClick={invertColors}
                  >
                    <FaPalette className="options-i" />
                    {options.labels.invertColors != null
                      ? options.labels.invertColors
                      : "היפוך צבעים"}
                  </button>
                </div>
              )}
            {(options.modules.grayHues == null ||
              options.modules.grayHues === true) && (
                <div className="col-6">
                  <button
                    className={`btn ${grayHuesActive == true ? "btn-info active" : "btn-primary"
                      }`}
                    onClick={grayHues}
                  >
                    <FaAdjust className="options-i" />
                    {options.labels.grayHues != null
                      ? options.labels.grayHues
                      : "גווני אפור"}
                  </button>
                </div>
              )}
            {(options.modules.underlineLinks == null ||
              options.modules.underlineLinks === true) && (
                <div className="col-6">
                  <button
                    className={`btn ${underlineLinksActive == true
                        ? "btn-info active"
                        : "btn-primary"
                      }`}
                    onClick={underlineLinks}
                  >
                    <FaUnderline className="options-i" />
                    {options.labels.underlineLinks != null
                      ? options.labels.underlineLinks
                      : "קו תחתי לקישורים"}
                  </button>
                </div>
              )}
            {(options.modules.readingGuide == null ||
              options.modules.readingGuide === true) && (
                <div className="col-6">
                  <button
                    className={`btn ${readingGuideActive == true
                        ? "btn-info active"
                        : "btn-primary"
                      }`}
                    onClick={toggleReadingGuide}
                  >
                    <FaGripLines className="options-i" />
                    {options.labels.readingGuide != null
                      ? options.labels.readingGuide
                      : "קו מדריך לקריאה"}
                  </button>
                </div>
              )}
            {(options.modules.disableAnimations == null ||
              options.modules.disableAnimations === true) && (
                <div className="col-6">
                  <button className="btn btn-primary" onClick={suppressAnimations}>
                    <FaPause className="options-i" />
                    {options.labels.disableAnimations != null
                      ? options.labels.disableAnimations
                      : "הפסקת אנימציות"}
                  </button>
                </div>
              )}
            {(options.modules.readableFont == null ||
              options.modules.readableFont === true) && (
                <div className="col-6">
                  <button
                    className={`btn ${readableFontActive ? "btn-info active" : "btn-primary"
                      }`}
                    onClick={readableFont}
                  >
                    <FaFont className="options-i" />
                    {options.labels.readableFont != null
                      ? options.labels.readableFont
                      : "גופן קריא"}
                  </button>
                </div>
              )}
            {readingGuideActive && (
              <div id="reading-guide" className="reading-guide-line"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );

};

export default AccessibilityButton;