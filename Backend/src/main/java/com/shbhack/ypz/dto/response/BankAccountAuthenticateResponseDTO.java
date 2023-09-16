package com.shbhack.ypz.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BankAccountAuthenticateResponseDTO {
	private boolean result;
	private String message;
}
