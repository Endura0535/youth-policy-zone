package com.shbhack.ypz.service;

import com.shbhack.ypz.domain.RecommendPolicy;

import java.util.List;

public interface RecommendService {
    List<RecommendPolicy> retrievePolicy(String memberId, Integer page, Integer count);
}
