package com.example.mydemo.controller;

import com.alibaba.fastjson.JSON;
import com.example.mydemo.beans.tUser;
import com.example.mydemo.service.UserService;
import org.codehaus.plexus.util.CollectionUtils;
import org.codehaus.plexus.util.StringUtils;
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
    @RequestMapping(method=RequestMethod.GET,value="/getUserList")
    public List<tUser> init() {
        List<tUser> userList = userService.getUsers(null,null);
        return userList;
    }
    @RequestMapping(method=RequestMethod.GET,value="/getUser")
    public tUser getUser(tUser user) {
        tUser loginUser = null;
        if (StringUtils.isNotBlank(user.getName()) && StringUtils.isNotBlank(user.getPassword())) {
            List<tUser> userList = userService.getUsers(user.getName(),user.getPassword());
            if (userList != null && userList.size() > 0) {
                loginUser = userList.get(0);
            }
        }
        return loginUser;
    }
    @RequestMapping(value = "/login")
    public String login() {
        return "/login";
    }

}
