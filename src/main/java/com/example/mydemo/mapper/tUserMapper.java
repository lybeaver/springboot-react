package com.example.mydemo.mapper;

import com.example.mydemo.beans.tUser;
import com.example.mydemo.beans.tUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface tUserMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    long countByExample(tUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int deleteByExample(tUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int insert(tUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int insertSelective(tUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    List<tUser> selectByExample(tUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    tUser selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int updateByExampleSelective(@Param("record") tUser record, @Param("example") tUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int updateByExample(@Param("record") tUser record, @Param("example") tUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int updateByPrimaryKeySelective(tUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user
     *
     * @mbg.generated Tue Oct 23 14:06:18 CST 2018
     */
    int updateByPrimaryKey(tUser record);
}