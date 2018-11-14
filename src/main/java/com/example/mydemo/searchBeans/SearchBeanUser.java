package com.example.mydemo.searchBeans;

import com.example.mydemo.beans.tUser;

/**
 * @program: mydemo
 * @description: user查询条件
 * @author: Chenglin
 * @create: 2018-11-14 14:03
 **/

public class SearchBeanUser extends tUser {

    private Integer currentPage = 1;

    private Integer pageSize = 10;

    public Integer getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(Integer currentPage) {
        this.currentPage = currentPage;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
