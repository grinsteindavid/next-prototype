import React from "react"
import 'semantic-ui-css/semantic.min.css'
import SearchUsers, { IProps } from '.'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

const description: Meta = {
    title: 'Search github users',
    component: SearchUsers,
    argTypes: {
        onSelect: { table: { type: { summary: 'Function' } }, action: 'user selection changed' },
    }
}

export default description;

const Template: Story<IProps> = (props) => {

    return (
        <SearchUsers
            {...props}
        />
    )
};

export const Default = Template.bind({});

Default.args = {
};
