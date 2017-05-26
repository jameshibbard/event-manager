export class Event {
  id: number;
  type: string = '';
  date: Date;
  title: string = '';
  speaker: string = '';
  host: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
