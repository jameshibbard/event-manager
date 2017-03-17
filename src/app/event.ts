export class Event {
  id: number;
  title: string = '';
  date: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
