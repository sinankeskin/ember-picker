# ember-picker

Ember addon for [vanilla-picker](https://github.com/Sphinxxxx/vanilla-picker) color picker library.

![SS](https://github.com/sinankeskin/ember-picker/blob/main/ss.png?raw=true)

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above

## Installation

```
ember install ember-picker
```

## Usage

You can change all global configuration settings via `config/environment.js` file.

Please check [vanilla-picker](https://vanilla-picker.js.org/gen/Picker.html) site for more configuration details.

```javascript
ENV['ember-picker'] = {
  parent: undefined,
  popup: 'right',
  template: undefined,
  layout: 'default',
  alpha: true,
  editor: true,
  editorFormat: 'hex',
  cancelButton: false,
  color: undefined,
  onChange: undefined,
  onDone: undefined,
  onOpen: undefined,
  onClose: undefined,
};
```

Example as a component

```handlebars
<Picker @color={{this.color}} @onDone={{this.onDone}} />
```

```handlebars
<Picker
  @color={{this.color}}
  @onDone={{this.onDone}}
  style="{{if
      this.color
      (concat 'width: 32px;height: 32px;background:' this.color ';')
      'width: 32px;height: 32px;'
    }}"
>
  Block
</Picker>
```

Example as a modifer

```handlebars
<div
  class="ember-picker"
  style="{{if
      this.color
      (concat 'width: 32px;height: 32px;background:' this.color ';')
      'width: 32px;height: 32px;'
    }}"
  {{picker color=this.color onDone=this.onDone}}
>
  Modifier
</div>
```

If you would like access to the picker instance in order to call some methods directly, for example to hide or show
programmatically, pass an action to registerAPI

```handlebars
<Input {{picker registerApi=this.saveApi color=this.color onDone=this.onDone}} />
```

```javascript
// save the picker instance to use later
@action
saveApi(picker) {
  this.picker = picker;
}

// programmatically open the picker
@action
openPicker() {
  this.picker.show();
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
