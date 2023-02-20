import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { v4 as generateID } from 'uuid';

export class ZoneModel {
  constructor({
    x = 0,
    y = 0,
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
        title: 'Underdark entrence',
        splash: 'https://images.unsplash.com/photo-1575683990472-562331e63ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
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