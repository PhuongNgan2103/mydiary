class Message {
    constructor(text,color,x,y) {
        this.text  = '';
        this.color = 'blue';
        this.x = 0;
        this.y = 0;
        this.allMessage = [];
    }
    setText(str){
        this.text = str;
    }
    setColor(color){
        this.color = color;
    }
    setPush(x,y){
        this.x = x;
        this.y = y;
    }
    getText(){
        return this.text;
    }

    addMessage(str){
        this.allMessage= this.allMessage.unshift(str);
    }

}
