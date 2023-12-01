export interface ClienteResponse{
    id: number;
    cedula:number;
    name:String;
    results:  Result[];

}
export interface Result {
    cedula:number;
    name:String;
}