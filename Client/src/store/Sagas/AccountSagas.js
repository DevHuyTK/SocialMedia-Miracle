import { put, takeEvery } from 'redux-saga/effects'
import getAllAccounts from '../../fetchAPIs/AccountAPI/getAllAccount'
import registerAccount from '../../fetchAPIs/AccountAPI//createAccount'
import editAccount from '../../fetchAPIs/AccountAPI//updateAccount'
import deleteAccount from '../../fetchAPIs/AccountAPI//userDeleteAccount'
import adminDeleteAccount from '../../fetchAPIs/AccountAPI//adminDeleteAccount'
import loginAccount from '../../fetchAPIs/AccountAPI/signinAccount'
import * as types from '../constant'


function* loginAccount(action) {
    try {
        yield put({
            type: types.GET_ACCOUNT_SUCCESS,
            payload: {
                accData: action.payload
            }
        })
    }
    catch (error) {
        yield put({
            type: types.GET_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}

function* getAllAccounts(action) {
    try {
        yield put({
            type: types.GET_ACCOUNT_SUCCESS,
            payload: {
                accData: action.payload
            }
        })
    }
    catch (error) {
        yield put({
            type: types.GET_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}

function* registerAccount(action) {
    try {
        yield put({
            type: types.ADD_ACCOUNT_SUCCESS,
            payload:{
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            }
        })
        yield put({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: action.payload
            }
        })
    }
    
    catch (error) {
        yield put({
            type: types.ADD_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}
function* editAccount(action) {
    try {
        yield put({
            type: types.EDIT_ACCOUNT_SUCCESS
        })
        yield put({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: action.payload
            }
        })
    }
    catch (error) {
        yield put({
            type: types.EDIT_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}

function* deleteAccount(action) {
    try {
        yield put({
            type: types.DELETE_ACCOUNT_SUCCESS
        })
        yield put ({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: action.payload
            }
        })
    }
    catch (error) {
        yield put({
            type: types.DELETE_ACCOUNT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* adminDeleteAccount(action) {
    try {
        yield put({
            type: types.DELETE_ACCOUNT_SUCCESS
        })
        yield put ({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: action.payload
            }
        })
    }
    catch (error) {
        yield put({
            type: types.DELETE_ACCOUNT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}


export const ACCOUNTSaga = [
    takeEvery(types.GET_ACCOUNT_REQUEST, getAllAccounts),
    takeEvery(types.ADD_ACCOUNT_REQUEST, registerAccount),
    takeEvery(types.EDIT_ACCOUNT_REQUEST, editAccount),
    takeEvery(types.DELETE_ACCOUNT_REQUEST, deleteAccount),
    takeEvery(types.ADMIN_DELETE_ACCOUNT_REQUEST, adminDeleteAccount),
    takeEvery(types.LOGIN_ACCOUNT_REQUEST, loginAccount)

];