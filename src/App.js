import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {LIST_VIEW} from "./utility";
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import TotalPrice from './components/TotalPrice'

const items = [
    {
        id: 1,
        title: '买电脑',
        price: 9000,
        date: '2018-12-31',
        category: {
            id: '1',
            name: '电子',
            type: 'outcome',
            iconName: 'logo-apple'
        }
    },
    {
        id: 2,
        title: '买耳机',
        price: 1200,
        date: '2019-5-1',
        category: {
            id: '1',
            name: '电子',
            type: 'outcome',
            iconName: 'logo-apple'
        }
    }
]

const income = '1000'
const outcome = '10000'

function App() {
    return (
        <div className="App">
            <TotalPrice income={income} outcome={outcome}/>
            <ViewTab
                activeTab={LIST_VIEW}
                onTabChange={(view) => {
                    console.log(view)
                }}
            />
            <PriceList
                items={items}
                onModifyItem={(item) => {
                    alert(item.id)
                }}
                onDeleteItem={(item) => {
                    alert(item.id)
                }}
            />
        </div>
    );
}

export default App;
