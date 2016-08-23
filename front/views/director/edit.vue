<template xmlns:v-validate="http://www.w3.org/1999/xhtml">
    <div class="content-wrapper" style="min-height: 685px">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>

                <small></small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i>主页 </a></li>
                <li><a v-link="'/director/list'"> 主管列表</a></li>
                <li class="active">编辑主管</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <!-- Your Page Content Here -->

            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">新增主管</h3>
                </div>
                <!-- /.box-header -->
                <!-- form start -->
                <validator name="validation_director_add">
                    <form class="form-horizontal">
                        <div class="box-body">
                            <div class="form-group">
                                <label for="director_add_name" class="col-sm-2 control-label">姓名</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="director_add_name" placeholder="请输入 姓名" v-model="director_add_name" initial="off" v-validate:director_add_name="['required']">
                                    <p class="text-red" v-if="$validation_director_add.director_add_name.required"><small>请输入姓名!</small></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="director_add_password" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-5">
                                    <input type="password" class="form-control" id="director_add_password" placeholder="请输入 密码" v-model="director_add_password" initial="off" v-validate:director_add_password="['required']">
                                    <p class="text-red" v-if="$validation_director_add.director_add_password.required"><small>请输入密码!</small></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="director_add_company" class="col-sm-2 control-label">公司名称</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="director_add_company" placeholder="请输入 公司名称" v-model="director_add_company" initial="off" v-validate:director_add_company="['required']">
                                    <p class="text-red" v-if="$validation_director_add.director_add_company.required"><small>请输入公司名称!</small></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="director_add_tel" class="col-sm-2 control-label">电话</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="director_add_tel" placeholder="请输入 电话号码" v-model="director_add_tel" initial="off" v-validate:director_add_tel="['required']">
                                    <p class="text-red" v-if="$validation_director_add.director_add_tel.required"><small>请输入电话号码!</small></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="director_add_provice" class="col-sm-2 control-label">支付方式</label>
                                <div class="col-md-2">
                                    <select class="form-control" id="director_add_provice">
                                        <option  >微信</option>
                                        <option  >支付宝</option>
                                        <option  >银行卡</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="director_add_pay" class="col-sm-2 control-label">支付账号</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="director_add_pay" placeholder="支付宝/微信/银行帐号" v-model="director_add_pay" initial="off" v-validate:director_add_pay="['required']">
                                    <p class="text-red" v-if="$validation_director_add.director_add_pay.required"><small>请输入支付宝/微信/银行帐号!</small></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="director_add_provice" class="col-sm-2 control-label">请选择省份</label>
                                <div class="col-md-2">
                                    <select class="form-control" id="director_add_provice">
                                        <option v-for='i in b_provice' :value="i.id" >{{i.name}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputPassword10" class="col-sm-2 control-label">选择项目</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="inputPassword10">
                                        <option v-for='i in b_provice' :value="i.id" @click="b_provice($index)">{{i.name}}
                                        </option>
                                    </select>
                                </div>
                                <label for="director_add_project" class="col-sm-2 control-label">已选项目</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="director_add_project">
                                        <option v-for='i in c_provice' :value="i.id" @click="c_provice($index)">{{i.name}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="c_school" class="col-sm-2 control-label">备选大学</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="c_school">
                                        <option v-for='i in b_school' :value="i.id" @click="a($index)">{{i.name}}
                                        </option>
                                    </select>
                                </div>
                                <label for="inputPassword9" class="col-sm-2 control-label">已选大学</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="inputPassword9">
                                        <option v-for='i in c_school' :value="i.id" @click='b($index)'>{{i.name}}
                                        </option>

                                    </select>
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-sm-2 control-label">备注</label>
                                <div class="col-sm-5">
                                    <textarea class="form-control" rows="3" placeholder="备注 ..."></textarea>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <button type="submit" class="btn btn-default">取消</button>
                                <button type="submit" class="btn btn-info pull-right">新增</button>
                            </div>
                            <!-- /.box-footer -->
                        </div>
                    </form>

                </validator>

                <!-- /.box-body -->
            </div>

        </section>
        <!-- /.content -->
    </div>
</template>
<style>

</style>
<script>
    export default{
        ready(){

            $(document).ajaxStart(function() { Pace.restart(); });
            $('.ajax').click(function(){
                $.ajax({url: '#', success: function(result){
                    $('.ajax-content').html('<hr>Ajax Request Completed !');
                }});
            });
        },
        data(){
            return{
                director_add_name:'',
                director_add_password:'',
                director_add_company:'',
                director_add_tel:'',
                director_add_pay:'',
                b_provice:[
                    {
                        id:1,
                        name:'北京'
                    },
                    {
                        id:2,
                        name:'天津'
                    },
                    {
                        id:3,
                        name:'重庆'
                    }
                ],
                c_provice:[],
                b_school:[
                    {
                        id:1,
                        name:'北京大学'
                    },
                    {
                        id:2,
                        name:'天津大学'
                    },
                    {
                        id:3,
                        name:'重庆大学'
                    },
                    {
                        id:4,
                        name:'清华大学'
                    },
                    {
                        id:5,
                        name:'人民大学'
                    }
                ],
                c_school:[]
            }
        },
        methods:{
            a(index) {
                let b_item = this.b_school[index];
                this.c_school.push(b_item);
                this.b_school.splice(index,1)
            },
            b(index) {
                let c_item = this.c_school[index];
                this.b_school.push(c_item);
                this.c_school.splice(index,1)
            }
        },
        components:{

        }

    }
</script>
