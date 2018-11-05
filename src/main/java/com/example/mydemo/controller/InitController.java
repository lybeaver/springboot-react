package com.example.mydemo.controller;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mydemo.beans.tUser;
import com.example.mydemo.commons.*;
import com.example.mydemo.service.UserService;
import org.codehaus.plexus.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/public")
public class InitController {
    @Autowired
    private UserService userService;
    @RequestMapping(method=RequestMethod.GET,headers = "Accept=application/json",value="/getUserList")
    public Result init(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        List<tUser> userList = null;
        System.out.println("tokentoken:"+token);
        if (token == null) {
            return Result.result(null,null,false, StatusCode.NO_PERMISS, ResultType.NO_PERMISSIONS);
        } else {
            DecodedJWT dec = Decrypt.deToken(token);
            if (dec == null) {
                return Result.result(null,null,false, StatusCode.LOGIN_OUT, ResultType.LOGIN_OUT);
            }
        }
        userList = userService.getUsers(null,null);
        return Result.result(userList,null,true, StatusCode.FIND_SUCCESS, ResultType.FIND_SUCCESS);
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
    @RequestMapping(value = "/addUser",method = RequestMethod.PUT)
    public Result addUser(tUser user) {
        tUser newUser = userService.updateUser(user);
        if (newUser == null) {
            List<tUser> userList = userService.getUsers(null,null);
            return Result.result(userList,null,false, StatusCode.SAVE_ERROR, ResultType.SAVE_FAULT);
        } else {
            List<tUser> userList = userService.getUsers(null,null);
            return Result.result(userList,null,true, StatusCode.SAVE_SUCCESS, ResultType.SAVE_SUCCESS);
        }
    }

}
