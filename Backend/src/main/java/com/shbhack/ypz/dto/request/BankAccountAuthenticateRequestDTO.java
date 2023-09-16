package com.shbhack.ypz.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BankAccountAuthenticateRequestDTO {
	private String memberId;
	private String accountNo;
}