import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IMission, Mission, missionToApi } from "./mission.entity";
//ajouter a database.ts la classe 

export interface IService {
    id: string,
    nom: string,
    mission: IMission[],
    // OneToMany ChefDeService (user)
    // ManyToMany services
    // ManyToMany chefAnterieurs
}

@Entity("service")
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column({type: "varchar"})
    public nom!: string;

    @OneToMany(type => Mission, mission => mission.service)
    mission!: Mission[];

    // OneToMany ChefDeService (user)
    // ManyToMany services
    // ManyToMany chefAnterieurs
}

export const serviceToApi = (service: Service): IService => {
    return {
        id: service.id,
        nom: service.nom,
        mission: (service?.mission ?? []).map(mission => missionToApi(mission))
        // OneToMany ChefDeService (user)
        // ManyToMany services
        // ManyToMany chefAnterieurs
    };
}