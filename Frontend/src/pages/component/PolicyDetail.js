import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Header from './Header'
import Navbar from './Navbar'

import { CSSTransition } from 'react-transition-group';

function PolicyDetail() {
  const params = useParams();
  const location = useLocation();
  const policy = location.state.policy;

  const id = params.id;
  console.log(policy);

  return (
    <div>
      <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
        <div class="center">
          <div class="header-container">
            <Header />
          </div>

          <div className='section-header shinhan-color mg-top-sm'>{policy.name}</div>
          <div className='mg-top-sm'>
              <div class="scroll-snap-card">
                <div class="slide policy-summary">
                    <p class="tip">한눈에 보는 정책 요약</p>

                    <div id="checklist">
                      <input id="01" type="checkbox" name="r" value="1" />
                      <label for="01">학력: 제한없음</label>
                      <input id="02" type="checkbox" name="r" value="2" />
                      <label for="02">Cheese</label>
                      <input id="03" type="checkbox" name="r" value="3" />
                      <label for="03">Coffee</label>
                    </div>
                </div>










                <div class="slide policy-qualify">
                    <p class="tip">신청자격</p>
                </div>
                <div class="slide policy-apply">
                    <p class="tip">신청 방법</p>
                </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default PolicyDetail