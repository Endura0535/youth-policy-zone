package com.shbhack.ypz.controller;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.domain.Policy;
import com.shbhack.ypz.domain.RecommendPolicy;
import com.shbhack.ypz.dto.request.RecommendPolicyRequestDTO;
import com.shbhack.ypz.service.PolicyService;
import com.shbhack.ypz.service.RecommendService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Tag(name = "recommend", description = "추천")
@RestController
@RequiredArgsConstructor
@RequestMapping("/recommend")
@Slf4j
public class RecommendController {

    private final RecommendService recommendService;
    private final PolicyService policyService;

    @PostMapping("/")
    public ResponseEntity<?> retrieveRecommendPolicy(@AuthenticationPrincipal UserDetails userDetails, @RequestBody RecommendPolicyRequestDTO dto) {

        log.info("--------------------recommendAllPolicy called--------------------");

        try {
            Member member = (Member) userDetails;

            Map<String, Object> res = new HashMap<>();

            List<RecommendPolicy> recommendList = recommendService.retrievePolicy(member.getMemberId(), dto.getPage(), dto.getCount());
            res.put("recommendPolicy", recommendList);

            return new ResponseEntity<Map>(res, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<String>("추천 정책 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

    }
}
