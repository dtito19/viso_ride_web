import React, {  } from 'react'
import Input from "./input";
import { useForm, Form } from './useForm';



const initialFValues = {
    
    station: '',
    street: '',
    ward: '',
    district: '',


}

export default function StationForm() {


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('station' in fieldValues)
            temp.station = fieldValues.station ? "" : "This field is required."
        if ('street' in fieldValues)
            temp.street = fieldValues.street ? "" : "This field is required."
        if ('ward' in fieldValues)
            temp.ward = fieldValues.ward ? "" : "This field is required."
        if ('district' in fieldValues)
            temp.district = fieldValues.district ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            // employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
           
                    <Input
                        name="station"
                        label="Kituo"
                        value={values.station}
                        onChange={handleInputChange}
                        error={errors.station}
                    />
                    <Input
                        label="street"
                        name="Mtaa"
                        value={values.street}
                        onChange={handleInputChange}
                        error={errors.street}
                    />
                    <Input
                        label="Kata"
                        name="ward"
                        value={values.ward}
                        onChange={handleInputChange}
                        error={errors.ward}
                    />
                    <Input
                        label="Wilaya"
                        name="district"
                        value={values.district}
                        onChange={handleInputChange}
                        error={errors.district}
                    />

        </Form>
    )
}