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
@Table(name = "policy")
@NoArgsConstructor
@AllArgsConstructor
public class Policy {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // 정책 번호

    @NotBlank
    private String name;   // 정책 이름

    @NotBlank
    @Column(unique = true)
    private String policyId;    // 정책 아이디

    @NotBlank
    private String policyDetail;    // 정책 소개

    @NotBlank
    private String supportContent;  // 지원 내용

    private String supportScale;    // 지원 규모

    private String policyOperationPeriod;  // 사업 운영 기간

    private String applicationStart;    // 사업 신청 시작일

    private String applicationEnd;  // 사업 신청 종료일

    private int startAge;   // 지원 연령(시작)

    private int endAge;     // 지원 연령(끝)

    private String major;  // 전공 요건

    private String employeedStatus;  // 취업 상태

    private String specialized;    // 특화 분야

    private String academicAbility; // 학력 요건

    private String resiIncomeCondition; // 거주지 및 소득 조건

    private String additional; // 추가 단서 사항

    private String restriction; // 참여 제한 대상

    private String applicationProcedure; // 신청 절차

    private String submissionDocuments; // 제출 서류

    private String judge; // 심사 발표 내용

    private String applicationURL; // 신청 사이트 주소

    private String referenceURL1; // 참고 사이트 1

    private String referenceURL2; // 참고 사이트 2

    private String department; // 주관 부처명

}
