package com.shbhack.ypz.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BankAccountAuthenticateRequestDTO {
	private String memberId;
	private String accountNo;
}
