module.exports = Object.freeze({
    /**
     * ## 账号相关
     * - `COOKIE` 是必填项
     * - `NUMBER` 表示是第几个账号
     * - `CLEAR` 是否启用清理功能
     * - `ENABLE_MULTIPLE_ACCOUNT` 是否启用多账号
     * - `MULTIPLE_ACCOUNT_PARM` 多账号参数(JSON格式)
     * ## 调试相关
     * - `LOTTERY_LOG_LEVEL` 输出日志等级 Error<Warn<Info<Debug 1<2<3<4
     * - `NOT_GO_LOTTERY` 关闭抽奖行为
     * ## 多账号
     * 1. 将 ENABLE_MULTIPLE_ACCOUNT 的值改为true
     * 2. 将账号信息依次填写于 multiple_account_parm 中, 参考例子类推
     * - `WAIT` 表示下一个账号运行等待时间(毫秒)
     * 
     * **按顺序依次执行, 防止访问频繁封禁IP**
     */
    account_parm: {
        COOKIE: "",
        NUMBER:1 ,
        CLEAR:true ,

        ENABLE_MULTIPLE_ACCOUNT: true,

        MULTIPLE_ACCOUNT_PARM: "",
        LOTTERY_LOG_LEVEL: 4,
        NOT_GO_LOTTERY: ""
    },

    /**
     * 为防止环境变量过长, 请将多账号填在此处
     * 以大括号内容为模板依次复制(包含大括号),逗号分割
     */
    multiple_account_parm: [
		 {
            COOKIE: "DedeUserID=4230222;SESSDATA=655e3c0d%2C1680072448%2C8309e*91;bili_jct=2c3de14cc1d980b3b8e5957db15deb04",
            NUMBER:1,
            CLEAR: true,
            WAIT: 60 * 10
        },
		
		 {
            COOKIE: "DedeUserID=2080013907;SESSDATA=f967ac2b%2C1680746456%2Cbb9db*a1;bili_jct=f07d8a0e7792c3a2f3f733f0f14eb816",
            NUMBER:2,
            CLEAR: true,
            WAIT: 60 * 10
        },
		
		 {
            COOKIE: "DedeUserID=1022736884;SESSDATA=ace82aa3%2C1678104335%2Cba306%2A91;bili_jct=b0255547a7ccabda9ccf898fc6159cae",
            NUMBER:3,
            CLEAR: true,
            WAIT: 60 * 10
        },
		
		 {
            COOKIE: "DedeUserID=1703492465;SESSDATA=a4e43a16%2C1673689081%2C21cef*71;bili_jct=c5a709bf45037d8781270bc81008f8ec",
            NUMBER:4,
            CLEAR: true,
            WAIT: 60 * 10
        }
    ],

    /**
     * 推送相关参数
     */
    push_parm: {
        SCKEY: "",
        SENDKEY: "",
        QQ_SKEY: "",
        QQ_MODE: "",
        BARK_PUSH: "",
        BARK_SOUND: "",
        TG_BOT_TOKEN: "",
        TG_USER_ID: "",
        TG_PROXY_HOST: "",
        TG_PROXY_PORT: "",
        DD_BOT_TOKEN: "",
        DD_BOT_SECRET: "",
        QYWX_KEY: "",
        IGOT_PUSH_KEY: "",
        PUSH_PLUS_TOKEN: "491b3fab7acd4f3fb158847c3a55222b",
        PUSH_PLUS_USER: "",
        SMTP_HOST: "",
        SMTP_PORT: "",
        SMTP_USER: "",
        SMTP_PASS: "",
        SMTP_TO_USER: ""
    }
})
