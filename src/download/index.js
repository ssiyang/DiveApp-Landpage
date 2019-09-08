import React from 'react';
import './index.css';

import googledownload from '../assets/googledownload.png'
import appleDownload from '../assets/appleDownload.png'

export default class Feature3 extends React.Component {
    render() {
        return (
            <div className="App-download">
                <div className='imgDownloadContainer'>
                    <p>心動了嗎？趕快下載一起享受在潛水世界吧！</p>
                    <div>
                        <a href="https://reurl.cc/qDDorq">
                            <img className="imgDownload" src={googledownload} alt="googledownload" />
                        </a>

                        <a href="https://reurl.cc/5ggVdv">
                            <img className="imgDownload" src={appleDownload} alt="appleDownload" />
                        </a>
                    </div>
                    <p className="contactUs">聯絡我們 : DiveInTaiwan@monosparta.com</p>
                </div>

            </div>
        );
    }
}


