import {useState} from 'react'

export const useColor = (params) => {
    const [values, setValues] = useState(params)

    return [
        values => {
          setValues({
            ...values,
            backgroundColor: params
          });
        }
      ]
}