import { useState } from "react";
import type { NextPage } from 'next'
import DefaultInput from "../../components/Inputs/DefaultInput";
import Checkbox from "../../components/Inputs/Checkbox";
import SelectInput from "../../components/Inputs/SelectInput";
import Form from "../../components/Form";
import {string} from "prop-types";


const someDataArray = [
    {id: 0, value: '1'},
    {id: 0, value: '111'},
    {id: 0, value: '1111432'},
    {id: 0, value: '324'},
    {id: 0, value: '4324'},
    {id: 0, value: '9999'},
    {id: 0, value: '998889'},
    {id: 0, value: '5555'},
]

const Forms: NextPage = () => {
    const [dropData, setDropData] = useState<Array<any>>([])

    const input = [
        {type: 'text', inputType: 'default', grid: '1/2'},
        {type: 'text', inputType: 'checkbox', grid: '1/2'},
        {type: 'text', inputType: 'select', grid: '1/2'},
    ]

    const getValue = (value: string) => {
        if(value) {
            const dataArray: Array<any> = []

            someDataArray.map(item => {
                item.value.includes(value) && dataArray.push(item)
            })

            setDropData(dataArray)
        } else {
            setDropData([])
        }
    }

    return (
        <Form
            gap='10px'
            padding='20px 30px'
        >
            <DefaultInput
                width='300px'
                height='40px'
                type='text'
            />
            <Checkbox
                width='20px'
                height='20px'
            />
            <SelectInput
                width='300px'
                height='40px'
                dropData={dropData}
                onChange={getValue}
                searcher
            />
        </Form>
    )
}

export default Forms
