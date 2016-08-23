/**
 * Created by tangjiang on 16/8/7.
 */
const menu_data =
    [
        {
            name: '项目',
            icon: 'fa fa-archive',
            child: [
                {name: '新增项目', link: '/project/add/'},
                {name: '项目列表', link: '/project/list/'}

            ]
        },
        {
            name: '主管',
            icon: 'fa fa-user',
            child: [
                {name: '新增主管', link: '/director/add/'},
                {name: '主管列表', link: '/director/list/'}

            ]
        }
    ];

export default menu_data;

