import { useEffect, useRef, useState } from "react";
import styles from "./Gasp.module.scss";
import gsap from "gsap";

import beerlables from "../../assets/bottle-pattern-01.svg";
import beercan from "../../assets/beercan.png";

import malt1 from "../../assets/malt1.png";
import malt2 from "../../assets/malt2.png";
import malt3 from "../../assets/malt3.png";
import malt4 from "../../assets/malt4.png";
import malt5 from "../../assets/malt5.png";
import malt6 from "../../assets/malt6.png";
import malt7 from "../../assets/malt7.png";
import malt8 from "../../assets/malt8.png";

import hops1 from "../../assets/hops1.png";
import hops2 from "../../assets/hops8.png";
import hops3 from "../../assets/hops3.png";
import hops4 from "../../assets/hops4.png";

function Gasp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const h1Texts = [
    "Пшен f ичное",
    "Пил а снер",
    "Тыкве&nbsp;&nbsp;..&nbsp; нный&nbsp;&nbsp; &nbsp;&nbsp;э&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ль",
  ];
  let logoColors = [
    "var(--first-logo)",
    "var(--third-logo)",
    "var(--second-logo)",
  ];
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const prevButton = document.getElementById("prevButton") as HTMLDivElement;
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const nextButton = document.getElementById("nextButton") as HTMLDivElement;
  const caneLabels = document.getElementById("cane_labels");
  const sectionContainer = document.getElementById("section_container");
  const logo = document.getElementById("logo");
  const h1 = document.getElementById("h1");
  const fruit_image = useRef<(HTMLDivElement | null)[]>([]);
  const fruit_image__img = useRef<(HTMLDivElement | null)[]>([]);

  // логика анимации фруктов на заднем фоне
  useEffect(() => {
    gsap.to(fruit_image__img.current, {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      zIndex: 22,
      duration: 2,
      ease: "none",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    // логика текста h1 в зависимости от индекса
    if (currentIndex >= 0) {
      if (h1 !== null) {
        h1.innerHTML = h1Texts[currentIndex];
      }
    }

    // цвет лого
    if (logo !== null) {
      logo.style.color = logoColors[currentIndex];
    }

    // логика скрытия кнопки nextButton
    if (currentIndex === h1Texts.length - 1 && nextButton !== null) {
      nextButton.style.display = "none";
    }

    // логика появления кнопки nextButton
    if (currentIndex < h1Texts.length - 1 && nextButton !== null) {
      nextButton.style.display = "block";
    }

    // логика скрытия кнопки prevButton
    if (currentIndex === 0 && prevButton !== null) {
      prevButton.style.display = "none";
    }

    // логика появления кнопки prevButton
    if (currentIndex > 0 && prevButton !== null) {
      prevButton.style.display = "block";
    }
  }, [currentIndex]);

  const nextButtonClick = () => {
    if (currentPosition > -200) {
      setCurrentPosition(currentPosition - 100);
      if (caneLabels !== null && sectionContainer !== null) {
        caneLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
      }

      // ограничение на нажатие кнопки, чтобы не съезжали фркуты
      const nextButtonCurrent = nextButtonRef.current;
      if (nextButtonCurrent) {
        nextButtonCurrent.setAttribute("disabled", "");
        setTimeout(() => {
          nextButtonCurrent.removeAttribute("disabled");
        }, 850);
      }
    }

    setCurrentIndex(currentIndex + 1);

    // появление фруктов сверху
    gsap.from(fruit_image.current, { y: "-100vh", delay: 0.5 });
  };
  const prevButtonClick = () => {
    if (currentPosition < 0) {
      setCurrentPosition(currentPosition + 100);
      if (caneLabels !== null && sectionContainer !== null) {
        caneLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
        sectionContainer.style.transition = `all 0.5s ease-in-out`;
      }

      // ограничение на нажатие кнопки, чтобы не съезжали фркуты
      const prevButtonCurrent = prevButtonRef.current;
      if (prevButtonCurrent) {
        prevButtonCurrent.setAttribute("disabled", "");
        setTimeout(() => {
          prevButtonCurrent.removeAttribute("disabled");
        }, 850);
      }
    }

    setCurrentIndex(currentIndex - 1);

    // появление фруктов снизу
    gsap.from(fruit_image.current, { y: "100vh", delay: 0.5 });
  };

  return (
    <div className={styles.body}>
      <header>
        <h2 className={styles.logo} id="logo">
          Новинки
        </h2>
      </header>
      <main>
        <div>
          <button
            id="prevButton"
            ref={prevButtonRef}
            className={`${styles.prevButton}`}
            onClick={() => {
              prevButtonClick();
            }}
          >
            <i
              className={`${
                currentIndex == 1 ? styles.peach_color : styles.apple_color
              } ${styles.prevButton}`}
            ></i>
          </button>
          <button
            id="nextButton"
            ref={nextButtonRef}
            onClick={() => {
              nextButtonClick();
            }}
          >
            <i
              className={`${
                currentIndex == 1 ? styles.exotic_color : styles.apple_color
              }`}
            ></i>
          </button>
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1} id="h1">
            Пшен и ичное
          </h1>
          <div className={styles.cane_image}>
            <img src={beercan} alt="" className={styles.can} />
            <img
              src={beerlables}
              alt=""
              id="cane_labels"
              className={styles.cane_labels}
              style={{ left: `${currentPosition}%` }}
            />
          </div>
        </div>
        <div className={styles.section_container_main}>
          <div
            className={styles.section_container}
            id="section_container"
            style={{ left: `${currentPosition}%` }}
          >
            <section className={styles.section} id="section1">
              <div className={styles.fruit_images}>
                <div
                  className={`${styles.image_one} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt1}
                    alt="pear-image"
                  />
                </div>
                <div
                  className={`${styles.image_two} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt2}
                    alt="pear-image"
                  />
                </div>
                <div
                  className={`${styles.image_three} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt3}
                    alt="pear-image"
                  />
                </div>
                <div
                  className={`${styles.image_four} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt4}
                    alt="pear-image"
                  />
                </div>
              </div>
            </section>
            <section className={styles.section} id="section2">
              <div className={styles.fruit_images}>
                <div
                  className={`${styles.image_one} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={hops1}
                    alt="apple-image"
                  />
                </div>
                <div
                  className={`${styles.image_two} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={hops2}
                    alt="apple-image"
                  />
                </div>
                <div
                  className={`${styles.image_three} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={hops3}
                    alt="apple-image"
                  />
                </div>
                <div
                  className={`${styles.image_four} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={hops4}
                    alt="apple-image"
                  />
                </div>
              </div>
            </section>
            <section className={styles.section} id="section3">
              <div className={styles.fruit_images}>
                <div
                  className={`${styles.image_one} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt5}
                    alt="exotic-image"
                  />
                </div>
                <div
                  className={`${styles.image_two} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt6}
                    alt="exotic-image"
                  />
                </div>
                <div
                  className={`${styles.image_three} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt7}
                    alt="exotic-image"
                  />
                </div>
                <div
                  className={`${styles.image_four} ${styles.fruit_image}`}
                  ref={(ref) => fruit_image.current.push(ref as HTMLDivElement)}
                >
                  <img
                    ref={(ref) =>
                      fruit_image__img.current.push(ref as HTMLImageElement)
                    }
                    src={malt8}
                    alt="exotic-image"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Gasp;
