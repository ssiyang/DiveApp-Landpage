import React from 'react';
import './index.css';

import home from '../assets/home.png'
import keyword from '../assets/keyword.png'

export default class Feature1 extends React.Component {
    render() {
        return (
            <div className="App-feature1">

                <div className='feature1TxtContainer'>
                    <p>若您有心儀的地點可以使用關鍵字功能，快速搜尋到您需要的結果！</p>
                </div>

                <div className='feature1ImgContainer'>
                    <img className="feature1Img" src={home} alt="home" />
                    <img className="feature1Img" src={keyword} alt="keyword" />
                </div>

            </div>
        );
    }
}


