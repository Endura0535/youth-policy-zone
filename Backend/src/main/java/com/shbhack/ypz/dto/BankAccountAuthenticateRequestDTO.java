package com.shbhack.ypz.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BankAccountAuthenticateRequestDTO {
	private String memberId;
	private String accountNo;
}
