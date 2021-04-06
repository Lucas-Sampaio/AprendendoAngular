import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { Observable, fromEvent, merge } from 'rxjs';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validations';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit,AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  public MASKS = MASKS;
  
  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  validationMessages : ValidationMessages;
  genericValidator : GenericValidator;
  displayMessage: DisplayMessage = {};
  mudancasnaoSalvas :boolean;

  constructor(private fb: FormBuilder) { 
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessages)
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
      this.mudancasnaoSalvas = true;
    });
  }

  ngOnInit(): void {

    let senha = new FormControl('',[Validators.required,CustomValidators.rangeLength(6,15)]);
    let senhaConfirmacao = new FormControl('',[Validators.required,CustomValidators.rangeLength(6,15)],CustomValidators.equalTo(senha))

    this.cadastroForm = this.fb.group({
       nome : ['', Validators.required,Validators.minLength(2),Validators.maxLength(150)],
       cpf : ['',[Validators.required,NgBrazilValidators.cpf]],
       email : ['',[Validators.required,Validators.email]],
       senha : senha,
       senhaConfirmacao : senhaConfirmacao,
    });
  }

  adicionarUsuario(){
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({},this.usuario,this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
      this.mudancasnaoSalvas = false;
    }else{
      this.formResult = "Não submeteu"
    }
   
  }

}
