import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'

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

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.js</code> and save to reload.*/}
            {/*    </p>*/}
            {/*    <a*/}
            {/*        className="App-link"*/}
            {/*        href="https://reactjs.org"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Learn React*/}
            {/*    </a>*/}
            {/*</header>*/}
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
