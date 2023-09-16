package com.shbhack.ypz.service.impl;

import com.shbhack.ypz.domain.RecommendPolicy;
import com.shbhack.ypz.repo.RecommendPolicyRepository;
import com.shbhack.ypz.service.RecommendService;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService {

    private final RecommendPolicyRepository recommendPolicyRepository;
    private final EntityManager em;

    @Override
    public List<RecommendPolicy> retrievePolicy(String memberId, Integer page, Integer count) {

        val pageRequest = PageRequest.of(page, count, Sort.by(Sort.Direction.ASC, "endDay"));

        List<RecommendPolicy> recommendPolicyList = recommendPolicyRepository.findAllByMemberId(memberId, pageRequest);

        return recommendPolicyList;
    }
}
