package com.example.mydemo.service;

import com.example.mydemo.beans.tUser;
import com.example.mydemo.beans.tUserExample;
import com.example.mydemo.commons.MsgContant;
import com.example.mydemo.mapper.tUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private tUserMapper userMapper;

    /**
     *
     * @param userName
     * @param password
     * @return 返回用户
     */
    public List<tUser> getUsers(String userName, String password) {
        tUserExample userExample = new tUserExample();
        if (userName == null && password == null) {
            userExample.createCriteria().andDeleteFlgEqualTo(MsgContant.DEL_FLG.COMMON.toString());
        } else {
            userExample.createCriteria().andLoginNameEqualTo(userName).andPasswordEqualTo(password).andDeleteFlgEqualTo(MsgContant.DEL_FLG.COMMON.toString());
        }
        List<tUser> users = userMapper.selectByExample(userExample);
        return users;
    }

    /**
     *
     * @param user
     * @return 更新后的用户
     */
    public tUser updateUser(tUser user) {
        tUser upUser = userMapper.selectByPrimaryKey(user.getId());
        if (upUser != null && upUser.getDeleteFlg().equals(MsgContant.DEL_FLG.COMMON.toString())) {
            userMapper.updateByPrimaryKeySelective(user);
            upUser = userMapper.selectByPrimaryKey(user.getId());
        }
        return upUser;
    }

    /**
     *
     * @param id
     * @return
     */
     public tUser getUser(Long id) {
         tUser user = userMapper.selectByPrimaryKey(id);
         if (user != null && user.getDeleteFlg().equals(MsgContant.DEL_FLG.COMMON.toString())) {
             return user;
         } else {
             return null;
         }
     }
}
