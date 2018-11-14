package com.example.mydemo.commonBeans;
import java.io.UnsupportedEncodingException;
import java.util.Date;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
/**
 * JWT加密
 * @author lcl
 *
 */
public final class Encrypt {
    public static String getToken(final String userName, final String name) {
        String token = null;
        try {
            Date expiresAt = new Date(System.currentTimeMillis() + 15 * 60 * 1000);
            token = JWT.create()
                    .withIssuer("auth0")
                    .withClaim("username", userName)
                    .withClaim("name", name)
                    .withExpiresAt(expiresAt)
                    // 使用了HMAC256加密算法。
                    // mysecret是用来加密数字签名的密钥。
                    .sign(Algorithm.HMAC256("mysecret"));
        } catch (JWTCreationException exception){
            //Invalid Signing configuration / Couldn't convert Claims.
        } catch (IllegalArgumentException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return token;
    }
}