import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import * as fs from 'fs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about me 
    </a>
  `,
})
export class App implements OnInit {
  fileList: String[];

  constructor() {}

  ngOnInit() {
    this.fileList('./fileList');
  }

  getFileList(path: string) {
    this.fileList = fs.readdirSync(path); // Utilizza la funzione readdirSync di fs per leggere la cartella e ottenere la lista dei file
  }
}

bootstrapApplication(App);
