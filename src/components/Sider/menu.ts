const menuData = [
    {
        name: '首页',
        path: 'dashboard',
        key: 'dashboard',
        icon: 'video'
    },
    {
        name: '表单页',
        path: 'form',
        key: 'form',
        icon: 'user',
        children: [
            {
                name: '基础表单',
                path: 'basicForm',
                key: 'basicForm',
            },
            {
                name: '分步表单',
                path: 'stepForm',
                key: 'stepForm',
            },
            {
                name: '高级表单',
                path: 'advancedForm',
                key: 'advancedForm',
            },
        ],
    },
    {
        name: '列表页',
        path: 'list',
        key: 'list',
        icon: 'upload',
        children: [
            {
                name: '查询表格',
                path: 'tableList',
                key: 'tableList',
            },
            {
                name: '标准列表',
                path: 'basicList',
                key: 'basicList',
            },
            {
                name: '卡片列表',
                path: 'cardList',
                key: 'cardList',
            }
        ],
    },
    {
        name: '详情页',
        path: 'profile',
        key: 'profile',
        icon: 'user',
        children: [
            {
                name: '基础详情页',
                path: 'basic',
                key: 'basic',
            },
            {
                name: '高级详情页',
                path: 'advanced',
                key: 'advanced',
            },
        ],
    }
];

export default menuData;
