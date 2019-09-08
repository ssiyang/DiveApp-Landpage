import React from 'react';
import './index.css';

import list from '../assets/list.png'
import filter from '../assets/filter.png'

export default class Feature2 extends React.Component {
    render() {
        return (
            <div className="App-feature2">
                
                    <div className='feature2ImgContainer'>
                        <img className="feature2Img" src={list} alt="list" />
                        <img className="feature2Img" src={filter} alt="filter" />
                    </div>

                    <div className='feature2TxtContainer'>
                        <p>【深入潛初】是一款能幫助潛水客深入了解台灣潛水環境的APP，能有效幫助您縮短在網上爬文的時間、以最少的時間獲得最多有用的資訊！</p>
                        <p>為您蒐集了全台灣最完整、詳細的潛點、潛店資料，讓潛水客們可以輕鬆地依照地區、難度、服務來篩選適合自己前往潛水的地點，讓您能夠更享受潛水之旅。</p>
                    </div>
            </div>
        );
    }
}


