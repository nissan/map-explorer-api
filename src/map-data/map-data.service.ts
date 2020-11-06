import { Injectable } from '@nestjs/common';
import { CreateMapDataDto } from './dtos/create-map-data.dto';
import { UpdateMapDataDto } from './dtos/update-map-data.dto';

@Injectable()
export class MapDataService {
    findAll(limit:number=20, offset:number=0){
        return `Finding All. Limit: ${limit}, Offset:${offset}`;
    }

    findOne(id:number){
        return `Finds a particular point in my map with mapDataId: ${id}`;
    }

    findAllDeleted(limit:number, offset:number){
        return `Finding All Deleted. Limit: ${limit}, Offset:${offset}`;
    }

    create(createMapDataDto:CreateMapDataDto){
        return "Creates some new map data for insertion into map data database";
    }

    update(id:number, updateMapDataDto:UpdateMapDataDto){
        return `Will update an existing bit of map data for id ${id} in the map database`;
    }

    remove(id:number){
        return `Will remove map data for id ${id} (soft delete)`;
    }
}
