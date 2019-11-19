import {useState} from 'react'

export const useForm = (params) => {
    const [values, setValues] = useState(params)

    return [
        values, ev => {
          setValues({
            ...values,
            [ev.target.name]: ev.target.value
          });
        }
      ]
}