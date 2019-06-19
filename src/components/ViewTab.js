import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types' // react自带属性检查
import {LIST_VIEW, CHART_VIEW} from "../utility";

const generateLinkClass = (current, view) => {
    return (current === view ? 'nav-link active' : 'nav-link')
}

const ViewTab = ({activeTab, onTabChange}) => {
    return (
        <ul className='nav nav-tabs nav-fill my-4'>
            <li className='nav-item'>
                <a
                    className={generateLinkClass(activeTab, LIST_VIEW)}
                    href='#'
                    onClick={(evt) => {
                        evt.preventDefault();
                        onTabChange(LIST_VIEW)
                    }}
                >
                    <Ionicon
                        className='rounded-circle mr-2'
                        fontSize="25px"
                        icon='ios-paper'
                        color={'#007bff'}
                    />
                    列表模式
                </a>
            </li>
            <li className='nav-item'>
                <a
                    className={generateLinkClass(activeTab, CHART_VIEW)}
                    href='#'
                    onClick={(evt) => {
                        evt.preventDefault();
                        onTabChange(CHART_VIEW)
                    }}
                >
                    <Ionicon
                        className='rounded-circle mr-2'
                        fontSize="25px"
                        icon='ios-pie'
                        color={'#007bff'}
                    />
                    图表模式
                </a>
            </li>
        </ul>
    )
}
ViewTab.propTypes = {
    activeTab: PropTypes.string.isRequired, // isRequired必须添加
    onTabChange: PropTypes.func.isRequired
}
export default ViewTab
