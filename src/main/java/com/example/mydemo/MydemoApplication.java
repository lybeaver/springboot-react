package com.example.mydemo;

import com.github.pagehelper.PageHelper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Properties;

@SpringBootApplication
@MapperScan(value = "com.example.mydemo.mapper")
public class MydemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(MydemoApplication.class, args);
    }

    /**
     * 跨域
     * @return
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }

    /**
     * 配置mybatis的分页插件pageHelper
     * @return
     */
    @Bean
    public PageHelper pageHelper(){
        System.out.println("开始配置数据分页插件");
        PageHelper pageHelper = new PageHelper();
        Properties properties = new Properties();
        properties.setProperty("offsetAsPageNum","true");
        properties.setProperty("rowBoundsWithCount","true");
        properties.setProperty("reasonable","true");
        properties.setProperty("dialect","mysql");    //配置mysql数据库的方言
        pageHelper.setProperties(properties);
        return pageHelper;
    }


//    @Bean
//    public SqlSessionFactory sqlSessionFactory() throws Exception {
//        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
//        sqlSessionFactoryBean.setDataSource(druidDataSource());
//        //mybatis分页
//        PageHelper pageHelper = new PageHelper();
//        Properties props = new Properties();
//        props.setProperty("dialect", "mysql");
//        props.setProperty("reasonable", "true");
//        props.setProperty("supportMethodsArguments", "true");
//        props.setProperty("returnPageInfo", "check");
//        props.setProperty("params", "count=countSql");
//        pageHelper.setProperties(props);
//        //添加插件
//        sqlSessionFactoryBean.setPlugins(new Interceptor[]{pageHelper});
//        //添加XML目录
//        VFS.addImplClass(SpringBootVFS.class);
//        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
//        sqlSessionFactoryBean.setMapperLocations(resolver.getResources("classpath:mapper/*.xml"));
//        logger.info("dao层扫描包为:mapper/*.xml");
//        return sqlSessionFactoryBean.getObject();
//    }

}
