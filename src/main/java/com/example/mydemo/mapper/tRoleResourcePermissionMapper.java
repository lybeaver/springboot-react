package com.example.mydemo.mapper;

import com.example.mydemo.beans.tRoleResourcePermission;
import com.example.mydemo.beans.tRoleResourcePermissionExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface tRoleResourcePermissionMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Sun Sep 23 22:37:22 CST 2018
     */
    long countByExample(tRoleResourcePermissionExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Sun Sep 23 22:37:22 CST 2018
     */
    int deleteByExample(tRoleResourcePermissionExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Sun Sep 23 22:37:22 CST 2018
     */
    int insert(tRoleResourcePermission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Sun Sep 23 22:37:22 CST 2018
     */
    int insertSelective(tRoleResourcePermission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Sun Sep 23 22:37:22 CST 2018
     */
    List<tRoleResourcePermission> selectByExample(tRoleResourcePermissionExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Sun Sep 23 22:37:22 CST 2018
     */
    int updateByExampleSelective(@Param("record") tRoleResourcePermission record, @Param("example") tRoleResourcePermissionExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role_resource_permission
     *
     * @mbg.generated Sun Sep 23 22:37:22 CST 2018
     */
    int updateByExample(@Param("record") tRoleResourcePermission record, @Param("example") tRoleResourcePermissionExample example);
}