// Interface
interface ActorInterface {
    nameActor: string;
    ageActor: number;
    slogan? : string; 
    hobbies? : string[]; // Co the truyen hoac khong

    ShowInfo(): string;
}
class Actor implements ActorInterface {
    nameActor: string;
    ageActor: number;
    slogan? : string; 
    hobbies? : string[]; // Co the truyen hoac khong
    // Pham vi truy cap Class: Private, public, protected - Mac dinh khong khai bao la public
    constructor(nameActor: string, ageActor: number, slogan: string, hobbies: string[]) {
        this.nameActor = nameActor;
        this.ageActor = ageActor;
        this.slogan = slogan;
        this.hobbies = hobbies;
    }
    ShowInfo(): string {
        let listHobbies = this.hobbies?.join(" | ")
        return `Name: ${this.nameActor} - Age: ${this.ageActor}
        Hobbies: [${listHobbies}]`
    }
}
const GodCry = new Actor('Tran Thanh', 36, '', []);
// console.log(GodCry.ShowInfo());

// Thua ke
class Singer extends Actor {
    debut: number;
    constructor(nameActor: string, ageActor: number, slogan: string, hobbies: string[], debut: number) {
        super(nameActor, ageActor, slogan, hobbies);
        this.debut = debut;
    }
    ShowInfo(): string {
        return `${super.ShowInfo()}
        Debut: ${this.debut}`;
    }
}
const WifeGodCry = new Singer('HaryWon', 35, '', ['An', 'Ngu', 'Hat'], 2010);
console.log(WifeGodCry.ShowInfo());
