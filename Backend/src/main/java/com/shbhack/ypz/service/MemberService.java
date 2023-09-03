package com.shbhack.ypz.service;

import org.springframework.stereotype.Service;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.dto.LoginResponseDTO;
import com.shbhack.ypz.repo.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {

	private final MemberRepository memberRepository;
	
	public String join(String memberId, String password, String accountNo) throws Exception {
		
		// TODO id 중복검사
		
		// TODO 예금주 실명조회로 이름 가져오기
		String name = "TEST";
		
		// TODO password 암호화
		
		Member newMember = Member.builder()
				.memberId(memberId)
				.password(password)
				.accountNo(accountNo)
				.name(name).build();
		
		try {
			memberRepository.save(newMember);
		} catch (Exception e) {
			throw e;
		}
		
		return name;
	}
}
