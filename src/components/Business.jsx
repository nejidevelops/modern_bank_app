import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={layout.heading2}>You do the business, <br className='sm:block hidden' /> we'll handle the money.</h2>
      </div>
    </section>
  )
}

export default Business