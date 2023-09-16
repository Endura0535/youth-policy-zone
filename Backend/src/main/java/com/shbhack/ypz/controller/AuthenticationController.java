package com.shbhack.ypz.controller;

import com.shbhack.ypz.service.ShbService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shbhack.ypz.dto.request.BankAccountAuthenticateAuthRequestDTO;
import com.shbhack.ypz.dto.request.BankAccountAuthenticateRequestDTO;
import com.shbhack.ypz.dto.request.SignInRequestDTO;
import com.shbhack.ypz.dto.request.SignUpRequestDTO;
import com.shbhack.ypz.dto.response.BankAccountAuthenticateResponseDTO;
import com.shbhack.ypz.dto.response.SignInResponseDTO;
import com.shbhack.ypz.service.AuthenticationService;
import com.shbhack.ypz.service.BankAccountAuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Slf4j
public class AuthenticationController {
	
	private final AuthenticationService authenticationService;
	
	private final BankAccountAuthenticationService bankAccountAuthenticationService;

	private final ShbService shbService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody SignUpRequestDTO dto) {
		log.info("--------------signup called-------------- {}", dto);
		// id 중복검사
		if(authenticationService.isExistMember(dto.getMemberId())) {
			return new ResponseEntity<String>("이미 존재하는 아이디입니다.", HttpStatus.CONFLICT);
		}

		try {
			authenticationService.signup(dto);

			return new ResponseEntity<String>(dto.getName(), HttpStatus.OK);

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
		log.info("--------------authenticateBankAccount called--------------");
		try {
			String code = bankAccountAuthenticationService.createAuthentication(dto.getMemberId(), dto.getAccountNo());
			
			return new ResponseEntity<String>(code, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<String>("계좌 인증 요청에 실패했습니다.", HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@PutMapping("/bank-account-authentication")
	public ResponseEntity<?> authenticateBankAccount(@RequestBody BankAccountAuthenticateAuthRequestDTO dto) {
		String memberId = dto.getMemberId();
		String code = dto.getCode();
		log.info("authenticateBankAccount: {}", dto);
		if (memberId == null || code == null) return ResponseEntity.badRequest().build();
		boolean result = false;
		
		try {
			result = bankAccountAuthenticationService.authenticate(dto.getMemberId(), dto.getCode());
		} catch (Exception e) {
			return ResponseEntity.ok(new BankAccountAuthenticateResponseDTO(false, e.getMessage()));
		}
		
		if (result) {
			// 예금주 실명 조회 : 은행 코드, 계좌번호 받아서 넣기(signUpRequestDTO에 계좌 번호 추가 필요)
			String bankCode = "088";
			String accountNo = dto.getAccountNo();

			String name = shbService.searchName(bankCode, accountNo);
			log.info("--------------name: " + name + "--------------");
			
			return ResponseEntity.ok(new BankAccountAuthenticateResponseDTO(true, name));
		}
		else return ResponseEntity.ok(new BankAccountAuthenticateResponseDTO(false, "인증번호가 일치하지 않습니다."));
	}
}
