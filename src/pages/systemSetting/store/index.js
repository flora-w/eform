import { combineReducers } from 'redux';
import {reducer as SysAdminSetReducer} from '../SysAdmin/store';
import {reducer as EmployeeTransferReducer} from  '../EmployeeTransfer/store';
import {reducer as addSpecialPersonReducer} from  '../AddSpecialPerson/store';
import {reducer as SearchSpecialPersonReducer} from  '../SearchSpecialPerson/store';
import {reducer as SysHelpDeskReducer} from '../SysHelpDesk/store';
import {reducer as TransFormSysReducer} from '../TransFormSys/store';
import {reducer as TransFormRepReducer} from '../TransFormRep/store';


export default combineReducers({
    SysAdminSetReducer,
    EmployeeTransferReducer,
    addSpecialPersonReducer,
    SearchSpecialPersonReducer,
    SysHelpDeskReducer,
    TransFormSysReducer,
    TransFormRepReducer
})