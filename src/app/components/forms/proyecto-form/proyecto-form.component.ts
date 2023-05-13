import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/main';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TipoOrganizacion } from 'src/interfaces';
import { TipoOrganizacionService } from 'src/app/service/tipo_organizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css'],
})
export class ProyectoFormComponent {
  
  proyecto: Proyecto = {} as Proyecto;
  
  tiposOrganizaciones: TipoOrganizacion[]=[];

  opcion:String={} as String;

  tecnologias: string="";
  

  constructor(private route: ActivatedRoute, 
    private proyectoService:ProyectoService,
    private router:Router){
      
    }


  ngOnInit() {
    this.opcion="create";
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if(id!=null){
      this.opcion="edit"
      this.proyectoService.getOne(id).subscribe(
        (proyecto) => {
          this.proyecto = proyecto;
          this.tecnologias=this.proyecto.stackTecnologico.join(',');
        }
      )
    }else{
      this.proyecto = new Proyecto();
    }
    
  }


  getTecnologias(): string[]{
    return this.tecnologias.split(",");
  }

  onSubmit() {
    this.proyecto.stackTecnologico=this.getTecnologias();
    if(this.opcion=="edit"){
      this.proyectoService.update(this.proyecto.id,this.proyecto).subscribe(()=>{{this.router.navigate(['']);}});
    }else{
      this.proyectoService.save(this.proyecto).subscribe(()=>{this.router.navigate(['']);});
    }
    
  }

  
}
