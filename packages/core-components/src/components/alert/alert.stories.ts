import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './alert';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Alert',
  component: 'pp-alert',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'success',
        'neutral',
        'warning',
        'danger',
      ],
    },
    open: {
      control: { type: 'boolean' },
    },
    closable: {
      control: { type: 'boolean', min: 0, max: 10000, step: 1 },
    },
  },
  args: {
    variant: 'primary',
    open: true,
    closable: false,
  },
  render: ({ variant, open, closable }) =>
    html`<pp-alert
      variant=${variant}
      open=${open}
      closable=${closable}
      duration=${Infinity}
    >
    </pp-alert>`,
};

export default meta;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
