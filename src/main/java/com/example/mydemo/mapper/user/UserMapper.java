package com.example.mydemo.mapper.user;

import com.example.mydemo.beans.tUser;
import com.example.mydemo.searchBeans.SearchBeanUser;

import java.util.List;

public interface UserMapper {
    List<tUser> selectUsers(SearchBeanUser searchBeanUser);
}
