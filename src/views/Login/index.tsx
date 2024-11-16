import { ChangeEvent, useEffect, useState } from 'react';
import styles from './login.module.scss';
import initLoginBg from './init.ts';
import { Button, Input, Space } from 'antd';
import './login.less';

const view = () => {

    //加载完这个组件之后，加载背景
    useEffect(() => {
        initLoginBg();
        window.onresize = function () {
            initLoginBg();
        };

        // 清理函数：避免内存泄漏
        return () => {
            window.onresize = null;
        };
    }, []);

    //获取用户输入的信息
    const [usernameVal, setUsernameVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [captchaVal, setCaptchaVal] = useState('');
    //用户名改变
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setUsernameVal(e.target.value);
    };

    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setPasswordVal(e.target.value);
    };

    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setCaptchaVal(e.target.value);
    };
    //点击登录按钮的事件
    const gotoLogin = () => {
        console.log(usernameVal, passwordVal, captchaVal);
    }

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: 'block' }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + ' loginbox'}>
                {/* 标题 */}
                <div className={styles.title}>
                    <h1>前端通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单 */}
                <div className="form">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Input placeholder="请输入用户名" onChange={usernameChange} />
                        <Input.Password placeholder="请输入密码" onChange={passwordChange} />
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={captchaChange} />
                            <div className="captchaIma">
                                <img height='38' src="" alt="" />
                            </div>
                        </div>
                        <Button type="primary" className='loginBtn' block onClick={gotoLogin} >登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default view;