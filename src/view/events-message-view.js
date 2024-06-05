import AbstractView from '../framework/view/abstract-view.js';

function createEventsMessageTemplate() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}

export default class EventsMessageView extends AbstractView {
  get template() {
    return createEventsMessageTemplate();
  }
}
