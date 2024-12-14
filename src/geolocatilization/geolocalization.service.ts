import { Injectable } from '@nestjs/common';  // Não muda
import { HttpService } from '@nestjs/axios';  // Corrigido: Importando de @nestjs/axios
import axios from 'axios'; // Continuamos usando axios para algumas requisições diretas

@Injectable()
export class GeolocationService {

  private readonly openCageApiKey = 'f74fd84cb8d7459ba879d6154e528126'; // Substitua pela sua chave
  private readonly nominatimApiUrl = 'https://nominatim.openstreetmap.org/search';

  constructor(private readonly httpService: HttpService) {}

  async getGeolocationFromOpenCage(address: string) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${this.openCageApiKey}`;
    
    try {
      const response = await axios.get(url); // Aqui você ainda usa axios diretamente

      if (response.data.results && response.data.results.length > 0) {
        const location = response.data.results[0].geometry;
        return { lat: location.lat, lng: location.lng };
      } else {
        throw new Error('Endereço não encontrado');
      }
    } catch (error) {
      throw new Error('Erro na requisição: ' + error.message);
    }
  }

  async getGeolocationFromNominatim(address: string) {
    const url = `${this.nominatimApiUrl}?format=json&q=${encodeURIComponent(address)}`;
    
    try {
      const response = await axios.get(url); // Aqui você ainda usa axios diretamente

      if (response.data.length > 0) {
        const location = response.data[0];
        return { lat: location.lat, lng: location.lon };
      } else {
        throw new Error('Endereço não encontrado');
      }
    } catch (error) {
      throw new Error('Erro na requisição: ' + error.message);
    }
  }
}
