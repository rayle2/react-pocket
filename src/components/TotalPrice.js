import React from 'react'
import PropTypes from 'prop-types' // react自带属性检查

const TotalPrice = ({income, outcome}) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>收入：{income}</div>
            <div>支出：{outcome}</div>
        </div>
    )
}

export default TotalPrice
