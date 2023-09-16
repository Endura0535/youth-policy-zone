package com.shbhack.ypz.service;

import java.util.*;

import com.shbhack.ypz.client.ShbFeignClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class BankAccountAuthenticationService {
	
	private final Map<String, String> authenticationMap = new HashMap<>(10);
	
	// 계좌 인증 정보 생성
	public String createAuthentication(String memberId, String accountNo) throws Exception {
		
		// 임의 4자리 코드 생성
		Random random = new Random(System.currentTimeMillis());
		int range = (int)Math.pow(10, 4);
		int trim = (int)Math.pow(10, 3);
		int result = random.nextInt(range)+trim;

		if(result>range){
		    result = result - trim;
		}

		String code = String.valueOf(result);
		
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
		}, 30000);  // 30초 후에 실행
		
		return code;
	}
	
	public boolean authenticate(String memberId, String code) throws Exception {
		String authCode = authenticationMap.get(memberId);
		if (authCode == null) throw new Exception("인증시간이 만료되었습니다.");
		log.info("{}, {}", authCode, code);
		if (authCode.equals(code)) return true;
		return false;
		
	}
}
