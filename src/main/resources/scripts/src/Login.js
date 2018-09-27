import React from 'react'
import ReactDOM from 'react-dom'
//ͷ头部
class Header extends React.Component {
    goBack (){
        window.history.go(-1);
    }
    render() {
        let styleDiv = {
            width:'100%',
            height:'70px',
            lineHeight:'70px'
        }
        let styleImg = {
            marginLeft:'10px',
            marginRight:'10px'
        }

        return (
            <div style={styleDiv}>
                <a href="#" onClick={()=>this.goBack()} >
                    {/*<img src="./images/back.png" style={styleImg}/>*/}
                </a>
            </div>
        )
    }
}
//中间表单
class Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            telError:null,
            passwordError:null,
            imageShow:true
        }

    }
    //手机号判断
    telCheck(event){
        this.tel=event.target.value
        console.log(this.tel)
        let reg=/^1[34578]\d{9}$/;
        if(reg.test(this.tel)==false){
            this.setState({
                telError:"请输入正确的手机号"
            })
        }else{
            this.setState({
                telError:""
            })
        }

    }
    //密码判断
    passwordCheck(event){
        this.password=event.target.value
        let reg=/^\w{6,20}$/;
        if(reg.test(this.password)==false){
            this.setState({
                passwordError:"密码为6-20位数字或字母或下划线!"
            })
        }else{
            this.setState({
                passwordError:""
            })
        }

    }
    //是否记住密码
    isRemember(){
        this.setState({
            imageShow:!this.state.imageShow
        })
    }
    render () {
        let imageSrc=this.state.imageShow?"./images/unSelected.png":"./images/selected.png"
        let headImg={
            marginTop:"42px",
            marginBottom:"44px",
            position:'relative',
            left:"50%",
            marginLeft:"-56px"
            //textAlign:"center"不识别
        }
        let ul={
            listStyle:"none",
            margin:"0",
            padding:"0",
            display:"block",
            paddingLeft:"50px",
            paddingRight:"50px"
        }
        let liAll={
            margin:"0 auto",
            padding:"0"


        }
        let userTel={
            margin:"0 auto",
            padding:"0",
            display:'block',
            height:"41px",
            width:"286px",
            borderBottom:"1px solid #989898",
            lineHeight:"52px",
            paddingTop:"11px"
        }
        let userImg={
            diaplay:"inline-block",
            width:"30px",
            marginRight:"6px"
        }
        let userSpan={
            display:"inline-block",
            border:"1px solid #989898",
            height:"20px"
        }
        let telInput={
            margin:"0",
            padding:"0",
            display:"inline-block",
            height:"20px",
            marginBottom:"12px",
            marginLeft:"12px",
            outLine:"none",
            border:"0"
        }
        let telPrompt={
            color:"red",
            fontSize:"18px"
        }
        let unSelected={
            display:"inline-block",
            width:"20px",
            marginTop:"14px",
            marginRight:"4px"
        }
        let rememberLi={
            display:"block",
            height:"48px",
            lineHeight:"48px",
            clear:"both",
            margin:"0 auto"
        }
        let rememberI={
            fontStyle:"normal",
            fontSize:"11px",
            color:"#3dbf8e",
            marginLeft:"4px"

        }
        let forgetI={
            float:"right",
            fontStyle:"normal",
            fontSize:"11px",
            color:"#3dbf8e",
            marginBottom:"23px"

        }
        let login={
            border:"none",
            width:"100%",
            height:"42px",
            backgroundColor:"#F55D5D",
            color:"#fff",
            fontSize:"18px"
        }
        return (
            <div>
                <img src="./images/headImg.png" alt="" style={headImg}/>
                <ul style={ul}>
                    <li style={userTel}>
                        <img src="./images/username.png" alt="" style={userImg}/>
                        <span style={userSpan}></span>
                        <input type="text" style={telInput} placeholder="请输入手机号" onBlur={(event)=>this.telCheck(event)} />
                    </li>
                    <li style={liAll}>
                        <span style={telPrompt}>{this.state.telError}</span>
                    </li>
                    <li style={userTel}>
                        <img src="./images/password.png" alt="" style={userImg}/>
                        <span style={userSpan}></span>
                        <input type="password" style={telInput} placeholder="请输入密码" onBlur={(event)=>this.passwordCheck(event)}/></li>
                    <li style={liAll}>
                        <span style={telPrompt}>{this.state.passwordError}</span>
                    </li>
                    <li style={rememberLi}>
                        <img src={imageSrc} a style={unSelected} onClick={()=>this.isRemember()}/>
                        <a href="#" style={rememberI}>记住手机号</a><a href="#" style={forgetI}>忘记密码</a>
                    </li>
                    <li style={liAll}>
                        <button style={login}>登录</button>
                    </li>
                </ul>
            </div>
        )
    }
}
//底部
class Footer extends React.Component{
    render(){
        let register={
            display:"block",
            fontSize:"13px",
            color:"#8b8b8b",
            width:"80px",
            height:"25px",
            margin:"0 auto",
            border:"1px solid #8b8b8b",
            textDecoration:"none",
            marginTop:"50px",
            textAlign:"center",
            lineHeight:"25px"

        }
        return(
            <a href="#" style={register}>快速注册</a>
        )
    }
}
class All extends React.Component{
    render () {
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}

ReactDOM.render(
    <All/>,document.getElementById("container")
)