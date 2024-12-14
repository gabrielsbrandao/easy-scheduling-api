import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { HttpModule } from '@nestjs/axios';
import { GeolocationService } from 'src/geolocatilization/geolocalization.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService, GeolocationService],
  exports: [ClientService]
})
export class ClientModule {}
