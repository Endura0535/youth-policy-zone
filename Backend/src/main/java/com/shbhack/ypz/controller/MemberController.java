package com.shbhack.ypz.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.domain.Role;
import com.shbhack.ypz.dto.request.BankAccountAuthenticateRequestDTO;
import com.shbhack.ypz.dto.request.SignUpRequestDTO;
import com.shbhack.ypz.dto.response.SignInResponseDTO;
import com.shbhack.ypz.dto.request.SignInRequestDTO;
import com.shbhack.ypz.service.AuthenticationService;
import com.shbhack.ypz.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Slf4j
public class MemberController {

	private final MemberService memberService;
	
	@GetMapping("/{memberId}")
	public ResponseEntity<?> retrieve(@PathVariable String memberId) {
		
		try {
			Member member = memberService.retrieveMember(memberId);
			
			return new ResponseEntity<Member>(member, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<String>("회원 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
		}

	}
	
	@PutMapping("/{memberId}")
	public ResponseEntity<?> update(@PathVariable String memberId, @RequestHeader("Authorization") String accessToken,
			@RequestBody Member updatedMember) {
		
		// TODO AccessToken 검증
		
		try {
			if (!memberId.equals(updatedMember.getMemberId())) throw new Exception();
			
			memberService.retrieveMember(memberId);
			
		} catch(Exception e) {
			return new ResponseEntity<String>("회원 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
		}
		
		try {
			memberService.updateMemberInfo(updatedMember);
		} catch (Exception e) {
			return new ResponseEntity<String>("회원 정보를 수정하는데 실패하였습니다.", HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}

}
