# numericInput-js

Force input fields to accept numeric value only.

## Setup

1. Include jQuery(local or CDN)

```html
<script src="jquery-3.5.1.min.js"></script>
```

2. Include plugin

```html
<script src="numericInput.js"></script>
```

## Usage

There are 2 ways to init an numeric input:

1. Using jQuery selector

```html
<input type="text" name="phone" />

<script src="jquery-3.5.1.min.js"></script>
<script src="numericInput.js"></script>
<script>
    // Call on specified input
    $(`input[name="phone"]`).numericInput();
</script>
```

2. Using HTML numericinput attribute.

```html
<input type="text" name="phone" numericinput max="3" />

<script src="jquery-3.5.1.min.js"></script>
<script src="numericInput.js"></script>
```

## API Documentation

### `jQuery(selector).numericInput(options)`

`options` (default: `{max: null}`)
Type: plainObject

`max`: Maximum amount of digits accepted.

## Changelog

`1.0.0` Init release
`1.0.1` Now run on dynamically added input.
