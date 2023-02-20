import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { v4 as generateID } from 'uuid';

export class ZoneModel {
  constructor({
    x = 10,
    y = 10,
    title = 'New Zone',
    splash = null,
  } = {}) {
    this.id = generateID();
    this.x = x;
    this.y = y;
    this.title = title;
    this.splash = splash
  }
}

export const useZonesState = defineStore('zones', {
  state: () => ({
    all: useStorage('all-zones', [
      new ZoneModel({
        title: 'New zone',
      })
    ])
  }),
  actions: {
    addZone(data) {
      this.all.push(new ZoneModel(data));
    },
    removeZone(data) {
      this.all = this.all.filter(zone => zone.id !== data.id);
    },
    getZone(data) {
      return this.all.find(zone => zone.id === data.id);
    }
  },
});