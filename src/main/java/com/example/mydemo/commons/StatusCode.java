package com.example.mydemo.commons;

/**
 * 状态码，对应前端处理
 */
public final class StatusCode {

    /** 没有权限 */
    public static final Integer NO_PERMISS = 401;

    /** 权限不足 */
    public static final Integer PERMISSION_LESS = 402;

    /** 会话ing */
    public static final Integer LOGING = 299;

    /** 会话失效 */
    public static final Integer LOGIN_OUT = 400;

    /** 操作成功*/
    public static final Integer OPERATION_SUCCESS = 200;

    /** 操作失败*/
    public static final Integer OPERATION_ERROR = 500;

    /** 查询成功 */
    public static final Integer FIND_SUCCESS = 201;

    /** 查询失败 */
    public static final Integer FIND_ERROR = 501;

    /** 保存成功 */
    public static final Integer SAVE_SUCCESS = 202;

    /** 保存失败 */
    public static final Integer SAVE_ERROR = 502;

    /** 删除成功 */
    public static final Integer REMOVE_SUCCESS = 203;

    /** 删除失败 */
    public static final Integer REMOVE_ERROR = 503;

    /** 退出成功 */
    public static final Integer TO_LOGIN_OUT = 204;

    /** 程序异常 */
    public static final Integer EXCEPTION_ERROR = 510;

    /** 缺少必填项 */
    public static final Integer LACK_VALUE = 511;

    /** 字段重复 */
    public static final Integer DUPLICATION_ERROR = 512;

    /** 无对应数据 */
    public static final Integer NORETRUN_DATA = 513;

    /** 默认状态 */
    public static final Integer DEFAULT = 251;

}
