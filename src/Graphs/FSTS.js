import { connect } from 'react-redux'
import {OptionCurves, IVCurves} from './Graphs'


const mapStateToProps=state=>({
    callData:state.fsts.callDisplay,
    putData:state.fsts.putDisplay,
    label:'Asset Prices',
    title:'FSTS'
})

export const IVFSTS=connect(
    mapStateToProps
)(IVCurves)

export const FSTS = connect(
    mapStateToProps
)(OptionCurves)
