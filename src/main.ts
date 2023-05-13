import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TipoOrganizacion } from './interfaces';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  export const environment = {
    production: false,
    API_URL: 'http://localhost:8080/portfolio',
  };


  export class Contacto{
    id: number;
    nombre: string;
    url: string;

    constructor(id?:number, nombre?:string, url?:string){
      this.id=id || 0;
      this.nombre=nombre || "";
      this.url=url || "";
    }
}



export class Experiencia{
    id: number;
    puesto: string;
    organizacion: string;
    tipoOrganizacion: TipoOrganizacion;
    urlImagen: string;
    anioDesde: number;
    
    anioHasta: number;
    descripcion:string;

    

    constructor(id?:number, organizacion?:string, puesto?:string, urlImagen?:string, 
      tipoOrganizacion?:TipoOrganizacion,descripcion?:string, anioDesde?:number, anioHasta?:number){
      this.id=id || 0;
      this.organizacion=organizacion || "";
      this.puesto=puesto || "";
      this.urlImagen=urlImagen || "";
      this.tipoOrganizacion=tipoOrganizacion || {} as TipoOrganizacion;
      this.descripcion=descripcion || "";
      this.anioDesde=anioDesde || 0;
      this.anioHasta=anioHasta || 0;
    }

    
}
export class Formacion{
    id: number;
    organizacion: string;
    tipoOrganizacion: TipoOrganizacion;
    especialidad: string;
    urlImagen: string;
    descripcion: string;
    anioDesde: number;
    anioHasta: number;

    constructor(id?:number, organizacion?:string, especialidad?:string, urlImagen?:string, 
      tipoOrganizacion?:TipoOrganizacion,descripcion?:string, anioDesde?:number, anioHasta?:number){
      this.id=id || 0;
      this.organizacion=organizacion || "";
      this.especialidad=especialidad || "";
      this.urlImagen=urlImagen || "";
      this.tipoOrganizacion=tipoOrganizacion || {} as TipoOrganizacion;
      this.descripcion=descripcion || "";
      this.anioDesde=anioDesde || 0;
      this.anioHasta=anioHasta || 0;
    }
}
export class Proyecto{
    id: number;
    titulo: string;
    url: string;
    urlBack: string;
    descripcion: string;
    stackTecnologico: string[];
    anioDesde: number;
    anioHasta: number;

    constructor(id?:number, titulo?:string, url?:string, descripcion?:string, stackTecnologico?:string[], anioDesde?: number, 
      anioHasta?: number, urlBack?: string){
      this.id=id || 0;
      this.titulo=titulo || "";
      this.url=url || "";
      this.urlBack=urlBack || "";
      this.descripcion=descripcion || "";
      this.stackTecnologico=stackTecnologico || {} as string[];
      this.anioDesde=anioDesde || 0;
      this.anioHasta=anioHasta || 0;
    }
}
export class Habilidad{
    id: number;
    nombre: string;
    nivelHabilidad: number;

    constructor(id?:number, nombre?:string, nivelHabilidad?:number){
      this.id=id||0;
      this.nombre=nombre||"";
      this.nivelHabilidad=nivelHabilidad||0;
    }
}

export class Persona{
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  profesion: string;
  descripcion: string;
  telefono:string;
  urlFoto: string;
  urlBanner: string;
  contactos:Contacto[];
  formacion:Formacion[];
  habilidades:Habilidad[];
  experiencias:Experiencia[];
  proyectos:Proyecto[];

  constructor(id:number, telefono:string, urlFoto:string, urlBanner:string, contactos:Contacto[], 
    formacion:Formacion[],habilidades:Habilidad[],experiencias:Experiencia[],proyectos:Proyecto[], descripcion:string,
    nombre:string,apellido:string,fechaNacimiento:Date,profesion:string){
      this.nombre=nombre;
      this.apellido=apellido;
      this.fechaNacimiento=fechaNacimiento;
      this.profesion=profesion;
      this.id=id;
    this.telefono=telefono;
    this.urlFoto=urlFoto;
    this.urlBanner=urlBanner;
    this.contactos=contactos;
    this.descripcion=descripcion;
    this.formacion=formacion;
    this.habilidades=habilidades;
    this.experiencias=experiencias;
    this.proyectos=proyectos;
    
  }

}