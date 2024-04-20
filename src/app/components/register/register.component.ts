import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../interfaces/Usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ValidForm } from '../../helpers/validForm';
import { ValidUser } from '../../helpers/validUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  form!:FormGroup;

  usuario:Usuario[]=[];

  constructor(private usuarioService:UsuarioService,
            private _formBuilder:FormBuilder,
            private valid:ValidForm,
            private userValid:ValidUser){
              this.userValid.validOnOFF()&&(this.userValid.userValid_Login());
  }

  ngOnInit():void{
    this.form=this._formBuilder.group({
      username:[""],
      email:[""],
      password:[""],
      checkbox:[false]
    })
  }

  register():void{
    
    if(this.valid.textValid(this.form.value.username)){
      alert("O campo Username e obrigatorio!");
    }
    else if(this.valid.textValid(this.form.value.email) && this.valid.emailValid(this.form.value.email)){
      alert("O campo Email e obrigatorio!");
    }
    else if(this.valid.emailValid(this.form.value.email)){
      alert("Email Invalido!");
    }
    else if(this.valid.textValid(this.form.value.password)){
      alert("O campo Senha e obrigatorio!");
    }
    else if(this.valid.passwordValid(this.form.value.password)){
      alert("Senha deve ter no minimo 8 digitos!");
    }
    else if(!this.form.value.checkbox){
      alert("Porfavor selecione os termo e condicoes!");
    }
    else{
      
      let dataForm=new FormData();
      dataForm.append("username",this.form.value.username);
      dataForm.append("email",this.form.value.email);
      dataForm.append("password",this.form.value.password);

      this.usuarioService.registerUsuario(dataForm).subscribe(data=>{
        let info:any[]=data;
        if(info[0].status==1){
          //sessionStorage.setItem("tknIdshoopee",info[0].id);
          
          location.href="/dashboard";
        }else{
          alert(info[0].msg);
          
        }
      });

    }
  
  }

}