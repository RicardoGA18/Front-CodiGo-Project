import React, {Fragment} from 'react'
import Nav from '../molecules/Nav'
import HeadActions from '../molecules/HeadActions'
/* TEMP */
import categories from '../../utils/JsonCategories'

const Head = () => {
  return (
    <Fragment>
      <div className="Head l-container">
        <div className="l-contain">
          <Nav
            categories={categories}
          ></Nav>
          <HeadActions></HeadActions>
        </div>
      </div>
    </Fragment>
  )
}

export default Head