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
    'Sacrifice': '牺牲',
    'Unlock Sacrifice.': '解锁牺牲。',
    'Electron particles': '电子粒子',
    'Neutron particles': '中子粒子',
    'Proton particles': '质子粒子',
    'Proton boost chance to Energy gain.': '质子增加了获得能量的几率。',
    'Unlock 3 new Prestige & Energy upgrades.': '解锁3个新的声望和能量升级',
    'Challenges': '挑战',
    'Non-Energy': '无能量',
    'Non-Prestige': '无声望',
    'Start': '开始',
    'You cannot gain Energy.': '你无法获得能量。',
    'You cannot gain Prestige.': '你无法获得声望。',
    '奖励: Numbers boost Energy gain.': '奖励: 数字能提高能量收益。.',
    '奖励: Numbers boost Prestige gain.': '奖励: 数字能提高声望收益。.',
    'Exit': '退出',
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
    'Merge upgrade 1 cost is 25% cheaper.': '合并升级1的费用便宜25%。',
    'Energy upgrade 1 formula is better.': '能量升级1公式更好。',
    'Energy effect formula is better.': '能量效应公式更好。',
    'Energy Stats boost Sacrifice gain.': '能量属性提高牺牲收益。',
    'Unlock Preons, generate Preons.': '解锁前子，产生前子。',
    'Prestige Stats boost Sacrifice gain.': '声望属性增加牺牲增益。',
    'Raise Prestige effect by 1.15.': '声望效果提高1.15。',
    'Prestige upgrade 1 formula is better.': '声望升级1公式更好。',
    'Energy Stats boost Energy gain.': '能量属性增加能量增益。',
    'Numbers boost Particles gain.': '数字增加了粒子的增益。',
    'Gain 1% Prestige points/s.': '获得1%声望点/秒。',
    'Raise merges production by 1.15.': '将合并产量提高1.15。',
    'Prestige stats boost Energy points gain.': '声望属性增加能量点获得。',
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
    "Which ": "",
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
    "Electron gain by": "电子增益",
    "Neutron gain by": "中子增益",
    "Proton gain by": "质子增益",
    "Energy gain by": "能量增益",
    "Merge level by": "合并等级增益",
    "Prestige gain by": "声望增益",
    " Atom Dusts.": "原子尘。",
    " Atom-Merger": "原子合并",
    " Numbers": " 数字",
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
    /^([\d\.,]+) \[([\d\.,]+)\]$/, //纯空格
    /^效果: (.+) ms$/, //纯空格
    /^牺牲点，它产生(.+) 粒子\/秒.$/, //纯空格
    /^重置合并和数字，可获得 ([\d\.,]+) 声望点$/, //纯空格
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