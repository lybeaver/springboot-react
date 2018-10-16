package com.example.mydemo.controller;

import com.alibaba.fastjson.JSON;
import com.example.mydemo.beans.tUser;
import com.example.mydemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.RequestWrapper;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/public")
public class InitController {
    @Autowired
    private UserService userService;
    @RequestMapping(method=RequestMethod.GET,value="/index")
    public List<tUser> init() {
        List<tUser> userList = new ArrayList<tUser>();
        tUser user1 = new tUser();
        tUser user2 = new tUser();
        user1.setName("chenglin");
        user1.setPassword("123456");
        user2.setName("tom");
        user2.setPassword("123456");
        userList.add(user1);
        userList.add(user2);
        return userList;
    }
    @RequestMapping(method=RequestMethod.GET,value="/getUser")
    public tUser getUser() {
        tUser user1 = new tUser();
        user1.setName("chenglin");
        user1.setPassword("123456");
        return user1;
    }
    @RequestMapping(value = "/login")
    public String login() {
        return "/login";
    }

}
