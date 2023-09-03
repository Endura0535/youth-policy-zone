package com.shbhack.ypz.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.stereotype.Service;

@Service
public class BankAccountAuthenticationService {
	
	private final Map<String, String> authenticationMap = new HashMap<>(10);
	
	// 계좌 인증 정보 생성
	public void createAuthentication(String memberId, String accountNo) throws Exception {
		
		// TODO 임의 4자리 코드 생성
		String code = "1234";
		
		// TODO 신한 OpenAI 1원 이체 요청
		
		// 인증코드 맵에 추가
		authenticationMap.put(memberId, code);
		
		// 타이머 시작
		Timer timer = new Timer();
		timer.schedule(new TimerTask() {
		    @Override
		    public void run() {
		    	authenticationMap.remove(memberId);
		    }
		}, 3000);  // 3초 후에 실행
	}
}
