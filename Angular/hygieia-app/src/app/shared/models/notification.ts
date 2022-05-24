export class NotifyModel {
    constructor(title: string, description: string, status: boolean=true)
    {
        this.title = title;
        this.description = description;
        this.status = status;
    }
    title!: string;
    description!: string;
    status!: boolean;
}