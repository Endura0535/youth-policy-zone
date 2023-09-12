package com.shbhack.ypz.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.domain.Role;
import com.shbhack.ypz.dto.request.SignInRequestDTO;
import com.shbhack.ypz.dto.request.SignUpRequestDTO;
import com.shbhack.ypz.dto.response.SignInResponseDTO;
import com.shbhack.ypz.repo.MemberRepository;
import com.shbhack.ypz.service.AuthenticationService;
import com.shbhack.ypz.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
	private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public void signup(SignUpRequestDTO request) {

        var member = Member.builder().memberId(request.getMemberId())
                .memberPwd(passwordEncoder.encode(request.getPassword()))
        		.name(request.getName())
        		.accountNo(request.getAccountNo())
                .role(Role.USER).build();
        memberRepository.save(member);
        return;
    }

    public SignInResponseDTO signin(SignInRequestDTO request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getMemberId(), request.getPassword()));

        var member = memberRepository.findByMemberId(request.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid ID or password."));
        var jwt = jwtService.generateToken(member);
        return SignInResponseDTO.builder().token(jwt).build();
    }

    @Override
    public boolean isExistMember(String memberId) {
        return memberRepository.findByMemberId(memberId).isPresent();
    }
}
