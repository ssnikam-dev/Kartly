package com.example.ecommerce.configuration.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private final AuthenticationProvider authenticationProvider;
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	public SecurityConfig(
	        JwtAuthenticationFilter jwtAuthenticationFilter,
	        AuthenticationProvider authenticationProvider) {
	    this.authenticationProvider = authenticationProvider;
	    this.jwtAuthenticationFilter = jwtAuthenticationFilter;
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

	    http
	        .cors(cors -> {})
	        .csrf(csrf -> csrf.disable())

	        .sessionManagement(session ->
	            session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	        )

	        .authenticationProvider(authenticationProvider)

	        .authorizeHttpRequests(auth -> auth

	            // Public Swagger endpoints
	            .requestMatchers(
	                "/swagger-ui/**",
	                "/swagger-ui.html",
	                "/swagger.html",
	                "/v3/api-docs/**"
	            ).permitAll()

	            // Public authentication endpoints
	            .requestMatchers(HttpMethod.POST,
	                "/api/auth/login",
	                "/api/auth/register",
	                "/login"
	            ).permitAll()

	            // Protected API endpoints
	            .requestMatchers("/api-data/**").authenticated()

	            .requestMatchers(
	                HttpMethod.POST,
	                "/api/auth/get-user-access"
	            ).authenticated()

	            // All other requests require authentication
	            .anyRequest().authenticated()
	        )

	        .addFilterBefore(
	            jwtAuthenticationFilter,
	            UsernamePasswordAuthenticationFilter.class
	        );

	    return http.build();
	}

}
