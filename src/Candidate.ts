import Job from "./Job";

class Candidate  {
    filter(): any {
        throw new Error("Method not implemented.");
    }
    name: string;
    yearsExperience: number = 0;
    
    
    constructor(name: string) {
        this.name = name
    }
    
    addExperience(years: number): void {
       this.yearsExperience += years;
    }
    fitsJob(job:Job): boolean {
         if (this.yearsExperience >= job.yearsRequired) {
            return true;
        } else {
            return false;
        }   
    }     

}
export default Candidate;
