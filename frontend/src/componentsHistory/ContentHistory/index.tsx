import styles from "./contentHistory.module.css";
import stylesKartinka from "./kartinka.module.css";
import stylesText from "./text.module.css";
import BeforeAfter from "../../components/BeforeAfter";

import ozero1 from "../img/ozero1.jpeg";

import negor from "../img/RI5bpix8LSw.jpg";
import tovZnak from "../img/tovZnak.png";
import vagon from "../img/vagon.jpg";
import vagon1 from "../img/vagon1.png";
import aduard from "../img/aduard.jpeg";
import alcashMark from "../img/alcashMark.jpeg";
import bochka from "../img/bochka.jpeg";

import work from "../img/work.jpeg";
import shonbush from "../img/shonbush.jpeg";
import street from "../img/street.jpeg";
import promo from "../img/promo.jpeg";
import myjick from "../img/myjick.png";
import money from "../img/money.jpeg";
import solders from "../img/solders.jpeg";
import ponarth from "../img/ponarth.jpeg";

const ContentHistory = () => {
  return (
    <>
      <div className={stylesKartinka.content}>
        <div className={styles.text}>
          <h2 className={styles.texth2}>
            Крупнейшей пивоваренной компанией в довоенной Восточной Пруссии был
            кёнигсбергский пивзавод «Понарт», основанный Иоганном Филиппом
            Шиффердеккером 15 ноября 1839 года. Понарт - это прусская деревушка,
            основанная более 600 лет тому назад.
          </h2>
        </div>
      </div>
      <div
        className={stylesKartinka.parallax + " " + stylesKartinka.zavod}
      ></div>
      <div className={stylesKartinka.content}>
        <div className={styles.text}>
          <h2 className={styles.texth2}>
            После военного конфликта с Польшей, угрозы со стороны шведов и
            вторжения французов, кажется, неприятности оставили деревню. В 1849
            году в Понарт переместилась пивоварня Филиппа Шифердеккера, что
            весьма способствовало экономическому и культурному развитию
            пригорода.
          </h2>
        </div>
      </div>
      <div
        className={stylesKartinka.parallax + " " + stylesKartinka.ozero3}
      ></div>
      <div className={stylesKartinka.content}>
        <div className={styles.text}>
          <h2 className={styles.texth2}>
            Население Понарта к 1900 году достигло 8000 человек. В 1905 году
            Понарт объединился с Кенигсбергом. Прекрасный пруд Шванен
            (Лебединый, а ныне Летний), ресторан Зюд-парк дополняли картину в
            сочетании с изобилием пенистого напитка.
          </h2>
        </div>
      </div>
      <div
        className={stylesKartinka.parallax + " " + stylesKartinka.panorama}
      ></div>
      <div className={styles.img_grid}>
        <img src={negor} alt="" className={styles.historyimg}/>
        <img src={tovZnak} alt="" className={styles.historyimg} />
      </div>
      <div className={styles.golovok}>
        <h1 className={`${styles.text_golovok} ${styles.texth1}`}>
          УЛОЧКИ ПОНАРТА <br />
          НАЧАЛО XX ВЕКА
        </h1>
      </div>
      ТУТ СЛАЙДЕР <br />
      ТУТ КАЛЕНДАРЬ
      <div className={styles.golovok}>
        <h1 className={`${styles.text_golovok} ${styles.texth1}`}>
          САМАЯ БОЛЬШАЯ <br /> ПИВОВАРНЯ В <br />
          ВОСТОЧНОЙ <br />
          ПРУССИИ
        </h1>
      </div>
      <BeforeAfter />
      <div className={stylesKartinka.content}>
        <div className={styles.text}>
          <h2 className={styles.texth2}>
            Сам Шиффердеккер происходил из старого рода, зaнимавшегося
            пивоварением с XII века, ведущего свою историю из города Мосбаха в
            Баварии. Его дядя с 1804 года работал в кенигсбергской винной фирме
            «Кох и Рихтер», ведшей хозяйство в ресторане «Блютгерихт». Так в
            конце 1839 года Иоганн попал в Кенигсберг и принес с собой баварское
            пиво, бывшее в Восточной Пруссии в новинку. Его дядя уже заранее
            позаботился о приобретении земельного участка в Лёбенихте на улице
            Тухмахерштрассе (по-русски – «улица суконщиков»), где уже стояли
            пивной заводик и жилой дом, построенные в 1815 году.
          </h2>
        </div>
      </div>
      <div className={stylesText.back_img + " " + stylesText.iogan}>
        <h2 className={`${stylesText.stickytext} ${styles.texth2}`}>
          В 28 лет Иоган уже был солидным владельцем пивоварни. Очень скоро
          подвалы в Лёбенихте стали слишком тесны, и с 1842 года были арендованы
          просторные подвалы под Замковой кирхой.
        </h2>
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          2 августа 1849 года в имении Понарт Шиффердеккер приобрел большой
          участок в 260 моргенов земли за 15 тысяч талеров, и сразу же началось
          строительство подвалов. Вскоре была построена пивоварня, отвечающая
          всем самым современным требованиям того времени. Для получения воды
          для льда рядом с заводом были сделаны два пруда: Schwanenteich и
          Hubertusteich (сейчас – озера Пеньковое и Лебяжье).
        </h2>
      </div>
      <img src={ozero1} alt="" className={styles.historyimg} />
      <div className={styles.info}>
        <img className={`${styles.info_img} ${styles.historyimg}`} src={aduard} alt=""/>

        <h2 className={`${styles.text} ${styles.texth2}`} >
          Поскольку дети основателя пивоварни не желали заниматься пивоварением,
          его брат Эдуард совместно с рядом кёнигсбергских коммерсантов основал
          коммандитное общество «Пивоварня Понарт Э. Шиффедеккер и Ко», которое
          в 1869 году выкупило производство.
        </h2>
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          Эдуард Шиффердеккер оставался техническим директором и после того, как
          предприятие 11 ноября 1888 года стало акционерным. Основатель, Иоганн
          Филипп Шиффердеккер, был членом наблюдательного совета вплоть до своей
          смерти 1 октября 1887 года.
        </h2>
      </div>
      <div className={styles.info}>
        <h2 className={`${styles.text} ${styles.texth2}`}>
          Для устранения дефицита жилья в 1871 году было построено два жилых
          дома общим объёмом в 32 квартиры.
        </h2>
        <img className={`${styles.info_img} ${styles.historyimg}`} src={work} alt="" />
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          {" "}
          Когда не было больше возможности расширять мощности, практически тот
          же состав владельцев «Понарта» основал «Акционерную пивоварню Шёнбуш»,
          построенную в 1871 году.
        </h2>
      </div>
      <img src={shonbush} alt="" className={styles.historyimg}/>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          {" "}
          Для продажи пива за пределы Восточной Пруссии в 1888 году к заводу
          была проведена железнодорожная ветка к Остбану (Ostbahn – Восточная
          железная дорога Германии){" "}
        </h2>
      </div>
      <div className={styles.img_grid}>
        <img src={vagon} alt="" className={styles.historyimg}/>
        <img src={vagon1} alt="" className={styles.historyimg}/>
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          {" "}
          Для реализации пива в Кёнигсберге пользовались специальными повозками
          с маркировкой пивоварни.{" "}
        </h2>
      </div>
      <img src={street} alt="" className={styles.historyimg}/>
      <div className={styles.info}>
        <div className={styles.grid}>
          <h2 className={`${styles.text} ${styles.grid1} ${styles.texth2}`}>
            Для рекламы продукции на территории зоопарка существовал специальный
            павильон, кроме того, было открыто торговое заведение типа закусочной
            на территории пивоварни, существовала небольшая сеть собственных баров
            на территории Кёнигсберга
          </h2>
          <img className={`${styles.info_img} ${styles.grid2} ${styles.historyimg}`} src={alcashMark} alt="" />

          <img className={`${styles.info_img} ${styles.grid3} ${styles.historyimg}`} src={promo} alt="" />
          <h2 className={`${styles.text} ${styles.grid4} ${styles.texth2}`}>
            Реклама Мартовского пива Оно славилось в северо-восточной Германии и
            вывозилось в огромных объемах
          </h2>
          <h2 className={`${styles.text} ${styles.grid5} ${styles.texth2}`}>
            Для собственной розничной торговли недалеко от пивоварни был
            оборудован кабачок «Gambrinus-Halle». Потребление все увеличивалось, и
            уже было трудно справиться со всеми заказами. Так появился план
            перенести производство за город.
          </h2>
          <img className={`${styles.info_img} ${styles.grid6} ${styles.historyimg}`} src={myjick} alt="" />
        </div>
      </div>
      <div className={stylesText.back_img + " " + stylesText.bottle}>
        <h2 className={`${stylesText.stickytext} ${styles.texth2}`}>
          В 28 лет Иоган уже был солидным владельцем пивоварни. Очень скоро
          подвалы в Лёбенихте стали слишком тесны, и с 1842 года были арендованы
          просторные подвалы под Замковой кирхой.
        </h2>
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          2 августа 1849 года в имении Понарт Шиффердеккер приобрел большой
          участок в 260 моргенов земли за 15 тысяч талеров, и сразу же началось
          строительство подвалов. Вскоре была построена пивоварня, отвечающая
          всем самым современным требованиям того времени. Для получения воды
          для льда рядом с заводом были сделаны два пруда: Schwanenteich и
          Hubertusteich (сейчас – озера Пеньковое и Лебяжье).
        </h2>
      </div>
      <div className={styles.info}>
        <img className={`${styles.info_img} ${styles.historyimg}`} src={bochka} alt="" />

        <h2 className={`${styles.text} ${styles.texth2}`}>
          В юбилейном 1939 году пивоварня со штатом 500 человек была крупнейшей
          в северо-восточной Германии. В 1906 году в честь основателя знаменитой
          пивоварни в Понарте назвали улицу (сейчас ул. маршала Новикова).
        </h2>
      </div>
      <div className={stylesText.back_img + " " + stylesText.pivKorol}>
        <h2 className={`${stylesText.stickytext} ${styles.texth2}`}>
          В 28 лет Иоган уже был солидным владельцем пивоварни. Очень скоро
          подвалы в Лёбенихте стали слишком тесны, и с 1842 года были арендованы
          просторные подвалы под Замковой кирхой.
        </h2>
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          Пастор, председатель общины, рабочие железнодорожной мастерской и
          многие другие каждую неделю получали свою восьмую часть тонны пива в
          виде монет номиналом 1 литр
        </h2>
      </div>
      <img src={money} alt="" className={styles.historyimg}/>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          С началом Первой мировой войны оборот значительно снизился. Уже второй
          после 1885 года пожар случился 28 июня 1918 года и нанес колоссальный
          урон, что очень затруднило восстановление.
        </h2>
      </div>
      <img src={solders} alt="" className={styles.historyimg}/>
      <div className={styles.golovok}>
        <h1 className={`${styles.text_golovok} ${styles.texth1}`}>
          НОВЫЕИ ХОЗЯЕВА - <br /> СОВЕТСКИЙ ПЕРИОД
        </h1>
      </div>
      <img src={ponarth} alt="" className={styles.historyimg}/>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          После второй мировой войны город Кёнигсберг включен в состав СССР и
          переименован в Калининград. На территории пивзавода «Понарт» основан
          «Калининградский пивкомбинат №2». , который первые послевоенные годы
          завод производил только солод.
        </h2>
      </div>
      <div className={styles.yaers}>
        <div className={styles.block_yers}>
          <h3 className={styles.texth3}>1954</h3>{" "}
          <h2 className={styles.texth2}>
            Производство передано в ведение "Минестрерства промышленности
            продовольственных товаров РСФСР"
          </h2>
        </div>
        <div className={styles.block_yers}>
          <h3 className={styles.texth3}>1988</h3>{" "}
          <h2 className={styles.texth2}>
            Производство перешло Производственному объединени ликеро-водочной и
            пивобезалкогольной промышленности
          </h2>
        </div>
        <div className={styles.block_yers}>
          <h3 className={styles.texth3}>1993</h3>{" "}
          <h2 className={styles.texth2}>
            После развала СССР завод акционирован как АО "Калининградминводы", а
            позже преобразован в ОАО "Балминводы"
          </h2>
        </div>
        <div className={styles.block_yers}>
          <h3 className={styles.texth3}>1995</h3>{" "}
          <h2 className={styles.texth2}>Зарегистрирована компания ООО "Калининградский пивкомбинат"</h2>
        </div>
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          После развала Советского Союза производственные мощности переходили из
          рук в руки, при этом производство фактически было остановлено.
          Помещения пивоварни пришли в запустение, что привело к их частичному
          разрушению.
        </h2>
      </div>
      <div className={styles.golovok}>
        <h1 className={`${styles.text_golovok} ${styles.texth1}`}>
          СОХРАНЯЯ <br />
          СТАРИННЫЕ <br />
          ТРАДИЦИИ <br />
          ПИВОВАРЕНИЯ
        </h1>
      </div>
      ТУТ СЛАЙДЕР
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          Новая история Понарта началась с приходом новой команды весной 2010
          года. Молодой энтузиаст и предприниматель из Калининграда -
          Путятинский Ренат Валерьевич, нашел инвесторов и восстановил часть
          подвальных помещений пивоварни "Понарт".
        </h2>
      </div>
      <div className={styles.videocontainer}>
        <iframe
          src="https://www.youtube.com/embed/mCLg4Q82oeA?si=YGL-_3154YtxDNu7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.text}>
        <h2 className={styles.texth2}>
          Сейчас на пивоварне варят пиво по старинной немецкой рецептуре,
          используя пивоваренный солод высокого качества, лучшие сорта хмеля,
          элитные культуры пивных дрожжей и воду из понартовских артезианских
          скважин.
        </h2>
      </div>
    </>
  );
};

export default ContentHistory;