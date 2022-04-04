import * as React from 'react'

import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    ImageInput,
    SimpleForm,
    SelectInput,
    DeleteButton,
    TextInput,
    FileInput,
    FileField,
} from 'react-admin'

export const TutorialList = props => {
    return (
        <>
            <List {...props}>
                <Datagrid>
                    <TextField source="title" />
                    <TextField source="content" />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            </List>
        </>
    )
}

export const TutorialEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput multiline source="content" />
        </SimpleForm>
    </Edit>
)

export const TutorialCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput multiline source="content" />
            <FileInput
                source="files"
                label="Related files"
                accept={[
                    // 'application/pdf',
                    // 'application/jpg',
                    // 'application/jpeg',
                    'application/png',
                ]}
            >
                <FileField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    </Create>
)
