package com.shbhack.ypz.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shbhack.ypz.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{

	public Member findByMemberId(String memberId); 
}
