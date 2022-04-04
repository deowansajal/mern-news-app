import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import { UserList, UserEdit } from './components/UserList'
import {
    TutorialList,
    TutorialEdit,
    TutorialCreate,
} from './components/TutorialList'

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} />
        <Resource
            name="tutorials"
            list={TutorialList}
            edit={TutorialEdit}
            create={TutorialCreate}
        />
    </Admin>
)

export default App
