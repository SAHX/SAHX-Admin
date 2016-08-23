<template>
    <div class="content-wrapper" style="min-height: 685px">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>

                <small></small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
                <li class="active">主管列表</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <!-- Your Page Content Here -->

            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">主管列表</h3>
                    <a v-link="'/director/add'"><button class="btn btn-success" style="float: right">新增</button></a>
                </div>
                <!-- /.box-header -->
                <div class="box-body">

                    <table class="table table-bordered">
                        <tbody>
                        <tr>
                            <th>名称</th>
                            <th>项目</th>
                            <th>电话</th>
                            <th>支付类型</th>
                            <th>支付账号</th>
                            <th>备注</th>
                            <th>操作</th>
                        </tr>
                        <tr v-for="i in users">
                            <td>{{i.username}}</td>
                            <td>
                                <ul v-for="i in i.project_list">
                                    <li >{{i.project_name}}</li>
                                </ul>
                            </td>
                            <td>
                                {{i.telephone}}
                            </td>
                            <td v-if="i.payment_account_type==1">支付宝</td>
                            <td v-if="i.payment_account_type==2">微信</td>
                            <td v-if="i.payment_account_type==3">银行卡</td>
                            <td> {{i.payment_account}}</td>
                            <td><span class="badge bg-red">{{i.remarks}}</span></td>
                            <td>
                                    <a  v-link="'/director/edit'"><button class="btn btn-primary btn-xs ">编辑</button></a>
                                    <button class="btn btn-primary btn-xs " style='float:right'>禁用</button>
                            </td>
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




    </div>
</template>
<style>

</style>
<script>
    import pagination from '../../components/pagination.vue'
    export default{
        ready(){
            this.data_request();
        },
        data(){
            return{
                page_index:1,
                page_size:20,
                page_total:20,
                users:[],// 主管列表
                role:2,
            }
        },
        methods:{
            data_request(){
                let self = this;
                let params = {};
                oam_req(1, params, function (data) {

                })
            }
        },
        components:{
            pagination
        }
    }
</script>
