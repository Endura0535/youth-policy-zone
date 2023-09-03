package com.shbhack.ypz.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long mId;
	
	@NotBlank
	private String id;
	
	@NotBlank
	private String password;
	
	@NotBlank
	private String accountNo;
	
	@NotBlank
	private String name;
	
	private int age;
	
	private boolean single;
	
	private int kidsCount;
	
	private int education;
	
	private String residence;

	public Member(String id, String password, String accountNo, String name) {
		this.id = id;
		this.password = password;
		this.accountNo = accountNo;
		this.name = name;
	}
}
