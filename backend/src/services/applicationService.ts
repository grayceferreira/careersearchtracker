import { Application } from "../models/Application";

export class ApplicationService {
  constructor(
    private applications: Application[]
  ) {}

  findAll(): Application[] {
    return this.applications;
  }
}