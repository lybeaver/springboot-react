package com.example.mydemo.controller;

import com.example.mydemo.beans.tUser;
import com.example.mydemo.commons.Encrypt;
import com.example.mydemo.service.UserService;
import org.codehaus.plexus.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    @RequestMapping(value = "/login",headers = "Accept=application/json",method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestBody tUser user) {
        tUser loginUser = null;
        String token = null;
        if (StringUtils.isNotBlank(user.getLoginName()) && StringUtils.isNotBlank(user.getPassword())) {
            List<tUser> userList = userService.getUsers(user.getLoginName(),user.getPassword());
            if (userList != null && userList.size() > 0) {
                loginUser = userList.get(0);
            }
        }
        if (loginUser != null) {
            token = Encrypt.getToken(user.getLoginName(),user.getPassword());
        }
        return token;
    }

    @RequestMapping(value = "/loginMap",method = RequestMethod.POST)
    @ResponseBody
    public String loginMap(@RequestBody String user) {
        tUser loginUser = null;
        String token = null;
        if (user != null) {
            System.out.println("mapamp"+user);
        }
        return token;
    }

}
