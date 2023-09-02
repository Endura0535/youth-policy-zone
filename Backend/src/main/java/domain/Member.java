package domain;

import java.math.BigInteger;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
public class Member {

	@Id
	private BigInteger uid;
	
	private String email;
	
	private String password;
	
	private String accountNo;
	
	private String name;
	
	private int age;
	
	@Column(columnDefinition = "TINYINT")
	private boolean single;
	
	private int kidsCount;
	
	private int education;
	
	private String residence;
}
