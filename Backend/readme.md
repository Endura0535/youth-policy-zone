# 백엔드 환경설정
```
# 버전 정보
Java : 17
Spring Boot : 3.1.3
MySql : 8.0.x
```

## application.yml

```
spring:
    profiles: # profiles 설정
      active: dev # 다른 설정이 없을 때 default 환경 값
      
    datasource:
        url: jdbc:mysql://localhost:3306/ypz
        username: {username}
        password: {userpw}
        driver-class-name: com.mysql.cj.jdbc.Driver
        
    # jpa설정
    jpa:
      properties: # property 사용 설정
        hibernate: # hibernate property 설정
          ddl-auto: update
          format_sql: true # 보여지는 쿼리를 예쁘게 포맷팅 -> 사용하지않으면 긴 줄 형태로 출력됌

# 로그 레벨 설정
logging:
  level:
    # hibernate 가 남기는 모든 로그가 debug모드로 설정
    # jpa hibernate가 생성하는 sql이 로거를 통해서 찍히도록 하는 설정
    org.hibernate.SQL: debug
    org.hibernate.orm.jdbc.bind: trace
    org.springframework.web.socket: trace
```
