import { Component, Input} from '@angular/core';
import { Contacto } from 'src/main';
import { faEnvelope, faCross } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  
  @Input()
  contacto: Contacto = {} as Contacto;
  icono = faCross;

  @Input()
  sesionIniciada:boolean=false;

  ngOnInit(){
    switch(this.contacto.nombre.toLowerCase()){
      case "github": this.icono = faGithub; break;
      case "gmail": this.icono = faEnvelope; break;
      case "facebook": this.icono = faFacebook; break;
      case "instagram": this.icono = faInstagram; break;
      case "twitter": this.icono = faTwitter; break;
      case "linkedin": this.icono = faLinkedin; break;
    }
  }

}
