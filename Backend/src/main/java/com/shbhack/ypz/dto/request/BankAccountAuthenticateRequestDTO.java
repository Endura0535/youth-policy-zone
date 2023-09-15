package com.shbhack.ypz.dto.request;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class BankAccountAuthenticateRequestDTO {
	private String memberId;
	private String accountNo;

	@JsonCreator
	public BankAccountAuthenticateRequestDTO(@JsonProperty("memberId") String memberId, @JsonProperty("accountNo") String accountNo) {
		this.memberId = memberId;
		this.accountNo = accountNo;
	}
}