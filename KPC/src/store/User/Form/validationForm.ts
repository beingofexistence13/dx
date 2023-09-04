import React from 'react'
import { Iformvaild } from '../../../interface/user/Iformvaild'


const validate = (values: Iformvaild) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } 
    if (!values.lastName) {
        errors.lastName = 'Required'
    } 
    if (!values.birthday) {
        errors.birthday = 'Required'
    } else{

        var CurrentDate = new Date();
        var GivenDate = new Date(values.birthday);
    
        if(GivenDate > CurrentDate){
            errors.birthday = 'Date is greater than the current date.';
        }
    }
    if (!values.mobile_phone) {
        errors.mobile_phone = 'Required'
    } else if ((values.mobile_phone || "").replace(/\ /g, "").length < 11) {
        errors.mobile_phone = 'Invalid phone number, must be 10 digits'
    }
    if (!values.title) {
        errors.title = 'Required'
    } 
    if (!values.expected_salary) {
        errors.expected_salary = 'Required'
    } 

    if (values.citizen_id && ((values.citizen_id as string) || "").replace(/\-/g, "").length != 13) {
        errors.citizen_id = 'Invalid Citizen ID, must be 13 digits'
    }
    return errors
}


export default validate