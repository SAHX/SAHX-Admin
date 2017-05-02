<template>
    <div class="wrapper">

        <!-- Main Header -->
        <header class="main-header">

            <!-- Logo -->
            <a href="#" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>SAHX</b></span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>SAHX</b>Admin</span>
            </a>

            <!-- Header Navbar -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>
                <!-- Navbar Right Menu -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- User Account Menu -->
                        <li class="dropdown user user-menu">
                            <!-- Menu Toggle Button -->
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <!-- The user image in the navbar-->
                                <img :src="oam_user.avatar" class="user-image" alt="User Image">
                                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                                <span class="hidden-xs">{{oam_user.name}}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- The user image in the menu -->
                                <li class="user-header">
                                    <img :src="oam_user.avatar" class="img-circle" alt="User Image">

                                    <p>
                                        {{oam_user.name}} - {{oam_user.job}}
                                        <small>Member since Nov. 2012</small>
                                    </p>
                                </li>
                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#" class="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div class="pull-right">
                                        <a href="#" class="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">

            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">

                <!-- Sidebar user panel (optional) -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img :src="oam_user.avatar" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>{{oam_user.name}}</p>
                        <!-- Status -->
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <sidebar-menu></sidebar-menu>
                <!-- /.sidebar-menu -->

            </section>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <router-view></router-view>
        <!-- /.content-wrapper -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="pull-right hidden-xs">
                Do one thing at a time, and do well.
            </div>
            <!-- Default to the left -->
            <strong>Copyright &copy; 2016 <a href="#">SAHX-Admin</a>.</strong> All rights reserved.
        </footer>
    </div>
</template>
<style>

</style>
<script>
    import SidebarMenu from '../components/sidebar_menu.vue'
    import { mapGetters } from 'vuex'
    export default{
        data(){
            return{}
        },
        beforeCreate(){
            /**
             * 请求的具体用法，请参考：
             *   https://github.com/mzabriskie/axios
             */
            this.$http.post('/api/fetch_oam_user',{type:1}).then( response => {
                let data = response.data;
                if(data.error_code){
                    console.log('请求出错：', data.message);
                    return
                }
                let oamUser = data.data;
                this.$store.dispatch('saveOamUser',oamUser)
            })
        },
        computed: {
            ...mapGetters({
                oam_user:'oam_user'
            })
        },
        components:{
            SidebarMenu
        }
    }
</script>