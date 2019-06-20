import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = ({income, outcome}) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>收入：{income}</div>
            <div>支出：{outcome}</div>
        </div>
    )
}
TotalPrice.propTypes = {
    income: PropTypes.number.isRequired, // isRequired必须添加
    outcome: PropTypes.number.isRequired
}

export default TotalPrice
