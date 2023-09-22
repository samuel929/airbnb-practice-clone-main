import React from 'react'
import { useField } from 'formik';

function AirBnbTextInput({ ...props }:any) {
    const [field, meta] = useField(props);
    console.log(meta.error)
  return (
    <div className="form-group">
    <input
      {...field}
      {...props}
      className={`input-form ${meta.touched && meta.error && 'is-invalid'}`}
    />
    {meta.touched && meta.error ? (
      <div className="error-color">{meta.error}</div>
    ) : null}
  </div>
  )
}

export default AirBnbTextInput