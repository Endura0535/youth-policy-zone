package com.shbhack.ypz.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Slf4j
public class MemberController {

	private final MemberService memberService;
	
	@GetMapping
	public ResponseEntity<?> retrieve(@AuthenticationPrincipal UserDetails userDetails) {
		
		return (new ResponseEntity<Member>((Member) userDetails, HttpStatus.OK)) ;

	}
	
	@PutMapping
	public ResponseEntity<?> update(@AuthenticationPrincipal UserDetails userDetails, @RequestBody Member updatedMember) {
		
		try {
			memberService.updateMemberInfo(updatedMember);
		} catch (Exception e) {
			return new ResponseEntity<String>("회원 정보를 수정하는데 실패하였습니다.", HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}

}
