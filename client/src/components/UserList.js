import * as React from 'react'

import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    SelectInput,
    DeleteButton,
} from 'react-admin'

export const UserList = props => {
    return (
        <>
            <List {...props}>
                <Datagrid>
                    <TextField source="id" label="UserId" />
                    <TextField source="name" />
                    <TextField source="email" />
                    <TextField source="role" />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            </List>
        </>
    )
}

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput
                source="role"
                choices={[
                    { id: 'user', name: 'user' },
                    { id: 'admin', name: 'admin' },
                ]}
            />
        </SimpleForm>
    </Edit>
)
