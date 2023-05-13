import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/main';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TipoOrganizacion } from 'src/interfaces';
import { TipoOrganizacionService } from 'src/app/service/tipo_organizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css'],
})
export class ExperienciaFormComponent {
  
  experiencia: Experiencia = {} as Experiencia;
  
  tiposOrganizaciones: TipoOrganizacion[]=[];

  opcion:String={} as String;
  

  constructor(private route: ActivatedRoute, 
    private experienciaService:ExperienciaService, 
    private tipoOrganizacionService: TipoOrganizacionService,
    private router:Router){}


  ngOnInit() {
    this.opcion="create";
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if(id!=null){
      this.opcion="edit"
      this.experienciaService.getOne(id).subscribe(
        (experiencia) => {
          this.experiencia = experiencia;
        }
      )
    }else{
      this.experiencia = new Experiencia();
    }
    
    this.tipoOrganizacionService.getAll().subscribe(
      (tiposOrganizaciones) => {
        this.tiposOrganizaciones = tiposOrganizaciones;
      }
    )
  }

  onSubmit() {
    if(this.opcion=="edit"){
      this.experienciaService.update(this.experiencia.id,this.experiencia).subscribe(()=>{{this.router.navigate(['']);}});
    }else{
      this.experienciaService.save(this.experiencia).subscribe(()=>{this.router.navigate(['']);});
    }
    
  }

  
}
