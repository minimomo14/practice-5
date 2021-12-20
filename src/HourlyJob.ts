import Job from "./Job";

class HourlyJob implements Job {
    hourlyWage:number;
    title: string;
    yearsRequired: number;
    remote: boolean;
    constructor(
        hourlyWege: number,
        title: string,
        yearsRequired: number = 0,
        remote: boolean = false,
    ) {
        this.hourlyWage = hourlyWege,
        this.title = title,
        this.yearsRequired = yearsRequired,
        this.remote = remote
    }
    getAnnualPay(): number {
        return this.hourlyWage * 2000
    }

}
export default HourlyJob;