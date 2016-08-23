<template xmlns:v-validate="http://www.w3.org/1999/xhtml">
    <div class="content-wrapper" style="min-height: 685px">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>

                <small></small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i>主页 </a></li>
                <li class="active">新增主管</li>
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
                                <label for="director_add_name" class="col-sm-2 control-label">姓名/公司名称</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="director_add_name" placeholder="请输入 姓名" v-model="director_add_name" initial="off" v-validate:director_add_name="['required']">
                                    <p class="text-red" v-if="$validation_director_add.director_add_name.required"><small>请输入姓名!</small></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="director_add_password" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="director_add_password" placeholder="请输入 密码" v-model="director_add_password" initial="off" v-validate:director_add_password="['required']">
                                    <p class="text-red" v-if="$validation_director_add.director_add_password.required"><small>请输入密码!</small></p>
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
                                <label for="pay_type" class="col-sm-2 control-label">支付方式</label>
                                <div class="col-md-2">
                                    <select class="form-control" id="pay_type" v-model="payment_account_type">
                                        <option :value="1" >支付宝</option>
                                        <option :value="2" >微信</option>
                                        <option  :value="3">银行卡</option>
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
                                    <select class="form-control" v-model="province_name" id="director_add_provice" v-model="province_name" @change="get_school">
                                        <option v-for="i in provinces" :value="i.province_name">{{i.province_name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputPassword10" class="col-sm-2 control-label">选择项目</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="inputPassword10">
                                        <option v-for="i in project_list"  :value="i.project_id" @click="option_project($index)">{{i.project_name}}
                                        </option>
                                    </select>
                                </div>
                                <label for="director_add_project" class="col-sm-2 control-label">已选项目</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="director_add_project">
                                        <option v-for='i in selected_project_list' :value="i.project_id" @click="selected_project($index)">{{i.project_name}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="c_school" class="col-sm-2 control-label">备选大学</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="c_school">
                                        <option v-for="i in university_list" :value="i.university_id"  @click="option($index)">{{i.university_name}}
                                        </option>
                                    </select>
                                </div>
                                <label for="inputPassword9" class="col-sm-2 control-label">已选大学</label>
                                <div class="col-md-4">
                                    <select multiple="" class="form-control" id="inputPassword9">
                                        <option v-for='i in selected_university_list' :value="i.university_id"  @click='selected($index)'>{{i.university_name}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">备注</label>
                                <div class="col-sm-5">
                                    <textarea class="form-control" rows="3" placeholder="备注 ..." v-model="remarks"></textarea>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <button class="btn btn-info pull-right" @click="data_request">新增</button>
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
    import {oam_req} from '../../util/base_request'
    export default{
        ready(){
            this.data_provinces(),
            this.get_project(),
            this.get_school()
        },
        data(){
            return{
                director_add_name:'',//姓名/公司名称
                director_add_password:'',//密码
                remarks:'',//备注
                director_add_tel:'',//电话
                director_add_pay:'',//支付账号
                payment_account_type:1,//支付类型
                university_ids:'',//大学 id
                project_ids:'',//项目 id
                provinces:[], // 省份数据
                province_name:'北京', // 被选中的省份

                project_list:[], // 获取到的(备选)项目列表
                selected_project_list:[], // 已选择项目列表

                university_list:[],//备选大学数据
                selected_university_list:[],//已选大学数据

            }
        },
        methods:{

            //获取省份
            data_provinces(){
                let self = this;
                let params = {};
                oam_req(1, params, function (data) {
                })
            },
            //获取省份对应的学校
            get_school(){
                let self = this;
                let params = {};
                oam_req(1, params, function (data) {

                })
            },
           // 选择大学
            option(index){
                let self = this;
                let option_item = this.university_list[index];
                self.selected_university_list.push(option_item );
                self.university_list.splice(index,1)
            },
            selected(index){
                let self = this;
                let selected_item = this.selected_university_list[index];
                self.university_list.push(selected_item);
                self.selected_university_list.splice(index,1);

            },

            //获取属于用户的项目
            get_project(){
                let self = this;
                let params = {};
                oam_req(1, params, function (data) {

                })
            },
            option_project(index){
                let self = this;
                let option_item = this.project_list[index];
                self.selected_project_list.push(option_item );
                self.project_list.splice(index,1);
            },
            selected_project(index)  {
                let self = this;
                let selected_item = this.selected_project_list[index];
                self.project_list.push(selected_item);
                self.selected_project_list.splice(index,1);
            },

            //新增主管

            data_request(){
                let self = this;

                let university_ids = [];
                let project_ids = [];
                this.selected_university_list.forEach(function(val){
                    university_ids.push(val.university_id);
                });
                this.selected_project_list.forEach(function(val){
                    project_ids.push(val.project_id);
                });

                let params = {};

                this.$validate(true, function () {

                    if (self.$validation_director_add.valid) {
                        oam_req(1, params, function (data) {
                            if(data.common.code){
                                alert('新增失败!')
                            }else {
                                self.$router.go('/');
                            }
                        })
                    }

                })

            }


        },
        components:{

        }

    }
</script>
