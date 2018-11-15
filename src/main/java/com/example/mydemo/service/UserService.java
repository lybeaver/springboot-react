package com.example.mydemo.service;

import com.example.mydemo.beans.tUser;
import com.example.mydemo.beans.tUserExample;
import com.example.mydemo.commonBeans.Aes;
import com.example.mydemo.commonBeans.MsgContant;
import com.example.mydemo.commonBeans.PageBean;
import com.example.mydemo.mapper.common.tUserMapper;
import com.example.mydemo.mapper.user.UserMapper;
import com.example.mydemo.searchBeans.SearchBeanUser;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private tUserMapper tUserMapper;
    @Autowired
    private UserMapper userMapper;

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
        List<tUser> users = tUserMapper.selectByExample(userExample);
        return users;
    }

    /**
     * 检索数据
     * @param searchBeanUser
     * @return
     */
    public PageBean selectUsers(SearchBeanUser searchBeanUser) {
        PageHelper.startPage(searchBeanUser.getCurrentPage(), searchBeanUser.getPageSize());
        List<tUser> allItems = userMapper.selectUsers(searchBeanUser);
        //总记录数
        int counts = allItems.size();
        PageBean<tUser> pageInfo = new PageBean<>(searchBeanUser.getCurrentPage(), searchBeanUser.getPageSize(), counts);
        pageInfo.setItems(allItems);
        return pageInfo;
    }
    /**
     *
     * @param user
     * @return 更新后的用户
     */
    public tUser saveUser(tUser user, String doType) {
        if (doType == "ADD") {
            user.setCreateTime(new Date());
            user.setCounts(Long.parseLong("0"));
            user.setCreateById(new Long(1001));
            user.setUpdateById(new Long(1001));
            user.setUpdateTime(new Date());
            user.setDeleteFlg(MsgContant.DEL_FLG.COMMON.toString());
            user.setPassword(Aes.aesEncrypt("123456"));
            tUserMapper.insertSelective(user);
            return user;
        } else {
            tUser upUser = tUserMapper.selectByPrimaryKey(user.getId());
            if (upUser != null) {
                if (upUser.getDeleteFlg().equals(MsgContant.DEL_FLG.COMMON.toString())) {
                    user.setUpdateById(new Long(1001));
                    user.setUpdateTime(new Date());
                    user.setCounts(upUser.getCounts()+1);
                    tUserMapper.updateByPrimaryKeySelective(user);
                    upUser = tUserMapper.selectByPrimaryKey(user.getId());
                } else {
                    return null;
                }
            }
            return upUser;
        }
    }

    /**
     *
     * @param id
     * @return
     */
     public tUser getUser(Long id) {
         tUser user = tUserMapper.selectByPrimaryKey(id);
         if (user != null && user.getDeleteFlg().equals(MsgContant.DEL_FLG.COMMON.toString())) {
             return user;
         } else {
             return null;
         }
     }
}
