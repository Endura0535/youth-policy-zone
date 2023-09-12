package com.shbhack.ypz.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Entity
@Builder
@Table(name="policy")
@NoArgsConstructor
@AllArgsConstructor
public class Policy {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long policyNo;

    @NotBlank
    @Column(unique = true)
    private String policyId;

    @NotBlank
    private char alarmType;

    @NotBlank
    private Date expireDt;

}
