export interface VaccinationRecord {
  id?: string;
  childId: string;
  vaccineId: string;
  aplicada: boolean;
  dataAplicacao?: string;
  dataPrevista: string;
}