import { PartialType } from "@nestjs/mapped-types";
import { CreateTaxiTripDto } from "./create-taxi-trip.dto";

export class UpdateTaxiTripDto extends PartialType(CreateTaxiTripDto) {}
