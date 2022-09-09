import React, { useEffect } from "react"
import styles from "./Header.module.css"
import rocketLogo from "../assets/rocket-logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.rocket}>
        <img src={rocketLogo} alt="" />
        <strong>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </strong>
      </div>
    </header>
  )
}

export default Header
