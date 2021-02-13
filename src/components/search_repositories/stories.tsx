import React from "react"
import 'semantic-ui-css/semantic.min.css'
import SearchRepositories, { IProps } from '.'
import repositoriesMock from './repositories_mock.json'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

const description: Meta = {
    title: 'Search Repositories',
    component: SearchRepositories,
    argTypes: {
        datasource: { table: { type: { summary: 'any[]' } }, control: { type: null } },
        onSelect: { table: { type: { summary: 'Function' } }, action: 'repository selection changed' },
    }
}

export default description;

const Template: Story<IProps> = (props) => {

    return (
        <SearchRepositories
            {...props}
        />
    )
};

export const Default = Template.bind({});

Default.args = {
    datasource: repositoriesMock,
};
