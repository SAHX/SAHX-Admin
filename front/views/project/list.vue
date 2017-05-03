<template>
    <div class="content-wrapper" style="min-height: 685px">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                <small></small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
                <li class="active">项目列表</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <!-- Your Page Content Here -->

            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">项目列表</h3>
                    <router-link to="/project/add"><button class="btn btn-success" style="float: right">新增</button></router-link>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="form-group">
                                <select name="" class="form-control" v-model="type">
                                    <option :value="0">全部</option>
                                    <option :value="1">地推</option>
                                    <option :value="2">线上推广</option>
                                    <option :value="3">线下活动</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <table class="table table-bordered">
                        <tbody>
                        <tr>
                            <th>名称</th>
                            <th>时间段</th>
                            <th>备注</th>
                            <th>分类</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        <tr>
                            <td>2016暑假地推</td>
                            <td>2016.08.01 - 2016.11.01</td>
                            <td>
                                测试一些好
                            </td>
                            <td>地推</td>
                            <td><span class="badge bg-red">已结束</span></td>
                            <td><router-link to="/project/edit/1"><button class="btn btn-primary btn-xs">编辑</button></router-link></td>
                        </tr>
                        <tr>
                            <td>2016暑假地推</td>
                            <td>2016.08.01 - 2016.11.01</td>
                            <td>
                                测试一些好
                            </td>
                            <td>地推</td>
                            <td><span class="badge bg-yellow">未开始</span></td>
                            <td><router-link to="/project/edit/2"><button class="btn btn-primary btn-xs">编辑</button></router-link></td>
                        </tr>
                        <tr>
                            <td>2016暑假地推</td>
                            <td>2016.08.01 - 2016.11.01</td>
                            <td>
                                测试一些好
                            </td>
                            <td>地推</td>
                            <td><span class="badge bg-green">正在进行</span></td>
                            <td><router-link to="/project/edit/3"><button class="btn btn-primary btn-xs">编辑</button></router-link></td>
                        </tr>
                        <tr v-for="i in project_list">
                            <td>{{i.project_name}}</td>
                            <td>{{i.start_time|time_format_y_m_d}} 至 {{i.end_time|time_format_y_m_d}}</td>
                            <td>
                                {{i.remarks}}
                            </td>
                            <td v-if="i.type==1">地推</td>
                            <td v-if="i.type==2">线上推广</td>
                            <td v-if="i.type==3">线下活动</td>
                            <td><span class="badge bg-green">正在进行</span></td>
                            <td><router-link :to="'/project/edit/'+i.project_id"><button class="btn btn-primary btn-xs">编辑</button></router-link></td>
                        </tr>

                        </tbody>
                    </table>


                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">
                    <pagination :index="page_index" :total="page_total"></pagination>
                </div>
            </div>

        </section>
        <!-- /.content -->
    </div>
</template>
<style>

</style>
<script>
    import pagination from '../../components/pagination.vue'
    import time_format_y_m_d from '../../filters/time_format_y_m_d'
    export default{
        filters:{
            time_format_y_m_d
        },
        components:{
            pagination
        },
        mounted(){
            this.data_request();
        },
        data(){
            return{
                page_index:1,
                page_size:20,
                type:0,
                page_total:20,
                project_list:[]
            }
        },
        methods:{
            data_request(){
                let params = {};
                params.page_index = this.page_index;
                params.page_size = this.page_size;
                params.type = this.type;
                this.$api('/demo', params, function (data) {
                    console.log(data)
                })
            }
        }
    }
</script>
