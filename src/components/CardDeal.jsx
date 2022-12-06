import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hid" />in few easy steps</h2>
        <p>Lorem</p>
      </div>
    </section>
  )
}

export default CardDeal