package com.example.mydemo.controller;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mydemo.beans.tUser;
import com.example.mydemo.commons.*;
import com.example.mydemo.service.UserService;
import org.codehaus.plexus.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/public")
public class InitController {
    @Autowired
    private UserService userService;
    Logger log = LoggerFactory.getLogger(getClass());
    @RequestMapping(value="/getUserList",headers = "Accept=application/json",method=RequestMethod.GET)
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

    @RequestMapping(value="/getUser/{id}",method = RequestMethod.GET)
    public Result getUser(@PathVariable Long id) {
        tUser user = userService.getUser(id);
        if (user == null) {
            return Result.result(null,null,false, StatusCode.FIND_ERROR, ResultType.FIND_FAULT);
        }
        return Result.result(user,null,true, StatusCode.FIND_SUCCESS, ResultType.FIND_SUCCESS);
    }

    @RequestMapping(value = "/login",headers = "Accept=application/json",method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestBody tUser user) {
        tUser loginUser = null;
        String token = null;
        if (StringUtils.isNotBlank(user.getLoginName()) && StringUtils.isNotBlank(user.getPassword())) {
            List<tUser> userList = userService.getUsers(user.getLoginName(), Aes.aesEncrypt(user.getPassword()));
            if (userList != null && userList.size() > 0) {
                loginUser = userList.get(0);
            }
        }
        if (loginUser != null) {
            token = Encrypt.getToken(user.getLoginName(),user.getPassword());
        }
        return token;
    }

    @RequestMapping(value = "/addUser",method = RequestMethod.POST)
    public Result addUser(@RequestBody tUser user) {
        tUser newUser = userService.saveUser(user,"ADD");
        if (newUser == null) {
            return Result.result(null,null,true, StatusCode.SAVE_SUCCESS, ResultType.SAVE_SUCCESS);
        } else {
            return Result.result(newUser,null,true, StatusCode.SAVE_SUCCESS, ResultType.SAVE_SUCCESS);
        }
    }

    @RequestMapping(value = "/updateUser",method = RequestMethod.POST)
    public Result updateUser(@RequestBody tUser user) {
        tUser upUser = userService.saveUser(user,"EDIT");
        if (upUser == null) {
            return Result.result(null,null,true, StatusCode.SAVE_SUCCESS, ResultType.SAVE_SUCCESS);
        } else {
            return Result.result(upUser,null,true, StatusCode.SAVE_SUCCESS, ResultType.SAVE_SUCCESS);
        }
    }

}
