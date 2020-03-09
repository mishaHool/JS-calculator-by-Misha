window.onload = function () {
    
        class Mathss{

             butts=  "";
             out = "" ;
             strVal = "0";
             opArray = ['+', '-', '/', '*'];
             curentOp = '';
             curentOpInd = 0;
             firstNumber ='';
             equalsInd = 0;
             secondNumber ='';

            setInit = function() {
                this.butts = document.getElementsByClassName('butt');
                this.out = document.getElementById('output');
                for(let i=0;i<this.butts.length;i++){
                    let a = this.butts[i];
                    a.addEventListener('click', ()=>{
                        this.out.innerText += a.value;
                        this.strVal += a.value;
                        console.log(a.value);
                        if(a.value == '='){
                            this.equalsInd = this.strVal.indexOf('=');
                            this.result();
                        }else{
                            this.getOp(a.value);
                            if(this.curentOp == ''){
                                this.firstNumber += a.value;
                            }else{
                                this.secondNumber += a.value;
                            }
                        }

                    })
                }
            }

            getOp = function(symb){
                this.opArray.findIndex((e)=>{
                    if(e == symb){
                        this.curentOp =e
                        this.curentOpInd = this.strVal.indexOf(e);
                    };
                });
            }
            result = function () {
                    // for(let char of this.strVal){
                    //     if(this.strVal.indexOf(char) == this.curentOpInd){
                    //         break;
                    //     }
                    //     this.firstNumber += Number(char);
                    // }
                    // for(let char of this.strVal[this.curentOpInd++]){
                    //     if(this.strVal.indexOf(char) == this.equalsInd){
                    //         break;
                    //     }
                    //     this.secondNumber += Number(char);
                    // }
                switch (this.curentOp){
                    case '+':
                        this.out.innerText += Number(this.firstNumber)+Number(this.secondNumber);
                    break;
                    case '-':
                        this.out.innerText += this.firstNumber-this.secondNumber;
                    break;
                    case '*':
                        this.out.innerText += Number(this.firstNumber)*Number(this.secondNumber);
                    break;
                    case '/':
                        this.out.innerText += Number(this.firstNumber)/Number(this.secondNumber);
                    break;
                }
   
            }

        }
        let Mat = new Mathss();
        Mat.setInit();

}