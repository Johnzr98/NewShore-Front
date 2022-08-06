import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() text = '';
  @Input() placeholder: string = 'Search...';
  @Output() onKeyPressed: EventEmitter<string> = new EventEmitter();
  
  private debouncer: Subject<string> = new Subject();

  public formInput = this.fb.group({
    keyToSearch:  ['', [ Validators.required ] ],
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.suscribeDebouncer();
    this.suscribeKey();
  }

  private suscribeKey(){

    let key = this.formInput.get('keyToSearch');

    key?.valueChanges.subscribe(()=>{
      this.validateKey(key!);
    });
  }

  private validateKey(key: AbstractControl){
    let value: string = key?.value?.toUpperCase();

    value = value.slice(0,3);

    key?.patchValue(value, {emitEvent: false});
    this.debouncer.next(value);
  }

  private suscribeDebouncer(){
    this.debouncer
    .pipe(debounceTime(200))
    .subscribe(valor => 
    {
      this.onKeyPressed.emit(valor);
    })
  }

}
