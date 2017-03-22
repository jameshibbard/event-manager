import { Event } from './event';

export const EVENTS: Event[] = [
  {
    id: 1,
    type: 'Symposium',
    date: new Date('2017-05-22'),
    title: 'The intriguing signaling triad: LRP1, NMDA and tPA',
    speaker: 'Dennis Vivien, Petra May',
    host: 'Ewa Bres'
  },
  {
    id: 2,
    type: 'Symposium',
    date: new Date('2017-06-19'),
    title: 'Neurodegeneration in glaucoma: implication of immunological and inflammatory alterations',
    speaker: 'Rudolf Fuchshofer, Franz Grus, Stefanie Joachim',
    host: 'Ulf Eysel'
  },
  {
    id: 3,
    type: 'Colloquium',
    date: new Date('2017-03-28'),
    title: 'Place field assembly distribution encodes episodic-like memory',
    speaker: 'Marian Tsanov',
    host: 'Denise Manahan-Vaughan'
  },
];
