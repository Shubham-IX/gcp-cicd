import { CaseLogResponse } from '../../entity';
export interface CaseLogRepositoryInterface {
    postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse>;
    getCaseLog(caseId?: string): Promise<CaseLogResponse>;
    deleteCaseLog(caseId: string, caseLogId: string): Promise<CaseLogResponse>;
}
