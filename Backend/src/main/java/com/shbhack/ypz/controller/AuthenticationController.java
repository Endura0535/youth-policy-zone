package com.shbhack.ypz.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shbhack.ypz.dto.request.BankAccountAuthenticateRequestDTO;
import com.shbhack.ypz.dto.request.SignInRequestDTO;
import com.shbhack.ypz.dto.request.SignUpRequestDTO;
import com.shbhack.ypz.dto.response.SignInResponseDTO;
import com.shbhack.ypz.service.AuthenticationService;
import com.shbhack.ypz.service.BankAccountAuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthenticationController {
	
	private final AuthenticationService authenticationService;
	
	private final BankAccountAuthenticationService bankAccountAuthenticationService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody SignUpRequestDTO dto) {
		// TODO id 중복검사
		
		// TODO 예금주 실명조회로 이름 가져오기
		String name = "TEST";
		dto.setName(name);
		
		try {
			authenticationService.signup(dto);
			
			return new ResponseEntity<String>(name, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody SignInRequestDTO dto) {
		
		try {
			SignInResponseDTO response = authenticationService.signin(dto);
			
			return new ResponseEntity<SignInResponseDTO>(response, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@PostMapping("/bank-account-authentication")
	public ResponseEntity<?> authenticateBankAccount(@RequestBody BankAccountAuthenticateRequestDTO dto) {
		
		try {
			bankAccountAuthenticationService.createAuthentication(dto.getMemberId(), dto.getAccountNo());
			
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<String>("계좌 인증 요청에 실패했습니다.", HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@PutMapping("/bank-account-authentication")
	public ResponseEntity<?> authenticateBankAccount(@RequestBody String accountNo, @RequestBody String code) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
