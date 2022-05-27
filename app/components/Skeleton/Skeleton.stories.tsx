import { Skeleton } from './Skeleton';

const Template = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: 'w-64 h-12',
    type: 'circle'
};

const parameters = {
    title: 'Skeleton',
    component: Skeleton,
    argTypes: {
        type: {
            options: ['circle', 'square', ''],
            control: { type: 'select', value: '' }
        }
    }
};

export default parameters;
