/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Import': '导入',
    'MERGE': '合并',
    'Merges': '合并',
    'Number is getting': '数字越来越大 ',
    'Options': '选项',
    'Prestige': '声望',
    'Save': '保存',
    'times': '次',
    'Energy': '能量',
    'You have': '你有',
    'Export': '导出',
    'Achievements': '成就',
    'Atoms': '原子',
    'Auto-buy': '自动购买',
    'Your number is': '你的数字是',
    ' You have': ' 你有',
    'WIPE': '擦除',
    'My Discord': '我的Discord',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Energy stats makes interval for Merges faster.': '能量统计使合并时间间隔更快。',
    'Automatically Merge all mergers like interval "Add Merger".': '自动合并所有合并，如间隔“添加合并”。',
    'Highest Merge Tier boost chance to gain Energy.': '最高合并层提升获得能量的几率。',
    'Automatically buy Merge upgrades like interval "Add Merger".': '自动购买合并升级，就像定时“添加合并”。',
    ' Note: Have atom-merge chance to get Nucelar Power.': '注意:有原子合并有机会得到核能。',
    'Sacrifice your Prestige & Energy': '牺牲您的声望和能量',
    'Highest Merge Tier boost Prestige gain.': '最高合并层可提升声望增益。',
    'Prestige points, which multiples merges production by': '声望点，乘以倍数将生产合并',
    'Reset ALL prevoius progress to gain': '重置所有之前的进度，以获得',
    'Energy Points, which multiples merges production by': '能量点，多次合并产量',
    'Note: Have atom-merge chance to get Nucelar Power.': '注意：原子合并有几率获得原子能。',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Effect: ": "效果: ",
    "Cost: ": "成本: ",
    "Currently: ": "当前: ",
    "Reward: ": "奖励: ",
    "Goal: ": "目标: ",
    "And boosts ": "并且提升 ",
    "for ": "",
    "Which ": "谁",
    "boosts ": "提升 ",
    "You atomized ": "你原子化 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Uranium Power, which raises Particles gain by ": "铀动力，通过增加粒子增益",
    "Sacrifice points, which generates ": "牺牲点，它产生",
    "Recycle all Atom-Mergers for ": "回收所有的原子合并 ",
    "Prestige points, which multiples merges production by ": "声望点，多次合并生产",
    "Energy Points, which multiples merges production by ": "能量点，多次合并生产",
    "Nucelar Power, which multiples Atoms & Atom Dusts by ": "核能，原子和原子尘的倍数",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    " Sacrifice points": " 牺牲点",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    " Particles/s.": " 粒子/秒.",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Mergers spawn (\d+) Tier higher. \[(\d+)\]$/, '合并产生更高 $1 层。 \[$2\]'],
    [/^Mergers spawn faster. \[(\d+)\]$/, '合并产生更快。 \[$1\]'],
    [/^Buy new Atom-Merger for (.+) Atoms$/, '购买新的原子合并，成本为 $1 原子'],
    [/^Reset your merges and numbers, you gain (.+) Prestige points$/, '重置合并和数字，可获得 $1 声望点'],
    [/^Reset your Numbers & Merges, if you Sacrificed only over (.+) Sacrifice points to reset.$/, '重置你的数字和合并，如果你只牺牲 $1 牺牲点去重置。'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^\[(.+)\] \- Highest Merge level, every (.+) will merge effects has added (.+)\% stronger \(capped at (.+)\%\).$/, '\[$1\] \-最高合并级别，每 $2 个将合并效果增加 $3\% 的增强 \(上限为$4\%\)。'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^(\d+) \/ (\d+)\) Merger will added on$/, '$1 \/ $2 \) 合并将会增加'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);