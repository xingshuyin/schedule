<template>
	<div>
		<d2-crud-x
            ref="d2Crud"
			:columns="columns"
			:data="data"
			@cell-data-change="handleCellDataChange"
            :form-options="formOptions"
 			@dialog-open="handleDialogOpen"
 			@row-add="handleRowAdd"
 			@dialog-cancel="handleDialogCancel"
		>
		<el-button slot="header" style="margin-bottom: 5px" @click="addRowWithNewTemplate"
			>新增一行</el-button
		>
		<el-button slot="header" style="margin-bottom: 5px" @click="removeRow"
			>删除最后一行</el-button
		>
        <el-button size="small" type="primary" @click="lineEditAdd()"><i class="el-icon-plus"/> 新增</el-button>
        </d2-crud-x>
	</div>

</template>
// 向 columns 的 component 对象传入 name 属性来控制渲染的组件，默认为 el-input ，
//支持的组件有 el-input-number el-radio el-checkbox el-select el-cascader el-switch el-slider el-time-select el-time-picker el-date-picker el-rate el-color-picker ，
//也可以使用 render函数 自己渲染组件，只需在 component 中传入 renderFuntion ，接收两个参数： h是render函数的固定参数， scope 是单元格中的数据，render函数使用方法。
//通过 cell-data-change事件可以监听单元格内的数据变化，监听在crud内部是通过change事件触发的（这意味着input类组件失去焦点才会触发事件，单纯输入不会触发），
//接收一个对象参数 {rowIndex, key, value, row}， rowIndex 为改变所在行，key 为改变的字段，value 为改变后的值，row 是改变所在行的所有数据。代码如下：
<script>
import { d2CrudPlus } from "d2-crud-plus";
export default {
	name: "page1",

	data() {
		return {
            lineEdit: {
              validation: true // 行编辑是否启用，性能会有点影响
            },
            rowHandle:{
              rowEdit:{show:true}
            },
			columns: [
				{
					title: "开始时间",
					key: "start",
					component: {
						name: "el-date-picker",
						size: "small",
					},
				},
				{
					title: "结束时间",
					key: "end",
					component: {
						name: "el-date-picker",
						size: "small",
					},
				},
				{
					title: "施工过程",
					key: "guocheng",
					component: {
						name: "el-input",
						size: "small",
					},
				},
				{
					title: "施工段",
					key: "duan",
					component: {
						name: "el-input",
						size: "small",
					},
				},
			],
			data: [],
			formOptions: {
				labelWidth: "80px",
				labelPosition: "left",
				saveLoading: false,
			},
		};
	},
	methods: {
		handleDialogOpen({ mode }) {
			this.$message({
				message: "打开模态框，模式为：" + mode,
				type: "success",
			});
		},
		addRow() {
			this.$refs.d2Crud.addRow({
				date: "2018-01-01",
				name: "王小二",
				address: "上海市普陀区金沙江路 7777 弄",
			});
		},
		removeRow() {
			this.$refs.d2Crud.removeRow(this.$refs.d2Crud.d2CrudData.length - 1);
		},
		addRowWithNewTemplate() {
			this.$refs.d2Crud.showDialog({
				mode: "add",
				template: {
					start: {
						title: "开始时间",
						value: "",
						component: {
							name: "el-date-picker",
							size: "small",
						},
					},
					end: {
						title: "结束时间",
						value: "",
						component: {
							name: "el-date-picker",
							size: "small",
						},
					},
					guocheng: {
						title: "施工过程",
						value: "",
						component: {
							name: "el-input",
							size: "small",
						},
					},
					duan: {
						title: "施工段",
						value: "",
						component: {
							name: "el-input",
							size: "small",
						},
					},
				},
			});
		},
		handleRowAdd(row, done) {
			this.formOptions.saveLoading = true;
			setTimeout(() => {
				// console.log(row);
				this.$message({
					message: "保存成功",
					type: "success",
				});
				done({
					address: "我是通过done事件传入的数据！",
				});
				this.formOptions.saveLoading = false;
			}, 300);
		},
		handleDialogCancel(done) {
			this.$message({
				message: "取消保存",
				type: "warning",
			});
			done();
		},
        handleCellDataChange(a){
            console.log('s')
        }
	},
};
</script>
