package com.shbhack.ypz.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "remind_alarm")
@NoArgsConstructor
@AllArgsConstructor
public class RemindAlarm {

    private static final long serailVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long remindAlarmNo;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "memberNo", referencedColumnName = "memberNo", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "policyNo", referencedColumnName = "id", nullable = false)
    private Policy policy;

    @NotBlank
    private String startDt;

    @NotBlank
    private String finishDt;

}
