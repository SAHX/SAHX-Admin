<template>
    <ul class="sidebar-menu">
        <li class="header">菜单</li>
        <!-- Optionally, you can add icons to the links -->
        <!--<li class="treeview">-->
            <!--<a href="#"><i class="fa  fa-commenting"></i> <span>病历帖</span>-->
                <!--<span class="pull-right-container">-->
                  <!--<i class="fa fa-angle-left pull-right"></i>-->
                <!--</span>-->
            <!--</a>-->
            <!--<ul class="treeview-menu">-->
                <!--<li><a href="#">帖子列表</a></li>-->
                <!--<li><a href="#">新增帖子</a></li>-->
            <!--</ul>-->
        <!--</li>-->
        <li class="treeview" v-for="i in menu_data">
            <a href="#"><i :class="i.icon"></i> <span>{{i.name}}</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
                <li v-for="e in i.child"><router-link to="e.link">{{e.name}}</router-link></li>
            </ul>
        </li>
    </ul>
</template>
<style>

</style>
<script>
    import menu_data from '../menu.js'
    export default{
        data(){
            return{
                menu_data:menu_data
            }
        },
        components:{
            
        }
    }
</script>