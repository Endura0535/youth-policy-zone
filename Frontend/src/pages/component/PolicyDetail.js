import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './Header'

import { CSSTransition } from 'react-transition-group';

function PolicyDetail() {
  const params = useParams();
  const location = useLocation();
  const policy = location.state.policy;
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  }

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
                <div class="slide policy-qualify">
                    <p class="tip">한눈에 보는 정책 요약</p>
                </div>

                <div class="slide policy-summary">
                    <p class="tip">체크리스트</p>
                    <div id="checklist">
                      <input id="01" type="checkbox" name="r" value="1" />
                      <label for="01">학력: {policy.academicAbility}</label>
                      <input id="02" type="checkbox" name="r" value="2" />
                      <label for="02">마감기한: {policy.applicationEnd}</label>
                      <input id="03" type="checkbox" name="r" value="3" />
                      <label for="03">Coffee</label>
                      <input id="04" type="checkbox" name="r" value="4" />
                      <label for="04">전공제한: {policy.major}</label>
                    </div>
                </div>

            </div>
            <button class="primary-btn policydetail-btn" onClick={onClickBackButton}>뒤로 가기</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default PolicyDetail