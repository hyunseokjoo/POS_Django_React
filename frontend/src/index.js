
//react-alert 관련
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
//redux 관련
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/rootRedux';
//react 라우터
import { BrowserRouter } from 'react-router-dom';
//react 기본
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//alert 기본 옵션 설정
const options = {
    position : positions.TOP_CENTER,
    timeout: 3000,
    offset : '30px',
    transition: transitions.SCALE
}

//redux 기본 내용 추가
const enhancer = 
    process.env.NODE_ENV ==="production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
                <BrowserRouter>
                    <AlertProvider template={AlertTemplate} {...options}>
                        <App />
                    </AlertProvider>
                </BrowserRouter>    
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
