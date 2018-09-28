package com.example.mydemo.controller;

import com.example.mydemo.beans.tUser;
import com.example.mydemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.RequestWrapper;
import java.util.List;

@Controller
@RequestMapping("/public")
public class InitController {
    @Autowired
    private UserService userService;
    @RequestMapping("/index")
    public String init() {
        return "/index";
    }
    @RequestMapping(value = "/login")
    public String login() {
        return "/login";
    }
    @RequestMapping(value = "/getUser")
    @ResponseBody
    public List<tUser> getUser(@RequestBody tUser user) {

        return userService.getUsers(user.getLoginName(),user.getPassword());
    }
}
