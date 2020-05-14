import { combineReducers } from 'redux';
import { reducer as loginReducer } from "../pages/login/store";
import agentsetReducer from '../pages/agentSetting/store';
import financeSetReducer from '../pages/agentSetting/store';
import formAgentReducer from '../pages/agentSetting/store';
import financeDataReducer from '../pages/agentSetting/store';
import agentsignReducer from '../pages/agentSetting/store';
import beAgentSignReducer from '../pages/agentSetting/store';
import agentQueryReducer from '../pages/agentSetting/store';

import signReducer from '../pages/signCenter/store';
import agentQuery from '../pages/agentSetting/agentQuery';

import sysAdminReducer from '../pages/systemSetting/store';
import EmployeeTransReducer from  '../pages/systemSetting/store';
import addPersonReducer from '../pages/systemSetting/store';
import SearchSpecialReducer from '../pages/systemSetting/store';
import SysHelpReducer from '../pages/systemSetting/store';
import TransFormReducer from '../pages/systemSetting/store'
import TransReducer from '../pages/systemSetting/store';

const reducer = combineReducers({
    loginReducer,
    agentsetReducer,
    financeSetReducer,
    formAgentReducer,
    financeDataReducer,
    agentsignReducer,
    beAgentSignReducer,
    agentQueryReducer,

    signReducer,

    sysAdminReducer,
    EmployeeTransReducer,
    addPersonReducer,
    SearchSpecialReducer,
    SysHelpReducer,
    TransFormReducer,
    TransReducer
});

export default reducer;