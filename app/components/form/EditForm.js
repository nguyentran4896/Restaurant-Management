import React from 'react'
import { Field } from 'redux-form'

import EditFormInputText from 'components/form/element/EditFormInputText'
import InputDateTime from 'components/form/element/InputDateTime'
import SubmitButton from 'components/form/element/SubmitButton'
import SelectField from 'components/form/element/SelectField'
import InputTextArea from 'components/form/element/InputTextArea'
import CkEditor from 'components/form/element/CkEditor'
import ImageUploader from 'components/form/element/ImageUploader'

const checkFieldType = type => {
  switch (type) {
    case 'datetime':
      return InputDateTime
    case 'select':
      return SelectField
    case 'textarea':
      return InputTextArea
    case 'ckeditor':
      return CkEditor
    case 'image':
      return ImageUploader
    default:
      return EditFormInputText
  }
}

const EditForm = (props) => {
  const { selectFieldData, items, itemIndex, editFieldInfo, submitting, handleSubmit, onSubmit } = props
  handleSubmit.onSubmit = onSubmit
  const data = items[itemIndex]

  return (
    <form onSubmit={handleSubmit}>
      {editFieldInfo.map((item, index) => {
        if (item.type === 'textarea' || item.type === 'ckeditor' || item.type === 'image') {
          return (
            <div className='col-md-12' key={index}>
              <Field
                name={item.fieldName}
                component={checkFieldType(item.type)}
                selectFieldData={selectFieldData}
                label={item.viewTitle}
                required={item.isRequired}
                defaultValue={data[item.fieldName]}
                type={item.type}
                fieldName={item.fieldName}
              />
            </div>
          )
        }

        return (
          <div className='col-md-6' key={index}>
            <Field
              name={item.fieldName}
              component={checkFieldType(item.type)}
              selectFieldData={selectFieldData}
              label={item.viewTitle}
              required={item.isRequired}
              defaultValue={data[item.fieldName]}
              type={item.type}
              fieldName={item.fieldName}
            />
          </div>
        )
      })}
      <div className='col-md-12' style={{ textAlign: 'center' }}>
        <SubmitButton
          text='Xác nhận'
          submitting={submitting}
          className='btn btn-primary'
        />
      </div>
    </form>
  )
}

export default EditForm
