import pandas as pd

from konlpy.tag import Okt
from collections import Counter


# 거주지 분석
# 거래 내역의 토큰(역삼, 강남 등)으로 거주지 분석
def getResidence(contents):
    korea = getKoreaData()

    okt = Okt()
    li = []
    for content in contents:
        li.extend(okt.nouns(content))
    count = Counter(li)
    df = pd.DataFrame(count, index=[0]).transpose()
    df = df.sort_values(by=[0], ascending=False)

    return getMostFrequent(korea, df.index.values)


# 한국 행정 구역 가져오기
def getKoreaData():
    data = pd.read_csv('csv/data_korea.csv')
    return data[['shortName', '광역시도']].values.tolist()


# 주로 거래하는 구역 가져오기
def getMostFrequent(korea, values):
    for value in values:
        for datum in korea:
            if value in datum[0]:
                return datum[1]
