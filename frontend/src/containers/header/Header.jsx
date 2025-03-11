import styles from "./styles.module.css";
import logoImg from "../../assets/images/header/logo.svg";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["header__logo"]}>
          <img src={logoImg} alt="Логотоип" className={styles["header__logo-icon"]} />
          <p className={styles["header__logo-text"]}>
            AiNeoma
          </p>
        </div>
        <nav className={styles["header__nav"]}>
          <input type="checkbox" />
          <ul className={styles["header__nav-list"]}>
            <li className={styles["header__nav-item"]}>
              <a href="!#" className={styles["header__nav-link"]}>
                О проекте
              </a>
            </li>
            <li className={styles["header__nav-item"]}>
              <a href="!#" className={styles["header__nav-link"]}>
                Цены
              </a>
            </li>
            <li className={styles["header__nav-item"]}>
              <a href="!#" className={styles["header__nav-link"]}>
                Вход
              </a>
            </li>
          </ul>
          <button className={styles["header__nav-button"]}>
            Регистрация
          </button>
        </nav>
      </div>
    </div>
  )
};
