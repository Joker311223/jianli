// 简历数据
export const resumeData = {
    // 基本信息
    basicInfo: {
        name: "殷嘉铖",
        title: "客户端研发工程师",
        school: "杭州电子科技大学硕士",
        contacts: [
            {
                icon: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
                text: "250219210@qq.com"
            },
            {
                icon: '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>',
                text: "17826854004"
            },
            {
                icon: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
                text: "男 / 1995.06 / 中共党员 / 硕士"
            },
            {
                icon: '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
                text: "北京 · 籍贯浙江杭州"
            },
            {
                icon: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
                text: "期望薪资：50k+"
            }
        ]
    },

    // 工作经历
    workExperience: [
        {
            company: "美团",
            position: "客户端开发",
            date: "2022.06 - 至今",
            projects: [
                {
                    name: "营销触达能力项目",
                    description: "营销触达能力是通过端智能，为运营提供活动配置能力。运营可以在用户指定动作下，发送给指定用户指定的消息，实现精准营销。",
                    challenges: "弹窗冲突、弹窗动画等逻辑处理；多引擎复用下的容器兼容问题；技术栈打通。",
                    highlights: "框架适配性强，业务接入方便，侵入低，功能已在10+个业务点位投入，每日UV 1000w+。解决平台基建历史债务问题，共建多引擎下的一些问题。对框架核心能力进行设计和落地、支持了Bundle、组件级的Cross，实现组件加速、数据通信、错误降级等逻辑。",
                    responsibility: "负责美团住宿侧营销触达项目和Cross项目Android侧主R。",
                    tags: ["Android", "Java"]
                },
                {
                    name: "视频化能力建设",
                    description: "视频化能力建设是基于历史播放器进行的规范和重构，核心目标为：推动到店整体视频场景、规范指标上报体系，优化卡顿率、秒播率、清晰度以提升QoE。",
                    challenges: "1. 业务侧视频基建以功能实现为主，缺少性能指标统计，需要从0到1构建视频指标体系。2. 美团、点评等APP上播放器基建不足，双方API从功能和调用上差异都很大，沟通意向不高。",
                    highlights: "抹平播放器在不同App上的API差异，解决20+个播放器基建问题，提供10+个新增API如预渲染、预加载等。",
                    responsibility: "Android端主R。推动多端播放器的统一规范，提供播放器预渲染、预加载、播放器复用、全屏播放统一API，制定视频统一上报体系，配合产品规划上线策略。",
                    tags: ["Android", "Java", "ReactNative", "视频优化"]
                },
                {
                    name: "核心交易链路性能优化",
                    description: "主流程交易页面用户体验优化。",
                    challenges: "1. 框架固定，使用的RN框架，V8引擎解析JS，从渲染引擎层面没有可操作空间。 2. 业务侧历史逻辑复杂，技术债务繁重，性能优化必然涉及历史逻辑的重构，重构方案、风险控制都需要考虑。",
                    highlights: "优化酒店核心交易链路商户详情->房型中间页性能体验，支撑酒店详情页RCF指标提升55.5->63，秒开率达到69.4->85%+",
                    responsibility: "房型中间页性能体验优化，详情页性能优化。性能优化从引擎加载、数据拉取进行优化，从两个逻辑分别实现引擎的预加载、接口缓存、接口预请求、端智能预测用户行为实现预加载等逻辑优化。",
                    tags: ["ReactNative", "Java", "Android"]
                },
                {
                    name: "业务需求迭代",
                    description: "住宿交易链路需求迭代，包括部分酒旅基建能力，业务交互迭代",
                    challenges: "业务技术债务严重，经常需要进行项目重构。业务迭代复杂，历史文档沉淀不全，需要重新梳理业务流程和历史逻辑并沉淀文档。",
                    responsibility: "核心开发人员，主流程页面负责人，部分复杂交互逻辑开发，Android原生能力开发，业务端侧智能逻辑开发。",
                    tags: ["业务开发", "项目重构", "文档沉淀"]
                }
            ]
        }
    ],

    // 教育经历
    education: [
        {
            school: "杭州电子科技大学",
            degree: "硕士研究生",
            date: "2019.09 - 2022.06",
            major: "多目标优化，基于搜索的测试用例生成与排序",
            publications: [
                "MOEAD-VW: an improved MOEAD algorithm with an adaptive evolutionary algorithm and adaptive variable weight strategy.",
                "A hyper-heuristic algorithm with improved MOEA/D for regression testing."
            ]
        },
        {
            school: "浙江工商大学",
            degree: "本科",
            date: "2015.09 - 2019.06",
            major: "",
            publications: []
        }
    ],

    // 其他项目
    projects: [
        {
            name: "惠耳 ERP 系统（研究生项目）",
            description: "项目重构，搭建分布式系统，用户、订单、库存、商务、生产、中央模块，配入RabbitMQ->RocketMQ，Redis。对数据库进行了重新设计，并从Oracle迁移到MySQL，分库分表，读写分离，并实现分布式。打通新老系统的对数据，通过RocketMQ实现信息传输。（个人代码量8w+）",
            challenges: "1、问题：由于老系统中的传统技术架构和代码技术债务，且业务逻辑与新系统并不一致，在新老切换的过程中，数据同步较为困难；方法：前端向新老系统发送请求->利用RabbitMQ实现主要同步任务；2、问题：商务、市场部某些查询（可视化、Page页、报表）涉及多表联表查询，导致查询缓慢，高并发时可能导致数据库崩溃；方法：索引的优化->加入冗余字段->添加临时表->利用融合统计到临时表->商务系统新增消息队列消费；（实现毫秒级响应）",
            highlights: "1、架构设计，代码规范及手册拟定，包括前后端；2、利用Redis的zset实现LRU队列，多模块共用；3、可视化、数据查询的优化，iReport + Jasper 动态报表（PDF、Excel）满足客户各类查询需求；4、配置死信队列并通知，保证分布式数据最终一致性；",
            responsibility: "1、数据库设计，后端框架与模块设计，中间件选择，优化策略，性能调优；2、用户、订单、库存、商务模块需求对接+前端/后端业务代码；3、服务器维护，阿里云管理，前后端项目部署；",
            tags: ["Springboot", "MyBatis", "Redis", "MySQL", "Dubbo", "RocketMQ", "Nginx", "Vue", "Echart"]
        },
        {
            name: "风格迁移（校内项目）",
            description: "利用改进的CycleGan实现人物风格转换，例如动漫人物，python编写。",
            tags: ["Python", "CycleGAN", "深度学习"]
        },
        {
            name: "视频自动生成字幕（校内项目）",
            description: "从视频提取音频，利用百度云进行语音识别，再进行NLP自动翻译，生成srt、bcc字幕文件，python编写。",
            tags: ["Python", "NLP", "语音识别"]
        },
        {
            name: "医药企业报表系统（校内项目）",
            description: "包含微信小程序和PC端，医药企业报表项目，后端SpringBoot+MyBatis，前端vue+electron，控制台vue。",
            tags: ["SpringBoot", "MyBatis", "Vue", "Electron", "微信小程序"]
        }
    ],

    // 个人简介
    selfIntro: [
        "积极开朗，热爱运动。喜欢篮球、台球、狼人杀、书法、国画、音乐趴。INTP人格。",
        "沟通能力强，合作意识好，适应性强，能快速融入团队，鲁棒性高，抗压力强。",
        "决策果断，自我要求高，有完美主义倾向，代码严谨，习惯注释。",
        "热爱编程，工作负责，执行力高。"
    ],

    // 注解数据
    annotations: [
        {
            term: "RCF",
            definition: "RCF（Responsiveness, Cold-start, Fluency）是美团内部用于衡量应用性能的三项核心指标，分别代表交互响应延迟（R）、秒开率（C）和滑动流畅度（F）"
        }
    ]
};