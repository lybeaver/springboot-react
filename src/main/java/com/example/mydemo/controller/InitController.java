package com.example.mydemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.xml.ws.RequestWrapper;

@Controller
@RequestMapping("/scripts/build")
public class InitController {
    @RequestMapping("/index")
    public String init() {
        return "/index";
    }
    @RequestMapping(value = "/login")
    public String login() {
        return "/login";
    }
}
