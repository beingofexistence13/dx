import { Badge } from './Badge';

export default {
  component: Badge,
};

export const Default = { args: { children: 'Default' } };
export const Positive = { args: { status: 'positive', children: 'Positive' } };
export const Negative = { args: { status: 'negative', children: 'Negative' } };
export const Neutral = { args: { status: 'neutral', children: 'Neutral' } };
export const Warning = { args: { status: 'warning', children: 'Warning' } };
export const Critical = { args: { status: 'critical', children: 'Critical' } };
