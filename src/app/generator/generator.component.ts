import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  password = '';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  helpText = '';

  constructor() { }

  ngOnInit(): void { }

  generate = () => {
    let acceptedChars = '';
    const letters = 'abcdefghijklmnoprstuvxzy';
    const numbers = '1234567890';
    const symbols = '~!@#$%^&*()?';
    if (this.useLetters) acceptedChars += letters;
    if (this.useNumbers) acceptedChars += numbers;
    if (this.useSymbols) acceptedChars += symbols;

    let generatedPass = '';
    for (let index = 0; index < this.length; index++) {
      if (acceptedChars === '') {
        this.helpText = 'Check at least one option and try again';
        break;
      }
      const i = Math.floor(Math.random() * acceptedChars.length);
      generatedPass += acceptedChars[i];
    }

    this.password = generatedPass;
  };

  onLengthInput = (value: string) => {
    const lengthValue = +value;
    if (!isNaN(lengthValue))
      this.length = lengthValue;
    console.log(this.length);
  };
  onUseLetters = () => this.useLetters = !this.useLetters;
  onUseNumbers = () => this.useNumbers = !this.useNumbers;
  onUseSymbols = () => this.useSymbols = !this.useSymbols;

}
