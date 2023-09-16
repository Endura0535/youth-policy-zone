package com.shbhack.ypz.config;

import io.swagger.v3.oas.models.OpenAPI;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi member() {
        String[] paths = {"/member/**"};
        return GroupedOpenApi.builder().group("member").pathsToMatch(paths)
                .build();
    }

    @Bean
    public GroupedOpenApi alert() {
        String[] paths = {"/alert/**"};
        return GroupedOpenApi.builder().group("alert").pathsToMatch(paths)
                .build();
    }

    @Bean
    public GroupedOpenApi policy() {
        String[] paths = {"/policy/**"};
        return GroupedOpenApi.builder().group("policy").pathsToMatch(paths)
                .build();
    }

    @Bean
    public GroupedOpenApi auth() {
        String[] paths = {"/auth/**"};
        return GroupedOpenApi.builder().group("auth").pathsToMatch(paths)
                .build();
    }

    @Bean
    public OpenAPI springOpenApi() {
        return new OpenAPI().info(new io.swagger.v3.oas.models.info.Info()
                .title("YPZ API")
                .description("YPZ API")
                .version("v1.0.0"));
    }

    @Bean
    public GroupedOpenApi recommend() {
        String[] paths = {"/recommend/**"};
        return GroupedOpenApi.builder().group("recommend").pathsToMatch(paths)
                .build();
    }
}
