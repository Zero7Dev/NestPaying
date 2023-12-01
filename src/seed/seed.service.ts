import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './Interfaces/poke-response.interface';
import { ClienteResponse } from './Interfaces/Cliente-Response.interface';

@Injectable()
export class SeedService {
  private readonly axios:AxiosInstance=axios;
  async ExecuteSeed() {
    const {data}=await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=40');
    data.results.forEach(({name,url})=>{
      const segments=url.split('/');
      const no:number=+segments[segments.length-2]

    })
    return data.results;
  }


  async ClientesSeed(){
    const ClientesFake=await this.axios.get< ClienteResponse>('');
    const {data}=ClientesFake;
    data.results.forEach(({name,cedula})=>{

    })
  }
}


