package com.shbhack.ypz.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Entity
@Table(name = "alarm_box")
@NoArgsConstructor
@AllArgsConstructor
public class AlarmBox {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long alarmBoxNo;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "memberNo", referencedColumnName = "memberNo", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "policyNo", referencedColumnName = "id", nullable = false)
    private Policy policy;

    @Column(nullable = false)
    private Character alarmType;

    @Column(nullable = false)
    private Date expireDt;

}
