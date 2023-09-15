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
                        .alarmType(p.getAlarmType())
                        .expireDt(p.getExpireDt())
                        .build())
                .collect(Collectors.toList());

        return policyList;
    }
}
