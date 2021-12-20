import HourlyJob from "../src/HourlyJob";

describe("HourlyJob", ()=> {
    test("the hourlyWage, title, yearsRequired and remote", () => {
        let tomato:HourlyJob = new HourlyJob(50, "Mid-Level", 2, false);
        expect(tomato.hourlyWage).toBe(50);
        expect(tomato.title).toBe("Mid-Level");
        expect(tomato.yearsRequired).toBe(2);
        expect(tomato.remote).toBe(false);
    });
    test("yearsRequired defaults to 0, when 3rd constructor parameter is omitted", () => {
        let tomato:HourlyJob = new HourlyJob(25, "entry-level", 0, true);
        expect(tomato.yearsRequired).toBe(0);   
    });
    test("remote defaults to false", () => {
        let tomato:HourlyJob = new HourlyJob(300, "software engineer", 5, false);
        expect(tomato.remote).toBe(false);
    });
    test("the getAnnualPay method returns the hourlyWage property times 2000", () => {
        let tomato:HourlyJob = new HourlyJob(150, "project manager", 5, true);
        expect(tomato.getAnnualPay()).toBe(300000);
    });
});