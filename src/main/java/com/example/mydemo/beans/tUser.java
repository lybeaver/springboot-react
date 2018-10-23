package com.example.mydemo.beans;

import java.util.Date;

public class tUser {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.name
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private String name;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.telephone
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private String telephone;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.sex
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private String sex;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.login_name
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private String loginName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.password
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private String password;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.brithday
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Date brithday;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.create_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Date createTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.update_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Date updateTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.create_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long createById;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.update_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long updateById;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.counts
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long counts;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.delete_flg
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private String deleteFlg;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public tUser(Long id, String name, String telephone, String sex, String loginName, String password, Date brithday, Date createTime, Date updateTime, Long createById, Long updateById, Long counts, String deleteFlg) {
        this.id = id;
        this.name = name;
        this.telephone = telephone;
        this.sex = sex;
        this.loginName = loginName;
        this.password = password;
        this.brithday = brithday;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.createById = createById;
        this.updateById = updateById;
        this.counts = counts;
        this.deleteFlg = deleteFlg;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public tUser() {
        super();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.id
     *
     * @return the value of t_user.id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.id
     *
     * @param id the value for t_user.id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.name
     *
     * @return the value of t_user.name
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.name
     *
     * @param name the value for t_user.name
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.telephone
     *
     * @return the value of t_user.telephone
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public String getTelephone() {
        return telephone;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.telephone
     *
     * @param telephone the value for t_user.telephone
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setTelephone(String telephone) {
        this.telephone = telephone == null ? null : telephone.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.sex
     *
     * @return the value of t_user.sex
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public String getSex() {
        return sex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.sex
     *
     * @param sex the value for t_user.sex
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.login_name
     *
     * @return the value of t_user.login_name
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public String getLoginName() {
        return loginName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.login_name
     *
     * @param loginName the value for t_user.login_name
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setLoginName(String loginName) {
        this.loginName = loginName == null ? null : loginName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.password
     *
     * @return the value of t_user.password
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.password
     *
     * @param password the value for t_user.password
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.brithday
     *
     * @return the value of t_user.brithday
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Date getBrithday() {
        return brithday;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.brithday
     *
     * @param brithday the value for t_user.brithday
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setBrithday(Date brithday) {
        this.brithday = brithday;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.create_time
     *
     * @return the value of t_user.create_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.create_time
     *
     * @param createTime the value for t_user.create_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.update_time
     *
     * @return the value of t_user.update_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.update_time
     *
     * @param updateTime the value for t_user.update_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.create_by_id
     *
     * @return the value of t_user.create_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getCreateById() {
        return createById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.create_by_id
     *
     * @param createById the value for t_user.create_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setCreateById(Long createById) {
        this.createById = createById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.update_by_id
     *
     * @return the value of t_user.update_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getUpdateById() {
        return updateById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.update_by_id
     *
     * @param updateById the value for t_user.update_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setUpdateById(Long updateById) {
        this.updateById = updateById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.counts
     *
     * @return the value of t_user.counts
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getCounts() {
        return counts;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.counts
     *
     * @param counts the value for t_user.counts
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setCounts(Long counts) {
        this.counts = counts;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.delete_flg
     *
     * @return the value of t_user.delete_flg
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public String getDeleteFlg() {
        return deleteFlg;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.delete_flg
     *
     * @param deleteFlg the value for t_user.delete_flg
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setDeleteFlg(String deleteFlg) {
        this.deleteFlg = deleteFlg == null ? null : deleteFlg.trim();
    }
}