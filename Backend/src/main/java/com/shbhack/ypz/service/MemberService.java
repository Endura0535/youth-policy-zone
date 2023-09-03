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
	
	public Member retrieveMember(String memberId) throws Exception {

		Member member = memberRepository.findByMemberId(memberId);
		
		if (member == null) throw new Exception("존재하지 않는 아이디입니다.");
		
		return member;
	}
	
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

	
	public LoginResponseDTO login(String memberId, String password) throws Exception {
		
		Member member = retrieveMember(memberId);
		
		// 비밀번호 비교
		// TODO password 암호화 후 비교
		if (!member.getPassword().equals(password)) throw new Exception("로그인에 실패하였습니다.");
		
		// TODO AccessToken, RefreshToken 발급
		String accessToken = "testAccessToken";
		String refreshToken = "testRefreshToken";
		
		LoginResponseDTO loginResponseDTO = LoginResponseDTO.builder()
				.member(member)
				.accessToken(accessToken)
				.refreshToken(refreshToken).build();
		
		return loginResponseDTO;
	}
}
