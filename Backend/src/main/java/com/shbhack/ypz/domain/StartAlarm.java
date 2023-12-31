package com.shbhack.ypz.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "start_alarm")
@NoArgsConstructor
@AllArgsConstructor
public class StartAlarm {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long startAlarmNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "memberNo", referencedColumnName = "memberNo", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "policyNo", referencedColumnName = "id", nullable = false)
    private Policy policy;

}
