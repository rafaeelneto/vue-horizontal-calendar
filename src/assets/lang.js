const lang = {
    "zh": {
        small_title: "Vue.js横向日历组件",
        install: "安装",
        import: "引入",
        import_detail: "当前组件只支持局部引入",
        prop: "参数名",
        description: "说明",
        type: "类型",
        default: "默认值",
        required: "是否必填",
        slot: "插槽名",
        event: "事件名",
        cbArg: "回调参数",

        example: "示例",
        week: "星期",
        year: "年",
        month: "月",
        eg1: "设置初始化选中日期",
        eg2: "设置可选日期范围",
        eg3: "设置左右切换的间隔天数",
        eg4: "设置语言",
        eg5: "自定义颜色、样式",
        eg6: "用周历的方式展示",
        
        eg1_detail: "默认的初始化选中日期为‘今天’，可自定义任意日期。",
        eg2_detail: "由于当前日历插件是宽度自适应的，所以设置‘maxDate’时，请考虑到右侧最后一个日期可能存在显示不完全的问题；你可以通过设置父组件容器的宽度，来使得最后一个日期显示完整",
        eg3_detail: "即左右切换按钮，单次滑动的日期天数；默认值为‘7’天",
        eg5_detail: ["选中的日期背景色","‘今天’未选中时的背景色","‘周日’的文字自定义（仅在lang='zh'时生效）","初始化选中日期所在的位置","是否显示日历条顶部的边框","通过slot自定义左右按钮的样式"],
        eg6_detail: ["将组件宽度设为410px；滑动间隔日期设置为7天；周历的外观就做好了；","自定义一个日历头部的样式，用于显示当前年月数据；","需要传入当前日期所在周的'周一'的日期作为choosedDate数据，因此需要动态计算该值；","通过组件提供的'firstDayChange'事件，动态变更当前周所在的年月数据(该事件会返回当前最左侧日期的数据)；"],

    },
    en: {
        small_title: "a horizontal calendar component for Vue.js",
        install: "Install",
        import: "Import",
        import_detail: "This component only supports local import",
        prop: "Prop",
        description: "Description",
        type: "Type",
        default: "Default",
        required: "Rquired",
        slot: "Slot",
        event: "Event",
        cbArg: "Callback Arg",

        example: "e.g.",
        week: " ",
        year: "-",
        month: "",
        eg1: "set init choosedDate",
        eg2: "set date range",
        eg3: "set single click interval days",
        eg4: "set language",
        eg5: "set custom colors,icons,and styles",
        eg6: "display by weekly calendar",

        eg1_detail: "The default choosedDate is 'today' (new Date())，you can set any date as the choosedDate。",
        eg2_detail: "Because the calendar component is width adaptive, when setting prop 'maxdate', please consider that the last date on the right may not be displayed completely; you can make the last date display complete by setting the width of the parent component container",
        eg3_detail: "You can set the swipe interval days, the default value is '7'.",
        eg5_detail: ["The background-color of choosedDate","the background-color of today hasn't been choosed","only for Chinese","the position of choosedDate when init coponent","show border-top of the calendar component","you can use other icons, imgs… to instead the default arrows icon by slots"],
        eg6_detail: ["Set the component width to 410px, set prop 'swipeSpace' to '7' day;","Customize the style of a calendar header to display the current month and year data;","The date of Monday in current week needs to be passed in as 'choosedDate', so the value needs to be computed dynamically","Dynamically change the month and year data of the current week through the 'firstdaychange' event provided by the component(This event will return the data of the leftmost date of the component);"],

    }
}

export default lang