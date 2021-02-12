import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked
  color = '#FF7C00';

  @action
  onDone(color) {
    console.log('color', color.hex);
    this.color = color.hex;
  }
}
