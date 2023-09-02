package com.shbhack.ypz.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shbhack.ypz.service.MemberService;

import domain.Member;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

	private MemberService service;
	
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody String id, @RequestBody String password,
			@RequestBody String accountNo) {

		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody String id, @RequestBody String password) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> retrieve(@PathVariable String id, @RequestHeader("Authorization") String AccessToken) {

		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestHeader("Authorization") String AccessToken,
			@RequestBody Member member) {

		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/bank-account-authentication")
	public ResponseEntity<?> authenticateBankAccount(@RequestBody String accountNo) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/bank-account-authentication")
	public ResponseEntity<?> authenticateBankAccount(@RequestBody String accountNo, @RequestBody String code) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
