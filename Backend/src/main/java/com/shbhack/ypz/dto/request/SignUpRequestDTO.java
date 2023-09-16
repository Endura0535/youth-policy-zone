package com.shbhack.ypz.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequestDTO {

	private String memberId;
	private String password;
	private String name;
	private String accountNo;
	
}
