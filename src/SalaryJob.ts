import Job from "./Job";

class SalaryJob implements Job {
    salary: number;
    title: string;
    yearsRequired: number;
    remote: boolean;
    constructor(
        salary: number,
        title: string,
        yearsRequired: number = 0,
        remote: boolean = false
    ) {
        this.salary = salary,
        this.title = title,
        this.yearsRequired = yearsRequired,
        this.remote = remote
    }

    getAnnualPay(): number {
        return this.salary;
    }

}

export default SalaryJob;