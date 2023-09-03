package com.shbhack.ypz.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long mId;
	
	@NotBlank
	@Column(unique=true)
	private String memberId;
	
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
}
