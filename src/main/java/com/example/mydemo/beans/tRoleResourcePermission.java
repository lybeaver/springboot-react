package com.example.mydemo.beans;

import java.util.Date;

public class tRoleResourcePermission {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.role_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long roleId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.resource_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long resourceId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.permission_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long permissionId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.create_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Date createTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.update_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Date updateTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.create_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long createById;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.update_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long updateById;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.counts
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private Long counts;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_role_resource_permission.delete_flg
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    private String deleteFlg;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public tRoleResourcePermission(Long roleId, Long resourceId, Long permissionId, Date createTime, Date updateTime, Long createById, Long updateById, Long counts, String deleteFlg) {
        this.roleId = roleId;
        this.resourceId = resourceId;
        this.permissionId = permissionId;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.createById = createById;
        this.updateById = updateById;
        this.counts = counts;
        this.deleteFlg = deleteFlg;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public tRoleResourcePermission() {
        super();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.role_id
     *
     * @return the value of t_role_resource_permission.role_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getRoleId() {
        return roleId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.role_id
     *
     * @param roleId the value for t_role_resource_permission.role_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.resource_id
     *
     * @return the value of t_role_resource_permission.resource_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getResourceId() {
        return resourceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.resource_id
     *
     * @param resourceId the value for t_role_resource_permission.resource_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setResourceId(Long resourceId) {
        this.resourceId = resourceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.permission_id
     *
     * @return the value of t_role_resource_permission.permission_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getPermissionId() {
        return permissionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.permission_id
     *
     * @param permissionId the value for t_role_resource_permission.permission_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setPermissionId(Long permissionId) {
        this.permissionId = permissionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.create_time
     *
     * @return the value of t_role_resource_permission.create_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.create_time
     *
     * @param createTime the value for t_role_resource_permission.create_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.update_time
     *
     * @return the value of t_role_resource_permission.update_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.update_time
     *
     * @param updateTime the value for t_role_resource_permission.update_time
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.create_by_id
     *
     * @return the value of t_role_resource_permission.create_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getCreateById() {
        return createById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.create_by_id
     *
     * @param createById the value for t_role_resource_permission.create_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setCreateById(Long createById) {
        this.createById = createById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.update_by_id
     *
     * @return the value of t_role_resource_permission.update_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getUpdateById() {
        return updateById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.update_by_id
     *
     * @param updateById the value for t_role_resource_permission.update_by_id
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setUpdateById(Long updateById) {
        this.updateById = updateById;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.counts
     *
     * @return the value of t_role_resource_permission.counts
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public Long getCounts() {
        return counts;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.counts
     *
     * @param counts the value for t_role_resource_permission.counts
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setCounts(Long counts) {
        this.counts = counts;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_role_resource_permission.delete_flg
     *
     * @return the value of t_role_resource_permission.delete_flg
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public String getDeleteFlg() {
        return deleteFlg;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_role_resource_permission.delete_flg
     *
     * @param deleteFlg the value for t_role_resource_permission.delete_flg
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    public void setDeleteFlg(String deleteFlg) {
        this.deleteFlg = deleteFlg == null ? null : deleteFlg.trim();
    }
}