import SalaryJob from "../src/SalaryJob";

describe("SalaryJob", ()=> {
    test("The properties are set for: salary, title, yearsRequired and remote", () => {
        let potato:SalaryJob = new SalaryJob (2500, "Entry Level", 2, true);
        expect(potato.salary).toBe(2500);
        expect(potato.title).toBe("Entry Level");
        expect(potato.yearsRequired).toBe(2);
        expect(potato.remote).toBe(true);
    });
    test("yearsRequired defaultds to 0", () =>{
        let potato:SalaryJob = new SalaryJob(2500, "Entry Level", 0, true);
        expect(potato.yearsRequired).toBe(0);
    });

    test("remote defaults to false,when the 4th constructor parameter is omitted", ()=> {
        let potato:SalaryJob = new SalaryJob(3000, "Mid-Level", 4, false);
        expect(potato.remote).toBe(false);
    });
    test("the getAnnualPay method returns the saraly propert", () => {
        let potato:SalaryJob = new SalaryJob(3000, "Mid-Level", 4, true);
        expect(potato.getAnnualPay()).toBe(3000);
    });
});