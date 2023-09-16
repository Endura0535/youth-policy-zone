package com.shbhack.ypz.service.impl;

import com.shbhack.ypz.domain.Policy;
import com.shbhack.ypz.repo.PolicyRepository;
import com.shbhack.ypz.service.PolicyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PolicyServiceImpl implements PolicyService {

    private final PolicyRepository policyRepository;

    @Override
    public List<Policy> retrieveAllPolicy() {

        var policyList = policyRepository.findAllPolicy().stream()
                .map(p -> Policy.builder()
                        .id(p.getId())
                        .name(p.getName())
                        .policyId(p.getPolicyId())
                        .policyDetail(p.getPolicyDetail())
                        .supportContent(p.getSupportContent())
                        .supportScale(p.getSupportScale())
                        .policyOperationPeriod(p.getPolicyOperationPeriod())
                        .applicationStart(p.getApplicationStart())
                        .applicationEnd(p.getApplicationEnd())
                        .startAge(p.getStartAge())
                        .endAge(p.getEndAge())
                        .major(p.getMajor())
                        .employeedStatus(p.getEmployeedStatus())
                        .specialized(p.getSpecialized())
                        .academicAbility(p.getAcademicAbility())
                        .resiIncomeCondition(p.getResiIncomeCondition())
                        .additional(p.getAdditional())
                        .restriction(p.getRestriction())
                        .applicationProcedure(p.getApplicationProcedure())
                        .submissionDocuments(p.getSubmissionDocuments())
                        .judge(p.getJudge())
                        .applicationURL(p.getApplicationURL())
                        .referenceURL1(p.getReferenceURL1())
                        .referenceURL2(p.getReferenceURL2())
                        .department(p.getDepartment())
                        .build())
                .collect(Collectors.toList());
        
        return policyList;
    }
}
