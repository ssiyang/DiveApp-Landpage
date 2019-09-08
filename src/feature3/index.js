import React from 'react';
import './index.css';

import detail from '../assets/detail.png'
import comment from '../assets/comment.png'

export default class Feature3 extends React.Component {
    render() {
        return (
            <div className="App-feature3">
                <div className='feature3TxtContainer'>
                    <p>選定地點後，可以進入詳細頁面查看該點的詳細資訊，能在這裡看到相關的照片以及敘述，並在下面得知店家的營業時間、服務項目等等資訊</p>
                    <p>還可以在最下方看到其他使用者的評價，或留下您的心得與其他使用者一起分享！</p>
                </div>

                <div className='feature3ImgContainer'>
                    <img className="feature3Img" src={detail} alt="detail" />
                    <img className="feature3Img" src={comment} alt="comment" />
                </div>
            </div>
        );
    }
}


