import {Fragment} from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeal from './AvailableMeal'
function Meals() {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeal/>
    </Fragment>
  )
}

export default Meals