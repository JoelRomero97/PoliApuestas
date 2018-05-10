export class Apuestamodel
{
    private evento : string;
    private date : string;
    private amount : number;


    constructor($evento: string, $date: string, $amount: number)
    {
		this.evento = $evento;
		this.date = $date;
		this.amount = $amount;
    }
    

    /**
     * Getter $date
     * @return {string}
     */
	public get $date(): string {
		return this.date;
	}

    /**
     * Getter $amount
     * @return {number}
     */
	public get $amount(): number {
		return this.amount;
	}

    /**
     * Getter $evento
     * @return {string}
     */
	public get $evento(): string {
		return this.evento;
	}
    
}