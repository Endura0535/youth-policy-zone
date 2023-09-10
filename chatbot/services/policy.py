import requests
import bs4
import json


def getPolicyInfo():
    policyList = []

    # 청년정책 정보 api metadata
    
    idx = 1

    # 청년정책 정보 수집 및 저장
    while True:
        policyInfo = {}

        # 청년정책 파라미터 변경 및 요청
        params['pageIndex'] = idx
        response = requests.get(URL, params=params)
        content = response.text

        # item tag 분리
        xml_obj = bs4.BeautifulSoup(content, 'lxml-xml')
        rows = xml_obj.findAll('youthPolicy')

        # 더 이상 정책이 없는 경우
        if idx == 3:
        # if len(rows) == 0:
            break

        # 컬럼 값 조회
        columns = rows[0].find_all()
        for i in range(0, len(columns)):
            policyInfo[columns[i].name] = columns[i].text

        policyList.append(policyInfo)

        idx += 1

    return policyList
