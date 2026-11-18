import { defineConfig } from 'vitepress'

const nav = [
  { text: '首页', link: '/' },
  { text: '开始阅读', link: '/chapters/00-序章/00-概述' },
]

const sidebar = [
  {
    text: '序章：为什么写第三本书',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/00-序章/00-概述' },
      { text: '不是又一本谈品味的书', link: '/chapters/00-序章/01-不是又一本谈品味的书' },
      { text: '个人立场声明', link: '/chapters/00-序章/02-个人立场声明' },
    ],
  },
  {
    text: '第一章：值得',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/01-值得/00-概述' },
      { text: '判断力只回答一个问题', link: '/chapters/01-值得/01-判断力只回答一个问题' },
      { text: '眼光：知道什么值得', link: '/chapters/01-值得/02-眼光知道什么值得' },
      { text: '纪律：在值得的事上不动摇', link: '/chapters/01-值得/03-纪律在值得的事上不动摇' },
      { text: '缺一半都是错', link: '/chapters/01-值得/04-缺一半都是错' },
    ],
  },
  {
    text: '第二章：时间是第四个维度',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/02-时间是第四个维度/00-概述' },
      { text: '知识层面，大家都对', link: '/chapters/02-时间是第四个维度/01-知识层面大家都对' },
      { text: '先定周期，再谈对错', link: '/chapters/02-时间是第四个维度/02-先定周期再谈对错' },
      { text: '周期之外都是噪音', link: '/chapters/02-时间是第四个维度/03-周期之外都是噪音' },
      { text: '遵从不是从众', link: '/chapters/02-时间是第四个维度/04-遵从不是从众' },
    ],
  },
  {
    text: '第三章：先成为基准',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/03-先成为基准/00-概述' },
      { text: '基准率不讲道理', link: '/chapters/03-先成为基准/01-基准率不讲道理' },
      { text: '先成为基准，再谈超越', link: '/chapters/03-先成为基准/02-先成为基准再谈超越' },
      { text: '照抄第一名', link: '/chapters/03-先成为基准/03-照抄第一名' },
      { text: '抄思想，不抄形状', link: '/chapters/03-先成为基准/04-抄思想不抄形状' },
    ],
  },
  {
    text: '第四章：纪律写进结构',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/04-纪律写进结构/00-概述' },
      { text: '道理很简单，做到很难', link: '/chapters/04-纪律写进结构/01-道理很简单做到很难' },
      { text: '人教人教不会，事教人一次就会', link: '/chapters/04-纪律写进结构/02-人教人教不会事教人一次就会' },
      { text: '说得清的，交给规则', link: '/chapters/04-纪律写进结构/03-说得清的交给规则' },
      { text: '让报错替你教', link: '/chapters/04-纪律写进结构/04-让报错替你教' },
    ],
  },
  {
    text: '第五章：眼光在规则的上一层',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/05-眼光在规则的上一层/00-概述' },
      { text: '没用过，就没有判断', link: '/chapters/05-眼光在规则的上一层/01-没用过就没有判断' },
      { text: '拆机制', link: '/chapters/05-眼光在规则的上一层/02-拆机制' },
      { text: '攻略加实操', link: '/chapters/05-眼光在规则的上一层/03-攻略加实操' },
      { text: '工具、范式、层级、松紧', link: '/chapters/05-眼光在规则的上一层/04-工具范式层级松紧' },
      { text: 'agent 的上限是使用者的眼光', link: '/chapters/05-眼光在规则的上一层/05-agent的上限是使用者的眼光' },
    ],
  },
  {
    text: '第六章：正向设计',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/06-正向设计/00-概述' },
      { text: '推导先于观察', link: '/chapters/06-正向设计/01-推导先于观察' },
      { text: '有理由地偏离平均值', link: '/chapters/06-正向设计/02-有理由地偏离平均值' },
      { text: '眼光看不见的错', link: '/chapters/06-正向设计/03-眼光看不见的错' },
      { text: '让结构暴露错误', link: '/chapters/06-正向设计/04-让结构暴露错误' },
      { text: '验证只能交给时间', link: '/chapters/06-正向设计/05-验证只能交给时间' },
    ],
  },
  {
    text: '第七章：懂的不用教',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/07-懂的不用教/00-概述' },
      { text: '懂的不用教，要教的不会懂', link: '/chapters/07-懂的不用教/01-懂的不用教要教的不会懂' },
      { text: '只会照抄见过的东西', link: '/chapters/07-懂的不用教/02-只会照抄见过的东西' },
      { text: '平均值加讨好', link: '/chapters/07-懂的不用教/03-平均值加讨好' },
      { text: '许愿不是指令', link: '/chapters/07-懂的不用教/04-许愿不是指令' },
      { text: '三句话就够了', link: '/chapters/07-懂的不用教/05-三句话就够了' },
      { text: 'agent 是教得会的学生', link: '/chapters/07-懂的不用教/06-agent是教得会的学生' },
    ],
  },
  {
    text: '终章：知行合一',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/08-知行合一/00-概述' },
      { text: '品味是内化了的判断力', link: '/chapters/08-知行合一/01-品味是内化了的判断力' },
      { text: '一辈子是最长的周期', link: '/chapters/08-知行合一/02-一辈子是最长的周期' },
      { text: '知行合一', link: '/chapters/08-知行合一/03-知行合一' },
      { text: '写给有缘人', link: '/chapters/08-知行合一/04-写给有缘人' },
    ],
  },
]

export default defineConfig({
  title: '判断力的工程哲学',
  description: '判断力只回答一个问题：什么值得。',
  lang: 'zh-CN',

  appearance: 'force-dark',
  base: '/judgment-engineering-philosophy/',
  srcDir: '..',
  outDir: '.vitepress/dist',

  ignoreDeadLinks: [
    /\/LICENSE$/,
  ],

  srcExclude: [
    'node_modules/**',
    'output/**',
    'docs/**',
    'notes/**',
    'AGENTS.md',
    'CLAUDE.md',
  ],

  themeConfig: {
    nav,
    sidebar,
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      message: '采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">CC BY-NC-SA 4.0</a> 许可协议',
      copyright: 'Copyright © 2026 Chao Li',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Onenightcarnival/judgment-engineering-philosophy' },
    ],
  },
})
