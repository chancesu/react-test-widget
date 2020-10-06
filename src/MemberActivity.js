import React from 'react'

const MemberActivity = () =>{
    return(
        <div className="jnd-admin-contents-item">
            >>>> 리액트에서 불러온 코드
            <h3 className="item-title">
            멤버 활동 정보
            <div className="item-info jnd-tooltip-toggle">
            <i className="prefix icon-info-fill"></i>
            <span className="jnd-tooltip tooltip-black b-l">
                <span className="tooltip-desc">일별(DAU) 또는 월간(MAU)팀 멤버들의 활동 정보</span>
            </span>
            </div>
            <a href="#none">세부정보</a>
            </h3>

            <div className="item-divider"></div>
            <ul className="mini-tab">
                <li className="active">
                    <button type="button" className="tab-title">DAU</button>
                </li>
                <li>
                    <button type="button" className="tab-title">MAU</button>
                </li>
            </ul>
            <div className="chart-wrap" id="chart-area">
                <div className="big jnd-connect-loading-container">
                    <div className="loading_bar"><span class="three-quarters-loader jnd-three-quarters-loader"></span></div>
                </div>
            </div>
        </div>
    )
}


export default MemberActivity;
