package com.shbhack.ypz.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "recommend_policy")
@NoArgsConstructor
@AllArgsConstructor
public class RecommendPolicy {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recommendPolicyNo;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "memberNo", referencedColumnName = "memberNo", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "policyNo", referencedColumnName = "id", nullable = false)
    private Policy policy;

    private String endDay;
}
