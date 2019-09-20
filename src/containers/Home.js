import React from 'react';
import {LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft} from "../utility";
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'

const categoies = {
    '1': {
        id: '1',
        name: '电子',
        type: 'outcome',
        iconName: 'logo-apple'
    },
    "2": {
        id: '2',
        name: '金融',
        type: 'income',
        iconName: 'logo-yen'
    }
}
const items = [
    {
        id: 1,
        title: '买电脑',
        price: 9000,
        date: '2018-12-31',
        cid: '1'
    },
    {
        id: 2,
        title: '买耳机',
        price: 1200,
        date: '2019-05-01',
        cid: '1'
    },
    {
        id: 3,
        title: '利息',
        price: 1,
        date: '2019-07-01',
        cid: '2'
    }
]

const newItem = {
    id: 4,
    title: 'new item',
    price: 300,
    date: '2018-2-22',
    cid: 1
}

class Home extends React.Component {
    // 单向数据流，所有数据由home容器组件控制，往下传递
    constructor(props) {
        super(props)
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW
        }
    }

    changeView = (view) => {
        this.setState({tabView: view})
    }

    changeDate = (year, month) => {
        console.log(year, month)
        this.setState({
            currentDate: {
                year: year,
                month: month
            }
        })
    }

    modifyItem = (modifyItem) => {
        const modifyItems = this.state.items.map(item => {
            if (item.id === modifyItem.id) {
                // ... 展开item 后面的title 会覆盖展开后item里的title
                return {...item, title: '更新后的标题'}
            } else {
                return item
            }
        })
        this.setState({items: modifyItems})
    }

    deleteItem = (delItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== delItem.id)
        this.setState({items: filteredItems})
    }

    createItem = () => {
        this.setState({
            // 把newItem 和 展开后的items合并
            items: [newItem, ...this.state.items]
        })
    }

    render() {
        const {items, currentDate, tabView} = this.state
        const itemsWithCategory = items.map(item => {
            item.category = categoies[item.cid]
            return item
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
        let totalIncome = 0, totalOutcome = 0
        itemsWithCategory.forEach(item => {
            if (item.category.type === TYPE_OUTCOME) {
                totalOutcome += item.price
            } else {
                totalIncome += item.price
            }
        })
        return (
            // 添加一个空节点，不需要用div
            <React.Fragment>
                <div className="d-flex align-items-center py-3 px-3">
                    <div className="col">
                        <MonthPicker
                            year={currentDate.year}
                            month={currentDate.month}
                            onChange={this.changeDate}
                        />
                    </div>
                    <div className="col">
                        <TotalPrice income={totalIncome} outcome={totalOutcome}/>
                    </div>
                </div>
                <div className="content-area py-3 px-3">
                    <ViewTab
                        activeTab={tabView}
                        onTabChange={this.changeView}
                    />
                    <CreateBtn onClick={this.createItem}/>
                    {
                        tabView === LIST_VIEW &&
                        <PriceList
                            items={itemsWithCategory}
                            onModifyItem={this.modifyItem}
                            onDeleteItem={this.deleteItem}
                        />
                    }
                    {
                        tabView === CHART_VIEW &&
                        <h1>图标页</h1>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Home
