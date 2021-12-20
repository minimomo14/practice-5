import Candidate from "./Candidate";
import Job from "./Job";

class RemoteCandidate extends Candidate {
    timezone: string;
    
   constructor(name:string, timezone:string) {
       super(name);
       this.timezone = timezone;
   }
   fitsJob(job: Job): boolean {
    if (this.yearsExperience >= job.yearsRequired && job.remote === true) {
        return true;
    } else {
        return false;
    } 
   }
}
export default RemoteCandidate;

