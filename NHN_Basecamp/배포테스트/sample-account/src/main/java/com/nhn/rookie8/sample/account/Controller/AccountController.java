package com.nhn.rookie8.sample.account.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccountController {
    @GetMapping("/")
    public String hello() {
        return "Hello";
    }
}
