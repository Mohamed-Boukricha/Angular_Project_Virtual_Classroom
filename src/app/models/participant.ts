/**
 * Participant
 */
export class Participant
{
    /**
     * Id  of participant
     */
    id:number;
    /**
     * Nom  of participant
     */
    nom:string;
    /**
     * Prenom  of participant
     */
    prenom:string;
    /**
     * Email  of participant
     */
    email:string;
    /**
     * Age  of participant
     */
    age:number;
    
    /**
     * Creates an instance of participant.
     * @param id 
     * @param nom 
     * @param prenom 
     * @param email 
     * @param age 
     */
    constructor(id,nom,prenom,email,age){

        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.email=email;
        this.age=age;

    }
   

}
