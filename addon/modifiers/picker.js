/* globals Picker */

import { cached, tracked } from '@glimmer/tracking';

import Modifier from 'ember-modifier';
import { getOwner } from '@ember/application';

export default class PickerModifier extends Modifier {
  /**
   * The picker instance
   */
  @tracked
  picker;

  @cached
  get _config() {
    const config =
      getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-picker'] || {};
  }

  get _options() {
    const options = this._defaultOptions();

    Object.assign(options, this._config, this.getArgs());

    return options;
  }

  /**
   * @argument parent
   * @type {HtmlElement} HTML Element
   */
  _defaultOptions() {
    return {
      parent: this.element,
    };
  }

  getArgs() {
    return Object.keys(this.args.named).length
      ? this.args.named
      : this.args.positional[0] || {};
  }

  didUpdateArguments() {
    this.picker.setOptions(this._options);
  }

  didInstall() {
    this.picker = new Picker(this._options);

    if (
      this._options.registerAPI &&
      typeof this._options.registerAPI === 'function'
    ) {
      this._options.registerAPI(this.picker);
    }
  }

  willRemove() {
    this.picker.destroy();
  }
}
