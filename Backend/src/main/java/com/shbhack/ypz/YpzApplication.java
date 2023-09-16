package com.shbhack.ypz;

import com.shbhack.ypz.client.ShbFeignClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@EnableFeignClients(basePackages = {"com.shbhack.ypz.client"})
@SpringBootApplication
public class YpzApplication {

	public static void main(String[] args) {
		SpringApplication.run(YpzApplication.class, args);
	}

}
