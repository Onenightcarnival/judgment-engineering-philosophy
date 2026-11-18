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

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Start Reading', link: '/en/chapters/00-prologue/00-overview' },
]

const enSidebar = [
  {
    text: "Prologue: Why a Third Book",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/00-prologue/00-overview" },
      { text: "Not Another Book About Taste", link: "/en/chapters/00-prologue/01-not-another-book-about-taste" },
      { text: "A Personal Statement of Position", link: "/en/chapters/00-prologue/02-a-personal-statement-of-position" },
    ],
  },
  {
    text: "Chapter 1: What Is Worth It",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/01-what-is-worth-it/00-overview" },
      { text: "Judgment Answers Only One Question", link: "/en/chapters/01-what-is-worth-it/01-judgment-answers-only-one-question" },
      { text: "Discernment: Knowing What Is Worth It", link: "/en/chapters/01-what-is-worth-it/02-discernment-knowing-what-is-worth-it" },
      { text: "Discipline: Not Wavering on What Is Worth It", link: "/en/chapters/01-what-is-worth-it/03-discipline-not-wavering-on-what-is-worth-it" },
      { text: "Missing Either Half Is Wrong", link: "/en/chapters/01-what-is-worth-it/04-missing-either-half-is-wrong" },
    ],
  },
  {
    text: "Chapter 2: Time Is the Fourth Dimension",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/02-time-is-the-fourth-dimension/00-overview" },
      { text: "At the Level of Knowledge, Everyone Is Right", link: "/en/chapters/02-time-is-the-fourth-dimension/01-at-the-level-of-knowledge-everyone-is-right" },
      { text: "Set the Horizon, Then Talk About Right and Wrong", link: "/en/chapters/02-time-is-the-fourth-dimension/02-set-the-horizon-then-talk-about-right-and-wrong" },
      { text: "Everything Outside the Horizon Is Noise", link: "/en/chapters/02-time-is-the-fourth-dimension/03-everything-outside-the-horizon-is-noise" },
      { text: "Deference Is Not Following the Crowd", link: "/en/chapters/02-time-is-the-fourth-dimension/04-deference-is-not-following-the-crowd" },
    ],
  },
  {
    text: "Chapter 3: Become the Baseline First",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/03-become-the-baseline-first/00-overview" },
      { text: "Base Rates Do Not Listen to Reason", link: "/en/chapters/03-become-the-baseline-first/01-base-rates-do-not-listen-to-reason" },
      { text: "Become the Baseline Before Trying to Beat It", link: "/en/chapters/03-become-the-baseline-first/02-become-the-baseline-before-trying-to-beat-it" },
      { text: "Copy the Best", link: "/en/chapters/03-become-the-baseline-first/03-copy-the-best" },
      { text: "Copy the Idea, Not the Shape", link: "/en/chapters/03-become-the-baseline-first/04-copy-the-idea-not-the-shape" },
    ],
  },
  {
    text: "Chapter 4: Write Discipline into Structure",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/04-write-discipline-into-structure/00-overview" },
      { text: "The Principle Is Simple; Doing It Is Hard", link: "/en/chapters/04-write-discipline-into-structure/01-the-principle-is-simple-doing-it-is-hard" },
      { text: "People Cannot Teach People; Events Teach in One Lesson", link: "/en/chapters/04-write-discipline-into-structure/02-people-cannot-teach-people-events-teach-in-one-lesson" },
      { text: "What Can Be Stated Goes to the Rules", link: "/en/chapters/04-write-discipline-into-structure/03-what-can-be-stated-goes-to-the-rules" },
      { text: "Let the Error Message Teach for You", link: "/en/chapters/04-write-discipline-into-structure/04-let-the-error-message-teach-for-you" },
    ],
  },
  {
    text: "Chapter 5: Discernment Sits One Level Above the Rules",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/05-discernment-sits-one-level-above-the-rules/00-overview" },
      { text: "No Use, No Judgment", link: "/en/chapters/05-discernment-sits-one-level-above-the-rules/01-no-use-no-judgment" },
      { text: "Take the Mechanism Apart", link: "/en/chapters/05-discernment-sits-one-level-above-the-rules/02-take-the-mechanism-apart" },
      { text: "Guides Plus Practice", link: "/en/chapters/05-discernment-sits-one-level-above-the-rules/03-guides-plus-practice" },
      { text: "Tool, Paradigm, Layer, Tightness", link: "/en/chapters/05-discernment-sits-one-level-above-the-rules/04-tool-paradigm-layer-tightness" },
      { text: "The Agent's Ceiling Is Its User's Discernment", link: "/en/chapters/05-discernment-sits-one-level-above-the-rules/05-the-agents-ceiling-is-its-users-discernment" },
    ],
  },
  {
    text: "Chapter 6: Forward Design",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/06-forward-design/00-overview" },
      { text: "Derivation Before Observation", link: "/en/chapters/06-forward-design/01-derivation-before-observation" },
      { text: "Deviate from the Average, with Reasons", link: "/en/chapters/06-forward-design/02-deviate-from-the-average-with-reasons" },
      { text: "Errors Discernment Cannot See", link: "/en/chapters/06-forward-design/03-errors-discernment-cannot-see" },
      { text: "Let Structure Expose the Error", link: "/en/chapters/06-forward-design/04-let-structure-expose-the-error" },
      { text: "Only Time Can Verify", link: "/en/chapters/06-forward-design/05-only-time-can-verify" },
    ],
  },
  {
    text: "Chapter 7: Those Who Get It Need No Teaching",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/07-those-who-get-it-need-no-teaching/00-overview" },
      { text: "Those Who Get It Need No Teaching; Those Who Need Teaching Won't Get It", link: "/en/chapters/07-those-who-get-it-need-no-teaching/01-those-who-get-it-need-no-teaching-those-who-need-teaching-wont-get-it" },
      { text: "They Copy Only What They Have Seen", link: "/en/chapters/07-those-who-get-it-need-no-teaching/02-they-copy-only-what-they-have-seen" },
      { text: "The Average, Plus Pleasing", link: "/en/chapters/07-those-who-get-it-need-no-teaching/03-the-average-plus-pleasing" },
      { text: "A Wish Is Not an Instruction", link: "/en/chapters/07-those-who-get-it-need-no-teaching/04-a-wish-is-not-an-instruction" },
      { text: "Three Sentences Are Enough", link: "/en/chapters/07-those-who-get-it-need-no-teaching/05-three-sentences-are-enough" },
      { text: "The Agent Is a Student Who Can Be Taught", link: "/en/chapters/07-those-who-get-it-need-no-teaching/06-the-agent-is-a-student-who-can-be-taught" },
    ],
  },
  {
    text: "Final Chapter: Unity of Knowing and Doing",
    collapsed: false,
    items: [
      { text: "Overview", link: "/en/chapters/08-unity-of-knowing-and-doing/00-overview" },
      { text: "Taste Is Internalized Judgment", link: "/en/chapters/08-unity-of-knowing-and-doing/01-taste-is-internalized-judgment" },
      { text: "A Lifetime Is the Longest Horizon", link: "/en/chapters/08-unity-of-knowing-and-doing/02-a-lifetime-is-the-longest-horizon" },
      { text: "Unity of Knowing and Doing", link: "/en/chapters/08-unity-of-knowing-and-doing/03-unity-of-knowing-and-doing" },
      { text: "For Those Meant to Read It", link: "/en/chapters/08-unity-of-knowing-and-doing/04-for-those-meant-to-read-it" },
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

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'The Engineering Philosophy of Judgment',
      description: 'Judgment answers only one question: what is worth it.',
      themeConfig: {
        nav: enNav,
        sidebar: { '/en/': enSidebar },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        footer: {
          message: 'Licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>',
          copyright: 'Copyright © 2026 Chao Li',
        },
      },
    },
  },

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
