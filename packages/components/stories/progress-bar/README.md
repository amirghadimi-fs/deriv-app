# Progress Bar Component

A progress bar can be used to show a user how far along he/she is in a process.

## Usage

```jsx
import ProgressBar from 'deriv-components';

const DummyComponent = props => (
    <ProgressBar value={item.value} label={item.label} />
);
```

## Props

| Name                  | Type             | Default | Description                                                 |
| --------------------- | ---------------- | ------- | ----------------------------------------------------------- |
| className             | {string}         | null    | ClassName for progress bar                                  |
| danger_limit          | {number}         | 0.2     | Values lower than this limit are known as danger value. This limit must be within 0 and 1.  |
| label                 | {string}         | ''      | Text placing within the progress bar                        |
| value                 | {number}         | 0       | Width of colored part of progress bar is determined by multiplying this value by 10. It must be within 0 and 1 |
| warning_limit         | {string}         | 0.5     | Values lower than this limit and greater than danger-limit are known as warning value. This limit must be within 0 and 1.  |

# Full example:

```jsx
import ProgressBar from 'deriv-components';

const DummyComponent = props => (
    <ProgressBar label={duration_type} value={progress_value} />
);
```
