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
        	    .map(p -> {
        	        Policy policy = new Policy();
        	        policy.setId(p.getId());
        	        policy.setName(p.getName());
        	        policy.setPolicyId(p.getPolicyId());
        	        policy.setPolicyDetail(p.getPolicyDetail());
        	        policy.setSupportContent(p.getSupportContent());
        	        policy.setSupportScale(p.getSupportScale());
        	        policy.setPolicyOperationPeriod(p.getPolicyOperationPeriod());
        	        policy.setApplicationStart(p.getApplicationStart());
        	        policy.setApplicationEnd(p.getApplicationEnd());
        	        policy.setStartAge(p.getStartAge());
        	        policy.setEndAge(p.getEndAge());
        	        policy.setMajor(p.getMajor());
        	        policy.setEmployeedStatus(p.getEmployeedStatus());
        	        policy.setSpecialized(p.getSpecialized());
        	        policy.setAcademicAbility(p.getAcademicAbility());
        	        policy.setResiIncomeCondition(p.getResiIncomeCondition());
        	        policy.setAdditional(p.getAdditional());
        	        policy.setRestriction(p.getRestriction());
        	        policy.setApplicationProcedure(p.getApplicationProcedure());
        	        policy.setSubmissionDocuments(p.getSubmissionDocuments());
        	        policy.setJudge(p.getJudge());
        	        policy.setApplicationURL(p.getApplicationURL());
        	        policy.setReferenceURL1(p.getReferenceURL1());
        	        policy.setReferenceURL2(p.getReferenceURL2());
        	        policy.setDepartment(p.getDepartment());
        	        return policy;
        	    })
        	    .collect(Collectors.toList());
        
        return policyList;
    }
}
