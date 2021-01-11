# Toggle Switch Component

Toggle switche is a digital on/off switch. It prompt users to choose between two mutually exclusive options and always have a default value. 

## Usage

```jsx
import ToggleSwitch from 'deriv-components';

const DummyComponent = props => (
    <ToggleSwitch
        id='toggle-my-ads'
        className='toggle-ads__switch'
        classNameLabel='toggle-ads__switch'
        is_enabled={general_store.is_listed}
        handleToggle={my_ads_store.handleToggle}
    />
);
```

## Props

| Name             | Type       | Default | Description                                                 |
| ---------------- | ---------- | ------- | ----------------------------------------------------------- |
| className        | {string}   | null    | ClassName for toggle switch checkbox                        |
| classNameButton  | {string}   | null    | ClassName for toggle switch button                          |
| classNameLabel   | {string}   | null    | ClassName for toggle switch label                           |
| handleToggle     | {function} | null    | Function triggers when user switch the toggle               |
| id               | {string}   | null    | id for toggle switch checkbox                               |
| is_enabled       | {boolean}  | null    | Default state of toggle switch                              |

# Full example:

```jsx
import ToggleSwitch from 'deriv-components';

const DummyComponent = props => (
    <ToggleSwitch
        id='dt_mobile_drawer_theme_toggler'
        classNameLabel='header__menu-mobile-link-toggler-label'
        classNameButton={classNames('header__menu-mobile-link-toggler-button', {
            'header__menu-mobile-link-toggler-button--active': is_dark_mode,
        })}
        handleToggle={() => toggleTheme(!is_dark_mode)}
        is_enabled={is_dark_mode}
    />
);
```
