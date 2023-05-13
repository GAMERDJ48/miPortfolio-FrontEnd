import { Component, Input } from '@angular/core';
import { Formacion} from 'src/main';
import { Persona } from 'src/main';
import { ActivatedRoute } from '@angular/router';
import { FormacionService } from 'src/app/service/formacion.service';
import { TipoOrganizacion } from 'src/interfaces';
import { TipoOrganizacionService } from 'src/app/service/tipo_organizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion-form',
  templateUrl: './formacion-form.component.html',
  styleUrls: ['./formacion-form.component.css'],
})
export class FormacionFormComponent {
  @Input()
  formacion: Formacion = {} as Formacion;
  opcion: String={} as String; 
  
  tiposOrganizaciones: TipoOrganizacion[]=[];
  

  constructor(private route: ActivatedRoute, 
    private formacionService:FormacionService, 
    private tipoOrganizacionService: TipoOrganizacionService,
    private router:Router){}


    ngOnInit() {
      this.opcion="create";
      const idParam = this.route.snapshot.paramMap.get('id');
      const id = idParam ? +idParam : null;
  
      if(id!=null){
        this.opcion="edit"
        this.formacionService.getOne(id).subscribe(
          (formacion) => {
            this.formacion = formacion;
          }
        )
      }else{
        this.formacion = new Formacion();
      }
      
      this.tipoOrganizacionService.getAll().subscribe(
        (tiposOrganizaciones) => {
          this.tiposOrganizaciones = tiposOrganizaciones;
        }
      )
    }
  
    onSubmit() {
      if(this.opcion=="edit"){
        this.formacionService.update(this.formacion.id,this.formacion).subscribe(()=>{{this.router.navigate(['']);}});
      }else{
        this.formacionService.save(this.formacion).subscribe(()=>{this.router.navigate(['']);});
      }
      
    }

  
}
