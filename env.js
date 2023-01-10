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
            COOKIE: "DedeUserID=4230222;SESSDATA=d4188d0a%2C1688926968%2C55861%2A12;bili_jct=82d65fff3c4a4b1ef74a4a058964c958",
            NUMBER:1,
            CLEAR: true,
            WAIT: 60 * 10
        },
		
		 {
            COOKIE: "DedeUserID=2080013907;SESSDATA=30aa12f7%2C1688049922%2C92900%2Ac1;bili_jct=e3d35b170a08bc45034ad615e7b868f7",
            NUMBER:2,
            CLEAR: true,
            WAIT: 60 * 10
        },
		
		 {
            COOKIE: "DedeUserID=1022736884;SESSDATA=24987cd4%2C1686588788%2C0a430%2Ac1;bili_jct=7d0caa0ea9bc6dd531d6bc09ebd27487",
            NUMBER:3,
            CLEAR: true,
            WAIT: 60 * 10
        },
	     {
            COOKIE: "DedeUserID=1703492465;SESSDATA=32a40492%2C1687234416%2C05319%2Ac1;bili_jct=e4ccbb90f5b8b18be349efe7f8c97c41",
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
