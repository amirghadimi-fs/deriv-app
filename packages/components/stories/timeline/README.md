# Timeline Component

A timeline is a graphical representation of a chronological sequence of events.

## Usage

```jsx
import Timeline from 'deriv-components';

const DummyComponent = props => (
    <Timeline>
        <Item item_title='Title'>
            <div>test</div>
        </Item>
        <Item item_title='Title2'>
            <div>test2</div>
        </Item>
        <Item item_title='Title3'>
            <div>test3</div>
        </Item>
    </Timeline>
);
```

## Props

| Name       | Type     | Default | Description                     |
| ---------- | -------- | ------- | ------------------------------- |
| item_title | {string} | null    | It is the prop of Timeline.Item |

# Full example:

```jsx
import Timeline from 'deriv-components';

const DummyComponent = props => (
    <Timeline>
        <Timeline.Item item_title='Title'>
            <div>test</div>
        </Timeline.Item>
        <Timeline.Item item_title='Title2'>
            <div>test2</div>
        </Timeline.Item>
        <Timeline.Item item_title='Title3'>
            <div>test3</div>
        </Timeline.Item>
    </Timeline>
);
```
