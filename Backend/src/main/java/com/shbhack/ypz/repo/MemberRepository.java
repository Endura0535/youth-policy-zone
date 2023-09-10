package com.shbhack.ypz.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shbhack.ypz.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{

	Optional<Member> findByMemberId(String memberId);
}
