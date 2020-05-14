//簽核中心
export const SignCenter = {
  ZH_CN: {
    title: '簽核中心',
    path: '/sign',
    children: [
      {title: '進行中表單', path:'/sign/0' , key: '', count: 3, actived: true},
      {title: '待審核表單', path:'/sign/1' , key: '', count: 2, actived: false},
      {title: '審核通過表單', path:'/sign/2' , key: '', count: 1, actived: false},
      {title: '審核駁回表單', path:'/sign/3' , key: '', count: 0, actived: false},
      {title: '已取消表單', path:'/sign/4' , key: '', count: 0, actived: false},
      {title: '已審核表單', path:'/sign/5' , key: '', count: 0, actived: false}
    ]
  }
}


//代理人
export const AgentSetting = {
  ZH_CN: {
      title: '代理人設定選單',
      path: '/agent-setting',
      active:false,
      children: [
        { title: '設定職務代理人', path: '/agent-setting/AgentSet', component: '' , actived: true },
        { title: '設定表單代理人', path: '/agent-setting/FormAgent_set', component: '' , actived: false },
        { title: '代理人設定記錄', path: '/agent-setting/AgentSet_History', component: '' , actived: false },
        { title: '代理他人職務記錄', path: '/agent-setting/BeAgent_History', component: '' , actived: false },
        { title: '代理簽核記錄', path: '/agent-setting/AgentSign_History', component: '' , actived: false },
        { title: '代理他人簽核記錄', path: '/agent-setting/BeAgentSign_History', component: '' , actived: false },
        { title: '查詢代理設定', path: '/agent-setting/Agent_Query', component: '' , actived: false },
        { title: '代理表單退回', path: '/agent-setting/AgentForm_Back', component: '' , actived: false },
      ]
    }
}

//系统设置
export const SystemSetting = {
  ZH_CN: {
    title: '系统管理',
    path: '/system-setting',
    active: false,
    children: [
      {title: '代理人設定', children: [
        {title: '查看設定狀態', path: '/system-setting/AgentList_status', active: false},
        {title: '設定職務代理', path: '/system-setting/System_AgentSet', active: false},
        {title: '查看設定歷史記錄', path: '/system-setting/AgentHistory', active: false}
      ]},
      // {title: '特殊人員維護', children: [
      //   {title:'新增特殊人員',path:'/system-setting/addSpecialPerson',active:false},
      //   {title: '特殊人員查詢', path: '/system-setting/QuerySpecialMembers', active: false},
      //   {title: '特殊姓名維護', path: '/system-setting/SpecialNameMaintain', active: false},
      // ]},
      {title: '系統HelpDesk', path: '/system-setting/SysHelpDesk', active: false},
      {title: '專案管控系統', path: '/system-setting/zEmpty', active: false},
      {title: '轉單系統', children: [
        {title: '表單轉簽', path: '/system-setting/transFormSys', active: false},
        {title: '轉簽查詢', path: '/system-setting/transFormRep', active: false}
      ]},
      {title: '加班取消', path: '/system-setting/DefaultOT', active: false},
      {title: '表單取消', path: '/system-setting/FormCancel', active: false},
      {title: '人員轉調', path: '/system-setting/EmployeeTransfer', active: false},
      {title:'管理员维护',path:'/system-setting/SysAdmin',active:false},
      {title:'新增特殊人員',path:'/system-setting/AddSpecialPerson',active:false},
      {title:'查询特殊人員',path:'/system-setting/SearchSpecialPerson',active:false},
      {title:'表單轉簽',path:'/system-setting/TransFormSys',active:false},
      {title:'轉簽查询',path:'/system-setting/TransFormRep',active:false}
    ]
  }
}

export const MisCenter={

  ZH_CN: {
    title: '咨訊服務中心',
    path: '/mis_center',
    active:false,
    children: [
      {title:'表單填寫',children:[
        { title: '咨詢服務申請', path: '/mis_center/FillForm', component: '' , actived: true },
        {title:'咨詢服務管理' },
        {title:'webEx Teleconference' }
      ]},
      {title:'表單查詢',children:[
        { title: '咨詢服務申請' },
        {title:'咨詢服務管理' },
      ]},
      {title:'表單維護',children:[
        { title: '咨詢服務申請'},
        {title:'電話分機維護' },
        {title:'咨詢服務管理' },
      ]}
    ],

  }
}