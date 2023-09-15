package com.shbhack.ypz.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BankAccountAuthenticateRequestDTO {
	private String memberId;
	private String accountNo;

	@JsonCreator
	public BankAccountAuthenticateRequestDTO(@JsonProperty("memberId") String memberId, @JsonProperty("accountNo") String accountNo) {
		this.memberId = memberId;
		this.accountNo = accountNo;
	}
}