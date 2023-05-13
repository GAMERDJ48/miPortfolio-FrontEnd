import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/main';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent {
  contacto: Contacto={} as Contacto;

  opcion:string="edit";
  

  constructor(private route: ActivatedRoute, private contactoService: ContactoService, private router: Router){}
  
  ngOnInit() {
    this.opcion="create";
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if(id!=null){
      this.opcion="edit"
      this.contactoService.getOne(id).subscribe(
        (contacto) => {
          this.contacto = contacto;
        }
      )
    }else{
      this.contacto = new Contacto();
    }
  }

  onSubmit() {
    if(this.opcion=="edit"){
      this.contactoService.update(this.contacto.id,this.contacto).subscribe(
        (contacto)=>{{this.contacto = contacto; this.router.navigate(['']);
          }}
        );
    }else{
      this.contactoService.save(this.contacto).subscribe(()=>{this.router.navigate(['']);});
    }
    
  }
  
}
