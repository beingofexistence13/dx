import React from 'react'
import { connect } from 'react-redux'
import { initialize, reset } from 'redux-form'
import Form from './Form'
import {
  addUser, resetUser,
} from '../../store/User/actions'
import DEFAULT_SETTINGS from '../../store/User/settings';

let SearchContainer = ({ 
  initialValues,
  handleSubmits, 
  handleCancel
}: any) => (
  <Form 
    initialValues={initialValues} 
    onSubmit={(values:any) => handleSubmits(values)} 
    handleCancel={handleCancel}
  />
)

const mapDispatchToProps = (dispatch: any) => ({
  handleSubmits: (value: any) => {
    dispatch(addUser(value))
    dispatch(initialize('user',DEFAULT_SETTINGS.edit))
    reset();
  },
  handleCancel: () => {
    dispatch(resetUser())
    dispatch(initialize('user',DEFAULT_SETTINGS.edit))
    reset();
  }
})

const mapstateToProps = (state: any) => {
  return {
    initialValues: state.user.edit,
  }
}

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(SearchContainer)
