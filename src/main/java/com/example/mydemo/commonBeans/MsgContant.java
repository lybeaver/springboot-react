package com.example.mydemo.commonBeans;

/**
 * 公用枚举信息
 */
public class MsgContant {

    public enum DEL_FLG {
        /** 0 */
        COMMON("0"),
        /** 1 */
        DELETE("1");

        private String id;

        DEL_FLG(String id) {
            this.id = id;
        }

        @Override
        public String toString() {
            return this.id;
        }
    }

    public enum ICON {
        SUCCESS,ERROR,WARNING
    }
}
