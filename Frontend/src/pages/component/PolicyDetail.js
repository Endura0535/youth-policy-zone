import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './Header'

import { CSSTransition } from 'react-transition-group';
import ChatgptApi from './chatgpt/ChatgptApi';
import createMessage from './chatgpt/message';

function PolicyDetail() {
  const params = useParams();
  const location = useLocation();
  const policy = location.state.policy;
  const navigate = useNavigate();
  const [outline, setOutline] = useState('');

  const onClickBackButton = () => {
    navigate(-1);
  }

  const id = params.id;
  
  useEffect(() => {

    const query = async () => {
      const response = await createMessage([
      {
        role: 'assistant', content: policy.policy.name + ' ' + (policy.policy.PolicyDetail)
      },
      {
        role: 'user', content: '위 내용에 대해 항목별로 정리해줘'
      }]);

      console.log(response);
      setOutline(response[response.length - 1].content);
    };
    query();
  }, []);

  return (
    <div>
      <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
        <div className="center">
          <div className="header-container">
            <Header />
          </div>

          <div className='section-header shinhan-color mg-top-sm'>{policy.policy.name}</div>
          <div className='mg-top-sm'>
              <div className="scroll-snap-card">
                <div className="slide policy-qualify">
                    <p className="tip">한눈에 보는 정책 요약</p>
                    <div className="policy-qualify-container">
                      {policy !== undefined && <div>{outline}</div>}
                    </div>
                </div>

                <div className="slide policy-summary">
                    <p className="tip">체크리스트</p>
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
            <button className="primary-btn policydetail-btn" onClick={onClickBackButton}>뒤로 가기</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default PolicyDetail