import RemoteCandidate from "../src/RemoteCandidate";
import Candidate from "../src/Candidate";
import Job from "../src/Job";
import HourlyJob from "../src/HourlyJob";
import SalaryJob from "../src/SalaryJob";

describe("RemoteCandidate", () => {
    test("the name and timezone are set from the constructor parameter", () => {
        let cookies:RemoteCandidate = new RemoteCandidate("Sandy", "Pacific Time");
        expect(cookies.name).toBe("Sandy");
        expect(cookies.timezone).toBe("Pacific Time");
        expect(cookies.yearsExperience).toBe(0);
    });
    
    //test for fitsJob 
    test("fitsJob returns true when yearsExperience is greater than yearsRequired and remote is true.", () => {
        let cookies:RemoteCandidate = new RemoteCandidate("Robert","CT");
        cookies.addExperience(3); // it'll already check for both has to be === true ((this.yearsExperience >= job.yearsRequired && job.remote === true))
        let lettuce:SalaryJob = new SalaryJob(2000, "entry-level",2,true);
        let bacon:HourlyJob = new HourlyJob(30,"web developer", 0,false);
        expect(cookies.fitsJob(lettuce)).toBe(true);
        expect(cookies.fitsJob(bacon)).toBe(false);
        
    });
    //fitsJob returns true when yearsExperience is equal to yearsRequired and remote is true.
    test("fitsJob returns true when yearsExperience is equal to yearsRequired and remote is true.", () => {
        let cookies:RemoteCandidate = new RemoteCandidate("Roberta","East Coast");
        cookies.addExperience(0); // it'll already check for both has to be === true ((this.yearsExperience >= job.yearsRequired && job.remote === true))
        let lettuce:SalaryJob = new SalaryJob(3000, "entry-level",5,true);
        let bacon:HourlyJob = new HourlyJob(30,"web developer", 0,false);
        expect(cookies.fitsJob(lettuce)).toBe(false);
        expect(cookies.fitsJob(bacon)).toBe(false);
        
    });
    test("experience = required", () => {
        let cookies:RemoteCandidate = new RemoteCandidate("June" , "Eastern Standard Time");
        cookies.addExperience(3);
        let lettuce:SalaryJob = new SalaryJob(2000, "entry-level",3,true);
        let bacon:HourlyJob = new HourlyJob(12, "intern", 3, true);
        expect(cookies.fitsJob(lettuce)).toBe(true);
        expect(cookies.fitsJob(bacon)).toBe(true);
      });
      test("experience < required", () => {
        let cookies:RemoteCandidate = new RemoteCandidate("June" , "Eastern Standard Time");
        cookies.addExperience(3);
        let lettuce:SalaryJob = new SalaryJob(2000, "entry-level",4,true);
        let bacon:HourlyJob = new HourlyJob(12, "intern", 4, true);
        expect(cookies.fitsJob(lettuce)).toBe(false);
        expect(cookies.fitsJob(bacon)).toBe(false);
      });
      test("experience > required and remote is false", () => {
        let cookies:RemoteCandidate = new RemoteCandidate("June" , "Eastern Standard Time");
        cookies.addExperience(3);
        let lettuce:SalaryJob = new SalaryJob(2000, "entry-level",4,false);
        let bacon:HourlyJob = new HourlyJob(12, "intern", 4, false);
        expect(cookies.fitsJob(lettuce)).toBe(false);
        expect(cookies.fitsJob(bacon)).toBe(false);
      });

});
