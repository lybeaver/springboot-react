package com.example.mydemo.service;

import com.example.mydemo.beans.tUser;
import com.example.mydemo.beans.tUserExample;
import com.example.mydemo.mapper.tUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private tUserMapper userMapper;

    public List<tUser> getUsers(String userName, String password) {
        tUserExample userExample = new tUserExample();
        userExample.createCriteria().andLoginNameEqualTo(userName).andPasswordEqualTo(password);
        List<tUser> users = userMapper.selectByExample(userExample);
        return users;
    }
}
