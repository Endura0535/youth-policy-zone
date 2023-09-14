package com.shbhack.ypz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class YpzApplication {

	public static void main(String[] args) {
		SpringApplication.run(YpzApplication.class, args);
	}

}
