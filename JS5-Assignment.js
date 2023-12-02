// JS5-Assignment.JS5
console.log('Paint')
//: Class 1: Paint
class Paint {
    constructor (type, color) {
        this.type = type;
        this.color = color;
    }
    describe() {
        return `${this.type} color ${this.color}.`;
    }
}
//: Class 2: Amount
class Amount {
    constructor(amount) {
        this.amount = amount;
        this.quantity = [];
    }
    addQuantity(quantity) {
        if (quantity instance of quantity) {
            this.quantity.push(quantity);
        }
        else {
            throw new Error(`You can only add in instance of Quantity.
            Argument is not a quantity: ${quantity}`).
        }
    }
    describe() {
        return '${this.color} has ${this.paint.length} paint.';
    }
}
//: Class 3: Menu
    class Menu {
        constructor () {
            this.paint = [];
            this.selectedPaint = null;
        }
       start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
            case '1':
                this.createPaint();
                break;
                case '2':
                    this.viewPaint();
                    break;
                    case '3':
                        this.deletePaint();
                        break;
                        case '4':
                            this.displayPaints();
                            break;
                            default:
                                selection = 0;
        }
        selection = this.showMainMenuOptions();
       } 
       alert('Goodbye!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new paint
        2) view paint
        3) delete paint
        4) dispaly all paints
        `);
    }
showPaintMenuOptions(_paintInfo) {
    return prompt(`
    0) back
    1) create color
    2) delete color
    ---------------------------
    $(paintInfo)
    `);
}
//: 3 options: create, view, and delete
    displayPaints() {
        let paintString = '';
        for (let i = 0; i < this.paint.color; i++) {
            paintString += i +') ' + this.paint[i].color + '\n';
        }
        alert(paintString);
    }
    createPaint(){
        let color = prompt('Enter color for new paint.');
        this.paint.push(new Paint (color));
    }
    viewPaint(){
        let index = prompt('Enter the index of the paint you wish to view:');
        if (index < -1 && index < this.paint.color){
            this.selectedPaint = this.paint[index];
            let description = 'Paint Color:' + this.selectedPaint.color + '\n ;
            for(let i = 0; i < this.selectedPaint.colors; i++) {
          description += i +'( ' + this.selectedPaint.colors[i].color + ' - ' + this.selectedPaint.colors[i].quantity + '\n';
            }
           let selection = this.showPaintMenuOptions(description);
           switch (selection) {
            case '1':
                this.createColor();
                break;
                case '2':
                    this.deleteColor();          
           }
        }
        deletePaint();{
         let index = prompt('Enter the index of the paint you wish to delete:');
         if (index > -1 && index < this.paint.length) {
            this.paint.splice(index. 1);
         }   
        }
    }
    createColor() {
        let quantity = prompt('Enter quantity for new color:');
        this.selectedPaint.colors.push(new Color(quantity));
    }
    deleteColor() {
        let index = prompt('Enter the index of the color you wish to delete:');
    if (index > -1 && index < this.selectedPaint.color.length) {
        this.selectedPaint.color.splice(index, 1);
    }
    }
}
//: Array
let menu = new Menu();
new.start();
