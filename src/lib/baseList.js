const baseList = [{   //可拖拽组件库
    id: 1,
    name: '单行输入框',
    icon: 'icon-dingdingdanhangshurukuang',
    field: 'TextField',
    element: 'input',
    placeholderText: '请输入',
    iType: "",
    iClassName: ""
}, {
    id: 2,
    name: '多行输入框',
    icon: 'icon-kongjian-duohangshurukuang',
    field: 'TextareaField',
    element: 'textarea',
    placeholderText: '请输入',
    iType: "",
    iClassName: ""
}, {
    id: 3,
    name: '数字输入框',
    icon: 'icon-kongjian-shuzishurukuang',
    field: 'NumberField',
    element: 'inputNumber',
    placeholderText: '请输入',
    iType: "",
    iClassName: ""
}, {
    id: 4,
    name: '单选框',
    icon: 'icon-bk-radio',
    field: 'RadioField',
    element: 'radio',
    placeholderText: '请选择',
    iType: "right",
    iClassName: "icon-enter"
}, {
    id: 5,
    name: '多选框',
    icon: 'icon-duoxuankuang',
    field: 'CheckboxField',
    element: 'checkbox',
    placeholderText: '请选择',
    iType: "right",
    iClassName: "icon-enter"
}, {
    id: 6,
    name: '日期',
    icon: 'icon-riqi',
    field: 'DateField',
    element: 'date',
    placeholderText: '请选择',
    iType: "right",
    iClassName: "icon-enter"
}, {
    id: 7,
    name: '图片',
    icon: 'icon-tupian-copy',
    field: 'PhotoField',
    element: 'image',
    placeholderText: '',
    iType: "camera",
    iClassName: "icon-camera"
}, {
    id: 8,
    name: '说明文字',
    icon: 'icon-shuomingwenzi',
    field: 'TextNoteField',
    element: 'tips',//说明文字标识，内容采取独有的模板
    placeholderText: '请输入说明文字'
}];

export default baseList