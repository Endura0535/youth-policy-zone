package com.shbhack.ypz.controller;

import com.shbhack.ypz.domain.Policy;
import com.shbhack.ypz.service.PolicyService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Tag(name = "policy", description = "정책")
@RestController
@RequiredArgsConstructor
@RequestMapping("/policy")
@Slf4j
public class PolicyController {

    private final PolicyService policyService;

    @GetMapping("/all")
    public ResponseEntity<?> retrieveAllPolicy() {

        log.info("--------------------retrieveAllPolicy called--------------------");

        try {
            // TODO AccessToken 검증

            Map<String, Object> res = new HashMap<>();
            List<Policy> policyList = policyService.retrieveAllPolicy();
            res.put("policy", policyList);

            return new ResponseEntity<Map>(res, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<String>("정책 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

    }

}
