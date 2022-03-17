class Book{
    //constructor:function(){}
    constructor(type,title){
        this.type = type;
        this.title = title;
    }
    //list:function(){}
    list(){
        document.write(
            `
            <p>
            ${this.type} : ${this.title}
            </p>
            `
        )
    }
}


const photo = new Book('graphic','photoshop');
const vector = new Book('graphic','illustrator');
const code = new Book('it','html');

photo.list();
vector.list();
code.list();