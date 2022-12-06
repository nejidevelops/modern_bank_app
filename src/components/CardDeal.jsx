import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hid" />in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt similique eum labore in neque tenetur facere eveniet maxime maiores rerum deserunt sed nobis incidunt, culpa natus mollitia expedita molestiae vitae.</p>
      </div>
      <Button styles="mt-10" />
    </section>
  )
}

export default CardDeal