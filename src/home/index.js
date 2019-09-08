import React from 'react';
import './index.css';

import loginImg from '../assets/loginImg.png'
import appIntro from '../assets/appIntro.png'

import NavBar from '../navbar/index'
import Feature1 from '../feature1/index'
import Feature2 from '../feature2/index'
import Feature3 from '../feature3/index'
import Download from '../download/index'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />

                <div id="home" className="homeContainer">
                    <div className='homeImgContainer'>
                        <img className="homeImg" src={loginImg} alt="loginImg" />
                        <img className="homeImg" src={appIntro} alt="appIntro" />
                    </div>

                    <div className='homeTxtContainer'>
                        <p>【深入潛初】是一款能幫助潛水客深入了解台灣潛水環境的APP，能有效幫助您縮短在網上爬文的時間、以最少的時間獲得最多有用的資訊！</p>
                        <p>為您蒐集了全台灣最完整、詳細的潛點、潛店資料，讓潛水客們可以輕鬆地依照地區、難度、服務來篩選適合自己前往潛水的地點，讓您能夠更享受潛水之旅。</p>
                    </div>

                </div>

                <div id="feature1">
                    <Feature1 />
                </div>

                <div id="feature2">
                    <Feature2 />
                </div>

                <div id="feature3">
                    <Feature3 />
                </div>

                <div id="download">
                    <Download />
                </div>
            </div>
        );
    }
}


