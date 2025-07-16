export type EmployeeProps = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export class Employee {
  constructor(public props: EmployeeProps) {}

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get job(): string {
    return this.props.job;
  }

  get admission_date(): string {
    return this.props.admission_date;
  }

  get phone(): string {
    return this.props.phone;
  }

  get image(): string {
    return this.props.image;
  }

  toJSON() {
    return {
      id: this.props.id,
      name: this.props.name,
      job: this.props.job,
      admission_date: this.props.admission_date,
      phone: this.props.admission_date,
      image: this.props.image,
    };
  }
}
