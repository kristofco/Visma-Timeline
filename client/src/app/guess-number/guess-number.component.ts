import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guess-number.component.html',
  styleUrls: ['./guess-number.component.scss']
})
export class GuessNumberComponent implements OnInit {
  secretNum: number = Math.floor(Math.random() * 10 + 1);

  // guessedNum: number = 0;
  ResultMessage: string = '';

  Form = this.formBuilder.group({
    guessedNum: 0,
  });

  constructor(private formBuilder: FormBuilder,) { }

  onSubmit() {
    // console.log(this.secretNum);
    // console.log(this.Form.value.guessedNum);
    this.secretNum = Math.floor(Math.random() * 10 + 1);
    if (this.secretNum == this.Form.value.guessedNum) {
      return this.ResultMessage = 'Congrats!!!!';
    }
    return this.ResultMessage = 'Not today :('
  }

  ngOnInit(): void {
    // console.log(this.secretNum);

  }

}
