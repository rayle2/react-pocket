import React from 'react'
import PropTypes from 'prop-types'
import {padLeft, range} from "../utility";
import ViewTab from "./ViewTab";

class MonthPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: props.year
        }
    }

    toggleDropdown = (evt) => {
        evt.preventDefault()
        this.setState({isOpen: !this.state.isOpen})
    }

    selectYear = (evt, yearNumber) => {
        evt.preventDefault()
        this.setState({
            selectedYear: yearNumber
        })
    }

    selectMonth = (evt, monthNumber) => {
        evt.preventDefault()
        this.setState({
            isOpen: false
        })
        // 传给父组件 当前选的年和月
        this.props.onChange(this.state.selectedYear, monthNumber)
    }

    render() {
        const {year, month} = this.props
        const {isOpen, selectedYear} = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(number => number + year)
        return (
            <div className='dropdown month-picker-component text-left'>
                <h4>选择月份</h4>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDropdown}
                >
                    {`${year}年${padLeft(month)}月`}
                </button>
                {
                    isOpen &&
                    <div className="dropdown-menu" style={{display: 'block'}}>
                        <div className="row">
                            <div className="col border-right">
                                {
                                    yearRange.map((yearNumber, index) =>
                                        <a
                                            onClick={evt => {
                                                this.selectYear(evt, yearNumber)
                                            }}
                                            className={yearNumber === selectedYear ? 'dropdown-item active' : 'dropdown-item'}
                                            key={index}
                                            href="#">{yearNumber}年
                                        </a>
                                    )
                                }
                            </div>
                            <div className="col">
                                {
                                    monthRange.map((monthNumber, index) =>
                                        <a
                                            onClick={evt => {
                                                this.selectMonth(evt, monthNumber)
                                            }}
                                            className={monthNumber === month ? 'dropdown-item active' : 'dropdown-item'}
                                            key={index}
                                            href="#">{padLeft(monthNumber)}月
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired, // isRequired必须添加
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default MonthPicker
