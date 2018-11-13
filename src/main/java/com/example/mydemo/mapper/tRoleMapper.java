package com.example.mydemo.mapper;

import com.example.mydemo.beans.tRole;
import com.example.mydemo.beans.tRoleExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface tRoleMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    long countByExample(tRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int deleteByExample(tRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int insert(tRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int insertSelective(tRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    List<tRole> selectByExample(tRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    tRole selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int updateByExampleSelective(@Param("record") tRole record, @Param("example") tRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int updateByExample(@Param("record") tRole record, @Param("example") tRoleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int updateByPrimaryKeySelective(tRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_role
     *
     * @mbg.generated Tue Nov 13 16:05:57 CST 2018
     */
    int updateByPrimaryKey(tRole record);
}