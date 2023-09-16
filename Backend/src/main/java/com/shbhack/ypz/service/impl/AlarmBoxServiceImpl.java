package com.shbhack.ypz.service.impl;

import com.shbhack.ypz.domain.AlarmBox;
import com.shbhack.ypz.dto.response.RetrieveAlarmBoxResponseDTO;
import com.shbhack.ypz.repo.AlarmBoxRepository;
import com.shbhack.ypz.service.AlarmBoxService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AlarmBoxServiceImpl implements AlarmBoxService {

    private final AlarmBoxRepository alarmBoxRepository;
    @Override
    public List<RetrieveAlarmBoxResponseDTO> retrieveAlarmBox(String memberId) {
        List<AlarmBox> AlarmBoxList = alarmBoxRepository.findAllByMemberId(memberId);

        List<RetrieveAlarmBoxResponseDTO> alarmBoxList = AlarmBoxList.stream()
                .map(a -> RetrieveAlarmBoxResponseDTO.builder()
                        .name(a.getPolicy().getName())
                        .type(a.getAlarmType())
                        .build())
                .collect(Collectors.toList());

        return alarmBoxList;
    }
}
