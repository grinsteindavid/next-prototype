import React from "react"
import 'semantic-ui-css/semantic.min.css'
import Navigator, { IProps } from '.'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

const description: Meta = {
    title: 'Navigator',
    component: Navigator,
    argTypes: {
        router: { table: { type: { summary: 'NextRouter' } }, control: { type: 'object' } },
    }
}

export default description;

const mockRouter: any = {
    route: '/home/users/[id]',
    pathname: '/home/users/[id]',
    query: {
        id: 'test-id'
    },
    basePath: '/',
    push: (route: string) => {
        alert(route)
    }
}

const Template: Story<IProps> = (props) => {

    return (
        <Navigator
            {...props}
        />
    )
};

export const Default = Template.bind({});

Default.args = {
    router: mockRouter
};
