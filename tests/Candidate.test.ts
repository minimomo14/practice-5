import Candidate from "../src/Candidate";
import HourlyJob from "../src/HourlyJob";
import SalaryJob from "../src/SalaryJob";

describe("Candiate", () => {
    test("the name property is set from the constructor perameter", () => {
        //parameter (name, yearsExperience, salary, title, remote, hourlyWage)
        let lettuce:Candidate = new Candidate("Thomas");
        expect(lettuce.name).toBe("Thomas");
    });
    
    test("Confirm that new instant of Candidate has yearExperience set to 0", () => {
        let lettuce:Candidate = new Candidate("Tony");
        expect(lettuce.yearsExperience).toBe(0);
    });
    
    //addExperience
    test("Calling addExperience once, increases yearsExperience by given number of years", () => {
        let lettuce:Candidate = new Candidate("Teddy");
        lettuce.addExperience(2);
        expect(lettuce.yearsExperience).toBe(2);//let bacon:addExperience = new addExperience(2); /// no need just add number in addExperience();
       
    });
    
    //fitsJob
    //1st test for fitsJob returns true when yearsExperience is greater than yearsRequired
    test("fitsJob1 ..Test some SalaryJob and some with HourlyJob", () => {
        let tomato:Candidate = new Candidate("Billy");
        tomato.addExperience(5);
        let lettuce:SalaryJob = new SalaryJob(2000, "entry-level",2,true);
        let bacon:HourlyJob = new HourlyJob(30,"web developer", 0,false);
        expect(tomato.fitsJob(lettuce)).toBe(true);
        expect(tomato.fitsJob(bacon)).toBe(true);
    });
    
    //2nd test for fitsJob returns true when yearsExperience is equal to yearsRequired.
    test("fitsJob2 ..Test some SalaryJob and some with HourlyJob", () => {
        let tomato:Candidate = new Candidate("June");
        tomato.addExperience(-1);
        let lettuce:SalaryJob = new SalaryJob(2000, "entry-level",2,true);
        let bacon:HourlyJob = new HourlyJob(30,"web developer", 0,false);
        expect(tomato.fitsJob(lettuce)).toBe(false);
        expect(tomato.fitsJob(bacon)).toBe(false);
    });
    
    //3rd test for fitsJob returns false when yearsExperience is less than yearsRequired.
    test("fitsJob3 ..Test some SalaryJob and some with HourlyJob", () => {
        let tomato:Candidate = new Candidate("Jane");
        tomato.addExperience(0);
        let lettuce:SalaryJob = new SalaryJob(2000, "entry-level",2,true);
        let bacon:HourlyJob = new HourlyJob(30,"web developer", 0,false);
        expect(tomato.fitsJob(lettuce)).toBe(false);
        expect(tomato.fitsJob(bacon)).toBe(true);
    });

});

