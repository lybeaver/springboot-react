package com.example.mydemo.mapper.common;

import com.example.mydemo.beans.tUserRole;
import com.example.mydemo.beans.tUserRoleExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface tUserRoleMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    long countByExample(tUserRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int deleteByExample(tUserRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int insert(tUserRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int insertSelective(tUserRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    List<tUserRole> selectByExample(tUserRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int updateByExampleSelective(@Param("record") tUserRole record, @Param("example") tUserRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int updateByExample(@Param("record") tUserRole record, @Param("example") tUserRoleExample example);
}