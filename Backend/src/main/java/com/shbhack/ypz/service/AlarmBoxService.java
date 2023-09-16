package com.shbhack.ypz.service;

import com.shbhack.ypz.dto.response.RetrieveAlarmBoxResponseDTO;

import java.util.List;

public interface AlarmBoxService {

    List<RetrieveAlarmBoxResponseDTO> retrieveAlarmBox(String memberId);
}
