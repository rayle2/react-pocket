import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types' // react自带属性检查

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                items.map((item) => (
                    <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id}>
                        <span className='col-1'>
                            <Ionicon
                                className='rounded-circle'
                                fontSize="30px"
                                icon={item.category.iconName}
                                style={{backgroundColor: '#007bff', padding: '5px'}}
                                color={'#fff'}
                            />
                        </span>
                        <span className='col-5'>{item.title}</span>
                        <span className='col-2 font-weight-bold'>
                            {
                                (item.category.type === 'income' ? '+' : '-')
                            }
                            {item.price}元
                        </span>
                        <span className='col-2'>{item.date}</span>
                        <i className='col-1'
                           onClick={() => {
                               onModifyItem(item)
                           }}>
                            <Ionicon
                                className='rounded-circle'
                                fontSize="30px"
                                icon='ios-create-outline'
                                style={{backgroundColor: '#28a745', padding: '5px'}}
                                color={'#fff'}
                            />
                        </i>
                        <i className='col-1'
                           onClick={() => {
                               onDeleteItem(item)
                           }}>
                            <Ionicon
                                className='rounded-circle'
                                fontSize="30px"
                                icon='ios-close'
                                style={{backgroundColor: '#dc3545', padding: '5px'}}
                                color={'#fff'}
                            />
                        </i>
                    </li>
                ))
            }
        </ul>
    )
}
PriceList.propTypes = {
    items: PropTypes.array.isRequired, // isRequired必须添加
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
}
// 传入参数默认值
PriceList.defaultProps = {
    onModifyItem: () => {
    }
}
export default PriceList
