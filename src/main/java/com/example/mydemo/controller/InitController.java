package com.example.mydemo.controller;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mydemo.beans.tUser;
import com.example.mydemo.commonBeans.*;
import com.example.mydemo.searchBeans.SearchBeanUser;
import com.example.mydemo.service.UserService;
import org.codehaus.plexus.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/public")
public class InitController {
    @Autowired
    private UserService userService;
    SearchBeanUser formUser = new SearchBeanUser();
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
            return Result.result(null,null,false, StatusCode.FIND_ERROR, ResultType.FIND_FAULT, MsgContant.ICON.ERROR.toString());
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

    @RequestMapping(value = "/searchUsers",method = RequestMethod.POST)
    public Result searchUsers(@RequestBody SearchBeanUser user) {
        System.out.println("qnmlgbd :"+user.getCurrentPage());
        user.setCurrentPage(user.getCurrentPage() != null ? user.getCurrentPage() : ResultType.PAGE_INIT);
        user.setPageSize(ResultType.PAGE_SIZES);
        BeanUtils.copyProperties(user, formUser);
        PageBean<tUser> pageInfo = userService.selectUsers(user);
        return Result.result(null,pageInfo,true, StatusCode.FIND_SUCCESS, ResultType.FIND_SUCCESS, MsgContant.ICON.SUCCESS.toString());
    }

    @RequestMapping(value = "/addUser",method = RequestMethod.POST)
    public Result addUser(@RequestBody SearchBeanUser user) {
        tUser newUser = userService.saveUser(user,"ADD");
        Result result = searchUsers(formUser);
        if (newUser == null) {
            return Result.result(null,result.getPageInfo(),false, StatusCode.SAVE_ERROR, ResultType.SAVE_FAULT, MsgContant.ICON.ERROR.toString());
        } else {
            return Result.result(newUser,result.getPageInfo(),true, StatusCode.SAVE_SUCCESS, ResultType.SAVE_SUCCESS, MsgContant.ICON.SUCCESS.toString());
        }
    }

    @RequestMapping(value = "/updateUser",method = RequestMethod.POST)
    public Result updateUser(@RequestBody SearchBeanUser user) {
        tUser upUser = userService.saveUser(user,"EDIT");
        Result result = searchUsers(formUser);
        if (upUser == null) {
            return Result.result(null,result.getPageInfo(),false, StatusCode.SAVE_ERROR, ResultType.SAVE_FAULT, MsgContant.ICON.ERROR.toString());
        } else {
            return Result.result(upUser,result.getPageInfo(),true, StatusCode.SAVE_SUCCESS, ResultType.SAVE_SUCCESS, MsgContant.ICON.SUCCESS.toString());
        }
    }

    @RequestMapping(value = "/deleteUser/{id}",method = RequestMethod.GET)
    public Result deleteUser(@PathVariable Long id) {
        tUser user = new tUser();
        user.setId(id);
        tUser upUser = userService.saveUser(user,"DELETE");
        Result result = searchUsers(formUser);
        if (upUser == null) {
            return Result.result(null,result.getPageInfo(),false, StatusCode.REMOVE_ERROR, ResultType.REMOVE_FAULT, MsgContant.ICON.ERROR.toString());
        }
        return Result.result(upUser,result.getPageInfo(),true, StatusCode.REMOVE_SUCCESS, ResultType.REMOVE_SUCCESS, MsgContant.ICON.SUCCESS.toString());
    }

}
