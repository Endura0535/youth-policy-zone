package com.shbhack.ypz.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.repo.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {
	
	private final MemberRepository memberRepository;
	
	public Member retrieveMember(String memberId) throws Exception {

		var member = memberRepository.findByMemberId(memberId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid ID or password."));
		
		return member;
	}

	public void updateMemberInfo(Member updatedMember) throws Exception {
		Member member = retrieveMember(updatedMember.getMemberId());

		// TODO 업데이트 회원 정보 검증
		
		member = Member.builder()
			.age(updatedMember.getAge())
			.education(updatedMember.getEducation())
			.kidsCount(updatedMember.getKidsCount())
			.password(updatedMember.getPassword())
			.residence(updatedMember.getResidence())
			.single(updatedMember.isSingle())
			.build();
		
		memberRepository.saveAndFlush(member);
	}

    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String memberId) {
                return memberRepository.findByMemberId(memberId)
                        .orElseThrow(() -> new UsernameNotFoundException("member not found"));
            }
        };
    }
}
