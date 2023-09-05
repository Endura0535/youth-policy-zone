package com.shbhack.ypz.service;

import com.shbhack.ypz.dto.request.SignInRequestDTO;
import com.shbhack.ypz.dto.request.SignUpRequestDTO;
import com.shbhack.ypz.dto.response.SignInResponseDTO;

public interface AuthenticationService {
    void signup(SignUpRequestDTO request);

    SignInResponseDTO signin(SignInRequestDTO request);
}
