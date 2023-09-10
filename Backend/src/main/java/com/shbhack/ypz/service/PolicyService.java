package com.shbhack.ypz.service;

import com.shbhack.ypz.domain.Policy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PolicyService {

    List<Policy> retrieveAllPolicy();
}
